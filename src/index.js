const express = require("express");
const app = express();

const apiRoutes = require('./routes')
const { ServerConfig} = require('./config')
console.log(ServerConfig.PORT)

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use('/api' , apiRoutes);

app.listen(ServerConfig.PORT , () => {
    console.log (`Server is running on Server ${ServerConfig.PORT}`)
})