const express = require('express');
const app = express();
const mongooseConnect = require('./config/dbConnection');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
    res.json('Hello World!');
});


app.use('/books', bookRoutes);

(async function run() {
    try {
        await mongooseConnect();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error.message);
    }
})()