const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 5000;  // or any port of your choice

const pool = new Pool({
  user: "restaurant_website_db",
  host: "localhost",
  database: "restaurant_website_db",
  password: "your_password",
  port: 5432, // default PostgreSQL port
});

app.use(cors());
app.use(bodyParser.json());

// Define your endpoints here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
