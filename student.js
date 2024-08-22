import mongoose from "mongoose";

 const bacSchema = mongoose.Schema({
    
    Etablissement_FR: String,
    Num_Bac: String,
    SERIE: String,
    Nom_FR: String,
    Moy_Bac: Number,
    Decision: String,
  })

 const bacStudents = new mongoose.model('students', bacSchema);
  
export {bacStudents, bacSchema}