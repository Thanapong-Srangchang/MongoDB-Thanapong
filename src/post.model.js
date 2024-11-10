import mongoose, {Schema} from "mongoose";

const PostSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    content: {
        type: String,
    },
    likesCount:{
        type: Number,
        default:0
    },
    status:{
        type: String,
        enum:['draft', 'published'],
        default: 'draft',
    },
});
export const PostModel = mongoose.model('post', PostSchema);