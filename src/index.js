const express = require("express");
const app = express();

const { ServerConfig} = require('./config')

app.listen(ServerConfig.PORT , () => {
    console.log (`Server is running on Server ${ServerConfig.PORT}`)
})