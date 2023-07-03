import express from 'express';
const app = express();
//create a port
const port = 3000;

//create a get route
app.all('/', (req, res) => res.send('Hello World!'));

//listen to the port
app.listen(port, () => console.log(`1/Googol server is listening on port ${port}!`));

//run the server
//node src/server/index.js

//open browser
//http://localhost:3000/