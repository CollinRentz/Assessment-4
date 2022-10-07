const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    getMonsters,
    deleteMonster, 
    createMonster, 
    updateMonster
} = require('./controller')

app.get(`/api/monsters`, getMonsters)
app.delete(`/api/monsters/:id`, deleteMonster)
app.post(`/api/monsters`, createMonster)
app.put(`/api/monsters/:id`, updateMonster)

app.listen(4000, () => console.log("Server running on 4000"));

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

