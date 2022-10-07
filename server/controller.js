const monsters = require('./db.json')
let globalId = 4

module.exports = {

    getMonsters: (req, res) => res.status(200).send(monsters),
    deleteMonster: (req, res) => {
        let index = monsters.findIndex(elem => elem.id === +req.params.id)
        monsters.splice(index, 1)
        res.status(200).send(monsters)
    },
    createMonster: (req, res) => {
        let { name, price, imageURL } = req.body
        let newMonster = {
            id: globalId,
            name, 
            price,
            imageURL
        }
        monsters.push(newMonster)
        res.status(200).send(monsters)
        globalId++
    },
    updateMonster: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = monsters.findIndex(elem => +elem.id === +id)

        if (monsters[index].price <= 10000 && type === 'minus') {
            monsters[index].price = 0
            res.status(200).send(monsters)
        } else if (type === 'plus') {
            monsters[index].price += 10000
            res.status(200).send(monsters)
        } else if (type === 'minus') {
            monsters[index].price -= 10000
            res.status(200).send(monsters)
        } else {
            res.sendStatus(400)
        }
    },
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will soon contract an unpleasant disease.", "Your fly i down.", "You will find a surprise on your doorstep when you return home.", "Watch a movie with a significant other or loved one, you will be rewarded with a holy kiss.", "Check your back pocket, if there is nothing there then you gave yourself a nice pat on the bum, congrats."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }
}