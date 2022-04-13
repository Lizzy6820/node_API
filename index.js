import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/routes.js';
import mongoose from "mongoose";
import {} from "dotenv/config.js";
import cors from "cors";
//import dotenv from "dotenv"; AND THEN
//dotenv.config();


const app= express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.use(cors()) // allow  cross origin use

app.get('/',(req,res) =>{res.send("Welcome to my users API!")})

app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));





mongoose.connect(process.env.DB_CONNECTION,
()=> console.log('connected to DB'))
app.listen(PORT, ()=> console.log(`Server is running on port: http://localhost:${PORT}`))

