// src/components/AdminPanel.js
import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch reservations from the API
    const fetchReservations = async () => {
      const response = await fetch("/api/reservations");
      const data = await response.json();
      setReservations(data);
    };
    fetchReservations();
  }, []);

  const deleteReservation = async (id) => {
    await fetch(`/api/reservations/${id}`, {
      method: "DELETE",
    });
    setReservations(reservations.filter((r) => r.id !== id));
  };

  const editReservation = async (id, updatedTime) => {
    await fetch(`/api/reservations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ time: updatedTime }),
    });
    setReservations(
      reservations.map((r) => (r.id === id ? { ...r, time: updatedTime } : r))
    );
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p>{reservation.name}</p>
            <p>{reservation.date}</p>
            <p>{reservation.time}</p>
            <button onClick={() => deleteReservation(reservation.id)}>
              Delete
            </button>
            <button onClick={() => editReservation(reservation.id, "new-time")}>
              Edit Time
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

