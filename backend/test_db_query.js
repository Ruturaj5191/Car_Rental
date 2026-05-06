const {exe} = require('./src/config/db'); 
exe(`SELECT id, car_id, DATE(start_date) as s, DATE(end_date) as e, status FROM bookings WHERE DATE(start_date) = DATE('2026-04-16')`)
  .then(res => { console.log(res); process.exit(0); })
  .catch(e => console.error(e));
