import mongoose from "mongoose";

const postSchema  = mongoose.Schema({
    userId:
    {
        type: String,
        required: true
    },
    firstname:
    {
        type: String,
        required: true
    },
    lastname:
    {
        type: String,
        required: true
    },
    location:
    {
        type: String
    },
    description:
    {
        type: String,
        required: true
    },
    likes:
    {
        type: Map,
        of: Boolean,
    },
    comments:
    {
        type: Array,
        default: []
    }
},
{
    timestamps: true
})

const Post = mongoose.model("Post", postSchema);
export default Post;