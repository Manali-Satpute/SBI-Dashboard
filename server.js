// server.js
const express = require('express');
const app = express();
const apiRouter = require('./api');

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});