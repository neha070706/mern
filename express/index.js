const express = require("express");
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  res.send('this is users page');
});

app.get('/sellers', (req, res) => {
  res.send('this is request from sellers');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

//command for running express
//cd express; npm run start
//we are trying to create aps with the help of node
//we want al alg ap p alg alg respnose aye so vo hua hn this is done with the help of tge exporess
//and same is done on backend on fun.js 
//and in this we have created the api using node js express

//package.json file it tells compiler what to run (all detail) and how to run
//package-lock.json
//node modules
//these 3 are very important for interviews point