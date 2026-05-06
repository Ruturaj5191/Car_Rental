require("dotenv").config({ path: require("path").join(__dirname, ".env") });
const { exe } = require("./src/config/db");

async function checkSchema() {
  try {
    const rows = await exe("DESCRIBE car_registration_requests");
    console.log(JSON.stringify(rows, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkSchema();
