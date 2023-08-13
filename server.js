const express = require('express');
const bodyparser = require('body-parser');
const AdminRouter = require('./routers/users.routers');
const app = express();
app.use(bodyparser.json());
app.use(AdminRouter)

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
})
