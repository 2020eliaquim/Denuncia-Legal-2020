const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
//rota about
app.get('/about', (req, res) =>{
    res.json({
        name: 'Eliquim Jordan',
        email: 'eliaquim_jordano@gmail.com',
        urls: [
            {
                type: 'facebook',
                url: 'facebook.com.br/eliaquimjordan'
            },
            {
                type: 'tweety',
                url: 'tweete.com.br/eliaquimjordan'
            }
        ]
    });
});
//rota raiz
app.get('/', (req, res) => {
    res.json({
        msg: "Funcionando...."
    });
});

app.listen(PORT, () => {
    console.log('Ouvindo na porta ' + PORT);
});