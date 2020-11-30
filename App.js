const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
//rota about
app.get('/about', (req, res) =>{
    res.json({
        name: 'Eliquim Jordan',
        email: 'eliaquim_jordan@gmail.com',
    });
});
//rota raiz
app.get('/', (req, res) => {
    res.send('<span color="#f00 font-size="50">Josuel, este e um exemplo de um site com host gratuito! ps.: eliaquim</span>');
});

app.listen(PORT, () => {
    console.log('Ouvindo na porta ' + PORT);
});
