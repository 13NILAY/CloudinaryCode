require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const cookieParser = require("cookie-parser");

app.use("/",require("./routes/fileUpload"));

const PORT=8080;
// const URL ="mongodb://127.0.0.1:27017/userInfo";
// // Connect to MongoDB
// const dbconnect= async()=>{
//   await mongoose.connect(URL)
//   .then(()=>{
//       console.log('connected')
//     }).catch((err)=>{
//       console.log(err)
//     })
// }


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware for cookies
app.use(cookieParser());

//routes

app.listen(PORT,()=>{
    console.log("Server is running on Port",PORT);
    // dbconnect();
})

// This is my app.js code

//const formData2 = new FormData();
// formData2.append("file", image);