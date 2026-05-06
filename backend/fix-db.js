require("dotenv").config({ path: __dirname + "/.env" });
const { sequelize } = require("./src/config/db");

async function fixDB() {
  try {
    await sequelize.query("ALTER TABLE bookings MODIFY COLUMN id INT AUTO_INCREMENT;");
    console.log("Fixed bookings AUTO_INCREMENT");
    
    await sequelize.query("ALTER TABLE bookings ADD COLUMN payment_status ENUM('PENDING', 'SUCCESS', 'FAILED') DEFAULT 'PENDING';").catch(e => console.log("payment_status may already exist"));
    await sequelize.query("ALTER TABLE bookings ADD COLUMN razorpay_order_id VARCHAR(255);").catch(e => console.log("razorpay_order_id may exist"));
    await sequelize.query("ALTER TABLE bookings ADD COLUMN razorpay_payment_id VARCHAR(255);").catch(e => console.log("razorpay_payment_id may exist"));
    await sequelize.query("ALTER TABLE bookings ADD COLUMN razorpay_signature VARCHAR(255);").catch(e => console.log("razorpay_signature may exist"));
    console.log("Added payment columns.");

    process.exit(0);
  } catch (err) {
    console.error("DB Fix Error:", err);
    process.exit(1);
  }
}

fixDB();
