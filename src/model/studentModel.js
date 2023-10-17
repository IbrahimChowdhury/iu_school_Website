import mongoose from "mongoose";

const  studentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please porovide a user name"],
    },
    imageLinksa:{
        type:Array,       
    },
    imageLinksb:{
        type:Array,
   },   
    date:{
        type:Date,
       
    },
  
})
// Define a pre-save middleware to update the date field
studentSchema.pre('save', function (next) {
    this.date = new Date();
    next();
  });
  

const Student = mongoose.models.students || mongoose.model("students",studentSchema)
export default Student;