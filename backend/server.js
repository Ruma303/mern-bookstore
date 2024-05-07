const express = require('express');
const mongooseConnect = require('./config/dbConnection.js');
const bookRoutes = require('./routes/bookRoutes.js');
const app = express();
const cors = require('cors');


//% Configurazione Server
require('dotenv').config();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use((err, req, res, next) => {
    console.log('Richiesta in arrivo:', req.method, req.path, req.body);
    if (err && err instanceof SyntaxError && 'body' in err) {
        console.error('Errore nella decodifica JSON:', err);
        return res.status(400).send('JSON malformato');
    }
    next(err);
});
app.use(express.urlencoded({ extended: true }));

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
    if (res.headersSent) {
        return next(err);
    }
    console.error("Errore intercettato:", err);
    res.status(err.statusCode || 500).send(err.message || 'Errore interno');
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
