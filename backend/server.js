const express = require('express');
const mongooseConnect = require('./config/dbConnection.js');
const bookRoutes = require('./routes/bookRoutes.js');
const app = express();
const cors = require('cors');


//% Configurazione Server
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//# Cors
// Permette a tutte le origini
//app.use(cors());

// Permette solo a specifiche origini
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get('/', (req, res) => {
    res.send('Backend Express.js attivo');
});

app.use('/books', bookRoutes);

//# Middleware per la gestione degli errori
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Errore interno' });
    next(err);
});

//% Avvio Server
(async function run() {
    try {
        await mongooseConnect();
        app.listen(PORT, () => console.log(`Backend attivo sulla porta ${PORT}`));
    } catch (err) {
        console.error('Errore interno:', err);
    }
})()
