const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const dotenv = require("dotenv")
require("dotenv").config(); // Import dotenv for environment variables

// Initialize Express
const cors =require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors())
// Database Connection Pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cake_ordering_system",
  password: "password",
  port: "5432",
});

// Test database connection
pool.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to the database");
  }
});

// Base Route
app.get("/", (req, res) => {
  res.send("Done");
});

// Endpoint to Create Order
app.post("/orders", async (req, res) => {
  const { user_id, cake_id, order_date } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO orders (user_id, cake_id, order_date) VALUES ($1, $2, $3) RETURNING *",
      [user_id, cake_id, order_date]
    );
    res.status(201).json(result.rows[0]); // Respond with the newly created order
  } catch (error) {
    console.error("Error inserting order:", error.message); // Improved error logging
    res
      .status(500)
      .json({ error: "An error occurred while inserting the order." });
  }
});

// Endpoint to Get All Orders
app.get("/orders", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM orders");
    res.status(200).json(result.rows); // Respond with all orders
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({ error: "An error occurred while fetching orders." });
  }
});

// Endpoint to Search/Filter Orders
app.get("/orders/search", async (req, res) => {
  const { user_id, cake_id } = req.query; // You can filter by user_id or cake_id
  let query = "SELECT * FROM orders WHERE 1=1"; // base query
  const params = [];

  if (user_id) {
    params.push(user_id);
    query += ` AND user_id = $${params.length}`;
  }
  if (cake_id) {
    params.push(cake_id);
    query += ` AND cake_id = $${params.length}`;
  }

  try {
    const result = await pool.query(query, params);
    res.status(200).json(result.rows); // Respond with filtered orders
  } catch (error) {
    console.error("Error searching for orders:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while searching for orders." });
  }
});

// Endpoint to Edit Order
app.put("/orders/:id", async (req, res) => {
  const { id } = req.params; // Order ID from URL
  const { order_date, cake_id } = req.body; // New order date and cake ID
  try {
    const result = await pool.query(
      "UPDATE orders SET order_date = $1, cake_id = $2 WHERE order_id = $3 RETURNING *",
      [order_date, cake_id, id]
    );
    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]); // Respond with the updated order
    } else {
      res.status(404).json({ error: "Order not found." });
    }
  } catch (error) {
    console.error("Error updating order:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while updating the order." });
  }
});

// Endpoint to Delete Order
app.delete("/orders/:id", async (req, res) => {
  const { id } = req.params; // Order ID from URL
  try {
    const result = await pool.query(
      "DELETE FROM orders WHERE order_id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length > 0) {
      res.status(200).json({ message: "Order deleted successfully." }); // Confirm deletion
    } else {
      res.status(404).json({ error: "Order not found." });
    }
  } catch (error) {
    console.error("Error deleting order:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the order." });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
