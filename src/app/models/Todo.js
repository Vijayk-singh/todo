// Todo.js
const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
   type: {
        type:  String,
        default: 'img',
    },
    desc:{
        type:  String,
        required: true,
    }
});

// Export the model directly
export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
