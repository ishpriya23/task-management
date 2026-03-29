const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});