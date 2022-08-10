const express = require("express");
const cors = require("cors");
const axios = require("axios");

const server = express();

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    server.use(cors())
    next();
})

server.listen(8080);

server.get("/api/fruityvice/all", async (req, res) => {
    const {data} = await axios.get("http://www.fruityvice.com/api/fruit/all")
    return res.send(data);
})

server.get("/api/fruityvice/:name", async (req, res) => {
    const {name} = req.params;
    const {data} = await axios.get(`https://www.fruityvice.com/api/fruit/${name}`)
    return res.send(data);
})