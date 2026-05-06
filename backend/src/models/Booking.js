const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  car_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pickup_location: {
    type: DataTypes.STRING,
  },
  drop_location: {
    type: DataTypes.STRING,
  },
  start_date: {
    type: DataTypes.DATEONLY,
  },
  end_date: {
    type: DataTypes.DATEONLY,
  },
  distance_km: {
    type: DataTypes.DECIMAL(10, 2),
  },
  rate_per_day: {
    type: DataTypes.DECIMAL(10, 2),
  },
  rate_per_km: {
    type: DataTypes.DECIMAL(10, 2),
  },
  total_amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "PENDING",
  },
  booking_mode: {
    type: DataTypes.ENUM("RENTAL", "TRANSFER"),
    defaultValue: "RENTAL",
  },
  billing_type: {
    type: DataTypes.ENUM("PER_DAY", "PER_KM"),
    defaultValue: "PER_DAY",
  },
  start_time: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  payment_status: {
    type: DataTypes.ENUM("PENDING", "SUCCESS", "FAILED"),
    defaultValue: "PENDING",
  },
  razorpay_order_id: {
    type: DataTypes.STRING,
  },
  razorpay_payment_id: {
    type: DataTypes.STRING,
  },
  razorpay_signature: {
    type: DataTypes.STRING,
  },
  payment_method: {
    type: DataTypes.ENUM("CASH", "ONLINE"),
    defaultValue: "ONLINE",
  },
}, {
  tableName: "bookings",
  timestamps: false,
});

module.exports = Booking;
