import mongoose, {Schema} from "mongoose"

const TodoSchema = new Schema({
    name: {
        type: String
    },
    status:{
        type: String
    },
});

export const TodoModel = mongoose.model('todo', TodoSchema)