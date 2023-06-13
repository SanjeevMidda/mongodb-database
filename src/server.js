const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3001;

const fruitSchema = new mongoose.Schema({
    name: String
});

app.get("/", (req, res) => {
    res.send("welcome, this is the homepage :)")
})

app.get("/fruits", (req, res) => {
    async function main(){
        await mongoose.connect('mongodb+srv://smidda1:I9LGqD4OewBkDUOa@test.s0zayyg.mongodb.net/?retryWrites=true&w=majority');
    
        const Fruit = mongoose.model('Fruit', fruitSchema);

        // const newFruit = new Fruit({name: 'strawberry'});
        // const newFruit2 = new Fruit({name: 'apples'});
    
        // await newFruit.save()
        // await newFruit2.save()
    
        let allFruits = await Fruit.find();
        res.send(allFruits);
    }
    
    main().catch(err => console.log(err))
 
})

app.listen(PORT, () => {
    console.log("Server is up and running on PORT: " + PORT);
})

