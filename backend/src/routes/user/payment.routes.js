const express = require("express");
const router = express.Router();
const paymentController = require("../../controllers/user/payment.controller");
const jwtUtils = require("../../utils/jwt");

// Create Razorpay Order
router.post("/order", jwtUtils.authMiddleware("user"), paymentController.createOrder);

// Verify Razorpay Payment
router.post("/verify", jwtUtils.authMiddleware("user"), paymentController.verifyPayment);

module.exports = router;
