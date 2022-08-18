const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(request, response) {
    response.render('index', {
        nome: 'Mateus',
        sobrenome: 'Lopes',
        email: 'mateuslopes1201@gmail.com',
        informacoes: '660 SANTINHA MANTOVANI - TEIXEIRÓPOLIS, RO 76928000 - (69) 992037147 -', 
        descricao: 'Tenho experiência em alavancar estruturas ágeis para fornecer uma sinopse robusta para visões gerais de alto nível. As abordagens iterativas da estratégia corporativa promovem o pensamento colaborativo para promover a proposta de valor geral.'
    });
});

app.get('/autor', function(request, response) {
    response.render('autor.ejs');
});

app.get('/sobre', function(request, response) {
    response.render('sobre.ejs');
});


app.listen('8000', function(){
    console.log('Webapp - On  Porta : 8000');
});
