import mongoose from "mongoose";
import { PostModel } from "./post.model";

mongoose.set('strictQuery',true);
mongoose.connect(
            'mongodb+srv://mossamui123:12354569@cluster0.2thpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        );

// async function createPost() {
//     const newPost = new PostModel({
//         title: `test-title-Thanapong-${Math.random()}` ,
//         likesCount: 100 ,
//     })
//     await newPost.save();
//     console.log('new', newPost);
// } 
// async function findByLikeCountGreaterThanNinety(){
//     const result = await PostModel.find({
//          likesCount:{
//             $lt: 90,
//             $gt: 9,
//          },
//     });
//     console.log('result', result);
// }  

// findByLikeCountGreaterThanNinety();
// createPost();


// async function createPost() {
//     const newPost = new PostModel({
//         title: `test-title-Thanapong-${Math.random()}` ,
//         likesCount: 100 ,
//     })
//     await newPost.save();
//     console.log('new', newPost);
// } 
// async function findByLikeCount(){
//     const result = await PostModel.find({
//          likesCount:{
//             $lt: 90, //=> (likeCount:90)
//             $gt: 9, 
//          },
//     });
//     console.log('result', result);
// }  

async function findBySearch() {
    const result = await PostModel.find({
        title: {
            $regex: /test/i,
        },
        likesCount: {
            $gt: 76,
        },
        status: 'published',
    },
    {
        title: true,
        status:true,
        }
    );
    console.log('result', result)
}

findBySearch();

// findByLikeCount();
// createPost();



