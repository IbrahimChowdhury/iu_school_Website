import mongoose from "mongoose";

const  noticeSchema = new mongoose.Schema({
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
        type: Date,
    },
},
// {
//     timestamps:true
// }
)

// Define a pre-save middleware to update the date field
noticeSchema.pre('save', function (next) {
  this.date = new Date();
  next();
});
 

const Notice = mongoose.models.notices || mongoose.model("notices",noticeSchema)
export default Notice;