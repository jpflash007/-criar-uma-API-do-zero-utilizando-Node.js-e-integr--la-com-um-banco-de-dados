import express from 'express';
const app = express();

app.use(express.json());

const user= []

//1-cria os usuários cadastrados

app.post('/usuarios', (req, res) => {
  user.push(req.body);
  res.status(201).send('Usuário adicionado com sucesso!');
});


//2-consulta os usuários cadastrados

app.get('/usuarios', (req, res) => {
  res.status(200).json(user);
 });

app.listen(3000)

