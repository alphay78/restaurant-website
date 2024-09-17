const { Pool } = require('pg');

const pool = new Pool({
  user: '', // Replace with your actual username
  host: 'localhost',
  database: 'restaurant_website_db',
  password: 'password', // Replace with your actual password
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Database connection successful:', res.rows);
  }
  pool.end();
});
