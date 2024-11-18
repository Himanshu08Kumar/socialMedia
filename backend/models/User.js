import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    firstname :
    {
        type : String,
        required : true,
        min : 2,
        max : 20,
    },
    lastname :
    {
        type : String,
        required : true,
        min : 2,
        max : 20,
    },
    email :
    {
        type : String,
        required : true,
        unique : true,
    },
    password :
    {
        type : String,
        required : true,
        min : 5,
    },
    friends: 
    {
        type: Array,
        default: [],
      },
    location : String,
    occupation : String,
    viewedProfile : Number,
    impression : Number,
},
{ 
    timestamps : true,
});

const User = mongoose.model("Userr", userSchema);
export default User;