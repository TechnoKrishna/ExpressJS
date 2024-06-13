import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});

export const shop = mongoose.model('shop',shopSchema)