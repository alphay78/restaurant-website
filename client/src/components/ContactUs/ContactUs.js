import React, { useState } from "react";
import "./ContactUs.css"; 

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cakeType: "",
    cakeSize: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Order Data Submitted:", formData);

    await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    
    setFormData({
      name: "",
      email: "",
      cakeType: "",
      cakeSize: "",
      orderDate: "",
    });
  };

  return (
    <div className="order-container">
      <h1 className="order-title">Place Your Order!</h1>
      <p className="order-description">
        Fill out the form below to order your favorite cake!
      </p>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            name="cakeType"
            value={formData.cakeType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Cake Type
            </option>
            <option value="Chocolate Cake">Chocolate Cake</option>
            <option value="Vanilla Cake">Vanilla Cake</option>
            <option value="Red Velvet Cake">Red Velvet Cake</option>
            <option value="Lemon Cake">Lemon Cake</option>
            <option value="Carrot Cake">Carrot Cake</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="cakeSize"
            value={formData.cakeSize}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Cake Size
            </option>
            <option value="1 kilo">1 kilo</option>
            <option value="2 kilos">2 kilos</option>
            <option value="3 kilos">3 kilos</option>
            <option value="4 kilos">4 kilos</option>
            <option value="5 kilos">5 kilos</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
