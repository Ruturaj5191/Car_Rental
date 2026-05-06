require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const { exe } = require("./src/config/db");

async function run() {
  try {
    await exe("ALTER TABLE bookings ADD COLUMN payment_method ENUM('CASH', 'ONLINE') DEFAULT 'ONLINE';");
    console.log("Column payment_method added successfully.");
  } catch (err) {
    if (err.code === "ER_DUP_FIELDNAME") {
      console.log("Column already exists. All good.");
    } else {
      console.error("Error modifying table:", err);
    }
  }
  process.exit();
}
run();
