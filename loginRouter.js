
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const router = express.Router();

// const { login } = require('./loginController');
// Define login data
const loginData = {
    username: "luis610348",
    password: "Bankfor3!"
};

const login = async (req, res) => {
    try {
        console.log("Login function called");
        // const response = await axios.post('https://api.matchbook.com/bpapi/rest/security/session', loginData, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     timeout: 10000 // 10 seconds timeout
        // });

        // console.log('Login successful:', JSON.stringify(response.data));

        // // Save the response to a file
        // fs.writeFileSync('login-response.json', JSON.stringify(response.data, null, 2));

        // Send the response back to the client
        res.status(200).json({message: "Login successfully!"});
    } catch (error) {
        if (error.response) {
            console.error('Login failed:', JSON.stringify(error.response.data));
            res.status(error.response.status).json(error.response.data);
        } else if (error.code === 'ECONNABORTED') {
            console.error('Error: Request timeout');
            res.status(408).json({ message: 'Request timeout' });
        } else {
            console.error('Error:', error.message);
            res.status(500).json({ message: error.message });
        }
    } finally {
        console.log('Request completed.');
    }
}


// Using POST if you are submitting a form or sending data in the body
router.post('/login', login);
router.get('/', (req, res) => {
    res.json("Server is running")
})
module.exports = router;
