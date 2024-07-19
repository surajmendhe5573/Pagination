const mongoose= require('mongoose')

const postSchema= new mongoose.Schema({
    postTitle: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    }
});

module.exports= new mongoose.model('Post', postSchema)