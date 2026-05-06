const Razorpay = require('razorpay');
const crypto = require('crypto');
const { Booking } = require('../../models');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy_key_id',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'rzp_test_dummy_key_secret',
});

exports.createOrder = async (req, res) => {
  try {
    const { amount, booking_id } = req.body;

    if (!amount || !booking_id) {
      return res.status(400).json({ success: false, message: 'Amount and booking_id are required' });
    }

    const options = {
      amount: Math.round(Number(amount) * 100), // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: `receipt_order_${booking_id}`
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).json({ success: false, message: 'Failed to create order' });
    }

    // Update booking with the new order ID
    await Booking.update(
      { razorpay_order_id: order.id, payment_status: 'PENDING' },
      { where: { id: booking_id, user_id: req.user.id } }
    );

    res.status(200).json({
      success: true,
      order,
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy_key_id'
    });
  } catch (error) {
    console.error('Error creating razorpay order:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, booking_id } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || 'rzp_test_dummy_key_secret')
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is successful
      await Booking.update(
        { 
          status: 'BOOKED',
          payment_status: 'SUCCESS',
          razorpay_payment_id,
          razorpay_signature
        },
        { where: { id: booking_id, user_id: req.user.id } }
      );

      return res.status(200).json({ success: true, message: "Payment verified successfully" });
    } else {
      // Invalid signature
      await Booking.update(
        { payment_status: 'FAILED' },
        { where: { id: booking_id, user_id: req.user.id } }
      );
      return res.status(400).json({ success: false, message: "Invalid payment signature" });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
