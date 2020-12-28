const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
app.use(bodyParser.json())

app.get('/api/recipes', (req, res)=>{
    const myrecipes =[
        {
            "_id": "1",
            "image": "https://images.pexels.com/photos/14737/pexels-photo.jpg?cs=srgb&dl=pexels-daniel-lindstrom-14737.jpg&fm=jpg",
            "name": "Spaghetti Bolognese",
            "ingredients": "2 onions, 1tbsp olive oil, 1 garlic clove,500g minced beef, chopped tomatoes, salt and ground black pepper, 350g spaghetti",
            "serves": "4",
            "prep": "10min",
            "cooking": "40 min",
            "steps": "Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown and cook for another couple of mins.Stir in the tomatoes and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan."

        }
        
    
    ];


res.status(200).json({
    message: "everything is working",
    recipes:myrecipes});
});

app.post('/api/recipes', (req, res)=>{
    console.log('Recipe Successfully Recieved')
    console.log(req.body.image);
    console.log(req.body.name);
    console.log(req.body._id);
    console.log(req.body.steps);
    console.log(req.body.ingredients);
    console.log(req.body.serves);
    console.log(req.body.cooking);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})