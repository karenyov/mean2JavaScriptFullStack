# Mean 2 JavaScript FullStack

Este repositório contém códigos e anotações do curso Mean 2 JavaScript FullStack do [TreinaWeb](https://www.treinaweb.com.br/curso/mean-2-javascript-full-stack).


## Anotações

> MEAN: vem das iniciais das ferramentas MongoDB, Express, Angular, Node.js.

### Instalações
- [Git](https://git-scm.com/downloads).
- [MongoDB](https://www.mongodb.com/download-center).
- [Node.js](https://nodejs.org/en/download/).

- Nodemon(via Node.js | Terminal): `npm install -g nodemon`.
> Quando iniciamos o Node.js e alteramos um código JavaScript, temos que parar o servidor e subir novamente. O Nodemon já atualiza o servidor assim que ele observar que algum arquivo foi alterado.

- Express Generator via Node.js | Terminal): `npm install express-generator -g`.
> É um gerador de aplicações Express. Com ele nós podemos estruturar uma aplicação Express com apenas um comando. Facilitando no momento de criar uma aplicação, pois ele já cria com um aestrutura padrão.

- Angular CLI (via Node.js | Terminal): `npm install -g @angular/cli`.
- Heoruku CLI (via Node.js | Terminal): `npm install -g heroku-cli`.

## MongoDB
Para iniciar basta ir na pasta de instalação e executar o mongodb e mongo.
- Por padrão o Mongo inicia conectado a um banco "test".
- Para ver os bancos, utilizamos o comando "show dbs".
- Para selecionar um banco, utilizamos o comando "use nome_do_banco".
- Para ver as coleções do banco, utilizamos o comando "show collections".
- Para apagar um banco, use o comando "db.dropDatabase()".

### Inserindo, Buscando, Alterando e Removendo dados.
> Lembrando que todos esses comandos foram realizados no terminal do mongo.
- Selecionar o banco de dados: `use treinaweb`
- Criando objeto para collection "cursos": `var cursosObj = {name: 'Angular', category: 'Front-End', price: 120}`
- Inserindo o objeto na collection "cursos": `db.cursos.insert(cursosObj)`.
- Buscando o objeto inserido: `db.cursos.find()`.
- Exibir em formato de Objeto: `db.cursos.pretty()`.

- Atualizando dados: `db.cursos.update({name: 'Angular'}, {$set: {price:125}})`.
> Lembrando que para alterar apenas o parâmetro passado deve ser adicionado o atributo "$set", caso contrário ele fará a alteração no objeto inteiro e removerá as posições que não forem adicionadas no update. O primeiro parâmetro é a condição para realizar o update e o segundo seria o objeto a ser substituido.

- Apangando o Objeto: `db.cursos.remove({price: 125})`.
- Apagar a collection inteira: `db.cursos.drop`.

- Buscando por Strings(com expressão regular): `db.cursos.find({name: /Mongo/})`.
- Buscando por "menor que (<)": `db.cursos.find({price: {$lt: 180} })`.
- Buscando por "maior que (>)": `db.cursos.find({price: {$gt: 180} })`.
- Buscando por "menor igual (<=)": `db.cursos.find({price: {$lte: 180} })`.
- Buscando por "maior igual (>=)": `db.cursos.find({price: {$gte: 180} })`.
- Buscando por "diferente de (!)": `db.cursos.find({price: {$ne: 180} })`.

## Express
> Os comandos foram executador via terminal
- Consultar comandos do express: `express -h`
- Criar projeto express: `express nome_projeto`
- Instalar as dependências(dentro da pasta do projeto criado): `npm install`
- Subir projeto express: `npm start`
> Acessar no navegador: http://localhost:3000/

- Subir projeto express(nodemon): `nodemon -exec 'npm start'`.
> dessa forma não será necessário iniciar o servidor toda vez que fizer alguma alteração.

## Angular
> Os comandos foram executador via terminal
- Criar projeto: `ng new nome-app`
- Subindo projeto: `ng serve`.
- Para se criar componentes, pipes, módulos etc, basta executar a seguinte estrutura: `ng generate tipo nome`

