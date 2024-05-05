//Chamando Express
const express = require('express')
const app = express()
const port = 3001
const mysql = require('mysql2')

//arquivo de configuração do banco de dados
const dbConfig = require('./configs/dbConfig')

//importando validador de dados
const isValidData = require('./tools/isValidData')

//arquivos de configuração recebimento de requisições HTTP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Configurar pasta onde arquivos estáticos serão disponibilizados
app.use(express.static('pages'));

//Rotas
app.get('/', (req, res) => {

    //Retornar arquivo html e status code na requisição
    res.sendFile(__dirname + '/pages/index.html')

})

//Rota POST para recebimento de dados do formulário
 app.post('/form-submit', (req, res) => {

    const sqlQueryAddData = `INSERT INTO Clients 
    (nome, idade, cpf, cep,telefone)
    VALUES (?, ?, ?, ?, ?)`;

    //atribuir dados do formulário
     const data = req.body

    //Validar dados vindo do formulário
     if(isValidData(data)){
        //Inserindo dados no banco de dados
        conn.query(sqlQueryAddData, [data.nome, data.idade, data.cpf, data.cep ,data.telefone]);
     }

     //Redirecionar para página inicial
     res.redirect('/')
    
})

//Conexão com banco de dados
const conn = mysql.createConnection(dbConfig)
conn.connect()


//Server escutando na porta definida
app.listen(port, ()=>{
    console.log('Rodando na porta ', port)
})