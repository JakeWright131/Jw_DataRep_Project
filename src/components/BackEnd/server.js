const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { stringify } = require('querystring');

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

const myConnectionString = 'mongodb+srv://admin:admin@cluster0.pqpao.mongodb.net/recipe?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

var recipeSchema = new Schema({
    image:String,
    name:String,
    _id:String,
    steps:String,
    ingredients:String,
    serves:String,
    cooking:String,
});

var RecipeModel = mongoose.model("recipe", recipeSchema)

app.get('/api/recipes', (req, res)=>{
    // const myrecipes =[
    //     {
    //         "_id": "1",
    //         "image": "https://images.pexels.com/photos/14737/pexels-photo.jpg?cs=srgb&dl=pexels-daniel-lindstrom-14737.jpg&fm=jpg",
    //         "name": "Spaghetti Bolognese",
    //         "ingredients": "2 onions, 1tbsp olive oil, 1 garlic clove,500g minced beef, chopped tomatoes, salt and ground black pepper, 350g spaghetti",
    //         "serves": "4",
    //         "prep": "10min",
    //         "cooking": "40 min",
    //         "steps": "Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown and cook for another couple of mins.Stir in the tomatoes and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.Meanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan."

    //     }
        
    
    // ];

RecipeModel.find((err, data)=>{
    res.json(data);
})    

// res.status(200).json({
//     message: "everything is working",
//     recipes:myrecipes});
})



app.put('/api/recipes/:id', (req, res)=>{
    console.log("Update Recipe: "+req.params.id);
    console.log(req.body);

    RecipeModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.delete('/api/recipes/:id',(req,res)=>{
    console.log("Delete Recipes: "+req.params.id);

    RecipeModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

app.get('/api/recipes/:id', (req,res)=>{
    console.log(req.params.id);

    RecipeModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

app.post('/api/recipes', (req, res)=>{
    console.log('Recipe Successfully Recieved')
    console.log(req.body.image);
    console.log(req.body.name);
    console.log(req.body._id);
    console.log(req.body.steps);
    console.log(req.body.ingredients);
    console.log(req.body.serves);
    console.log(req.body.cooking);

    RecipeModel.create({
        image:req.body.image,
        name:req.body.name,
        _id:req.body._id,
        steps:req.body.steps,
        ingredients:req.body.ingredients,
        serves:req.body.serves,
        cooking:req.body.cooking
    })

    res.send('Recipe Succeffully Added');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})