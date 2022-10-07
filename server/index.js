const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    getMonsters,
    deleteMonster, 
    createMonster, 
    updateMonster,
    getCompliment,
    getFortune
} = require('./controller')

app.get(`/api/monsters`, getMonsters)
app.delete(`/api/monsters/:id`, deleteMonster)
app.post(`/api/monsters`, createMonster)
app.put(`/api/monsters/:id`, updateMonster)

app.listen(4000, () => console.log("Server running on 4000"));


app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

