const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados!');
  }
});

app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      res.status(500).send('Erro ao buscar usuários');
    } else {
      res.json(result);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});