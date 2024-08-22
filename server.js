import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import { bacSchema, bacStudents } from './student.js';
const app = express();
const PORT = 4000

app.use(cors());

app.use(express.json())
app.post('/result', async (req, res) => {
    try {
    await mongoose.connect('mongodb://localhost/bac');
    console.log(typeof req.body.number)

    const users = await bacStudents.find(
        {Num_Bac: req.body.number},
        "SERIE Moy_Bac "
    )
    //  console.log(users)
     res.send(users)
   } catch(error) {
    console.log(error)
   }
})

app.listen(PORT, () => {
    console.log('app running on ' + PORT)
})