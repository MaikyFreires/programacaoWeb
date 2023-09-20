const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

// Rota para renderizar o formulário
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Rota para processar o formulário
app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render(__dirname + '/views/dados.html', { nome, endereco, telefone, data });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
