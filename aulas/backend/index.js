const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana Omnistack 11",
        aluno: "Rafael Stoffels"
    });
});

app.listen(3333);