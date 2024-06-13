import express from "express"
import mongoose from "mongoose"
import { shop } from "./models/shop.js";

const app = express();
const port = 8000;

app.set('view engine', 'ejs');

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shop');
  }

app.get('/', function (req, res) {
    const op = new shop({title: "krishna", desc: "jai Hind Dosto", isDone: false})
    op.save()
    res.render('pages/index', {title: 'EJS Engine'});
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  })