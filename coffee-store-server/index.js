require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ougk6tn.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const db = client.db("coffeeDB");
        const coffeeCollection = db.collection("coffee");

        app.get("/coffee", async (req, res) => {
            const cursor = coffeeCollection.find();
            const data = await cursor.toArray();
            res.send(data);
        })

        app.get("/coffee/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.findOne(query);
            res.send(result);
        })

        app.post("/addCoffee", async (req, res) => {
            const newCoffee = req.body;
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result);
        })

        app.put("/updateCoffee/:id", async (req, res) => {
            const id = req.params.id;
            console.log(id);
            const query = { _id: new ObjectId(id) };
            const option = { upsert: true };
            const { Name, Chef, Taste, Category, Details, Photo, Supplier } = req.body;
            const newCoffee = {
                $set: {
                    Name,
                    Chef,
                    Taste,
                    Category,
                    Details,
                    Photo,
                    Supplier
                }
            }
            const result = await coffeeCollection.updateOne(query, newCoffee, option);
            res.send(result);
        })

        app.delete("/deleteCoffee/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        })


    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Working.....!");
})


app.listen(port, () => {
    console.log(`Coffee shope server is running on port ${port}`);
})