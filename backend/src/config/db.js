const { Sequelize } = require("sequelize");

// Initialize Sequelize with PostgreSQL (for Render)
const isProduction = process.env.NODE_ENV === "production";
const isRenderDB = process.env.DATABASE_URL && process.env.DATABASE_URL.includes("render.com");

const sequelize = process.env.DATABASE_URL 
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      logging: false,
      dialectOptions: (isProduction || isRenderDB) ? {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Required for Render Postgres
        },
      } : {},
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 5432,
        dialect: "postgres",
        logging: false,
        dialectOptions: isProduction ? {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        } : {},
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      }
    );


// Test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB CONNECTED (SEQUELIZE) ✅");
  } catch (error) {
    console.error("DB CONNECT ERROR (SEQUELIZE):", error.message);
  }
};

testConnection();

// RAW QUERY EXECUTION (for backward compatibility)
const exe = async (sql, params = []) => {
  try {
    const [results] = await sequelize.query(sql, {
      replacements: params,
    });
    return results;
  } catch (error) {
    console.error("QUERY ERROR:", error.message);
    throw error;
  }
};

// Export sequelize and exe for use in models and controllers
module.exports = { sequelize, exe };