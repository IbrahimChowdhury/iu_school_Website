import mongoose from "mongoose";

const  teachersSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please porovide a user name"],
    },
    name:{
        type:String,
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
teachersSchema.pre('save', function (next) {
    this.date = new Date();
    next();
  });
  
const Teachers = mongoose.models.teachers || mongoose.model("teachers",teachersSchema)
export default Teachers;