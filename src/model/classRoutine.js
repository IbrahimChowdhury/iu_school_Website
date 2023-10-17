import mongoose from "mongoose";

const  classRoutineSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please porovide a user name"],
    },
    body:{
        type:String,
      },
   imageLinks:{
        type:Array,
   },   
    date:{
        type:Date,
    },
  
})

// Define a pre-save middleware to update the date field
classRoutineSchema.pre('save', function (next) {
    this.date = new Date();
    next();
  });
  
const ClassRoutine = mongoose.models.classroutine || mongoose.model("classroutine",classRoutineSchema)
export default ClassRoutine;