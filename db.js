


const mongoose = require("mongoose")



const URL = "mongodb+srv://lawrita:<lawrita>@cluster0.i0xkegj.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async()=>{
    await mongoose.connect(URL)
    .then(() => console,log("mongoDB Cconnected...")
    )
}

module.exports = connectDB