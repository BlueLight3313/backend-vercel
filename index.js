const express = require('express');
const loginRouter = require('./loginRouter'); // Ensure this path is correct

const app = express();

app.use(express.json()); // To handle JSON requests
app.use(express.urlencoded({ extended: true })); // To handle URL-encoded data

app.use('/api', loginRouter); // Use the login router at the `/api` path
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
