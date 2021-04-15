const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),
    postSchema = new Schema(
        {
            description: {
                type: String,
                required: true
            }
        },
        {
            timestamps: true
        }
    )
module.exports = mongoose.model("Post", postSchema);