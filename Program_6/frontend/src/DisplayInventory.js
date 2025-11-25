import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayInventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/items")
      .then(response => setItems(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Inventory List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayInventory;
