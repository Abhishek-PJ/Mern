import React, { useState } from "react";
import axios from "axios";

function AddInventory() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/items", {
      name,
      quantity: Number(quantity)
    })
      .then(() => alert("Item added successfully"))
      .catch(err => console.log(err));

    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h2>Add New Item</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddInventory;
