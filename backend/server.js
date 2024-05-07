import express from 'express';
import path from 'path';
import mongooseConnect from './config/dbConnection.js';
import bookRoutes from './routes/bookRoutes.js';
import dotenv from 'dotenv';
const app = express();

//% Configurazione Server
dotenv.config();
const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1);
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Backend Express.js attivo');
});

app.use('/books', bookRoutes);

//# Middleware per la gestione degli errori
app.use((err, req, res, next) => {
    console.error("Errore intercettato:", err);
    if (res.headersSent) {
        return next(err);
    }
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
