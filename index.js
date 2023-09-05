import express from "express";
import {
    geocodingController
} from "./src/controllers/index.js"

const port = 3033,
    app = express();

app.get('/', (req, res) => res.send('Olá, mundo!'));
app.get('/geocoding/:address', geocodingController);
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
