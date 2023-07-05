const express  = require('express');

const server = express();

const userRoute = require('./routes/user.routes')
// Sử dụng file user.routes.js
server.use('/api/v1/users', userRoute)

const port = 3000;

server.listen(port, (req, res)=>{
  console.log(`http://localhost:${port}`);
});