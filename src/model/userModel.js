import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please porovide a user name"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "please provide a email address"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "please provide a password"]
    },
    date:{
        type:Date,
    },
  
})
// Define a pre-save middleware to update the date field
userSchema.pre('save', function (next) {
    this.date = new Date();
    next();
  });
  
const User= mongoose.models.users || mongoose.model("users",userSchema)
export default User;