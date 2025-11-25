const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());        
app.use(express.json());

let inventory = [
    { id: 1, name: "Pen", quantity: 20 },
    { id: 2, name: "Notebook", quantity: 50 }
];


app.get('/api/items', (req, res) => {
    res.json(inventory);
});

app.post('/api/items', (req, res) => {
    const newItem = {
        id: inventory.length + 1,
        name: req.body.name,
        quantity: req.body.quantity
    };

    inventory.push(newItem);
    res.json({ message: "Item added successfully", item: newItem });
});

app.listen(8000, () => {
    console.log("Backend running on port 8000");
});
