const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema({
    userId:{
        type: String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        require:true,
    },
    title: {
        type: String,
        required: true,
    },
    like:[{type:String}],
    description: {
        type:String,
        required: true,
    },
    image: {
        type:String,
    },
},
    {
        timestamps:true,
    }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;