const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Gabriel Netto');
});

app.listen(3000);