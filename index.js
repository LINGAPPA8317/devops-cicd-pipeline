const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps CI/CD Project – App is running 🚀');
});

app.listen(3000, () => {
  console.log("CI/CD auto trigger test");

});

