import mongoose  from "mongoose";
import { UserModel } from "./user.model";


mongoose.set('strictQuery',true);
mongoose.connect(
            'mongodb+srv://mossamui123:12354569@cluster0.2thpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        );

        // async function createUser() {
        //     const newUser = new UserModel({
        //         username: "test-user" , 
        //         password:'test-password' ,
        //         email: 'test@test.com',
        //     })

// สร้างหลายๆอัน
async function createUser() {
    const newUser = new UserModel({
        username: `test-user-${Math.random()}` , 
        password:'test-password' ,
        email: `test@test.com-${Math.random}`,
    })

    const result= await newUser.save();
    console.log('result' , result);
}


 //ลบทีละอัน
// async function deleteUser() {
//     await UserModel.deleteOne({
//         _id: '67191fc910b57f8b99a40679',
//     });
//     console.log('deleted');
// }

// deleteUser();

// ลบทีละหลายๆอัน
async function deleteUsers() {
    await UserModel.deleteMany({
        username:{
            $in:[
            'test-user-0.4580233797661668',
            'test-user-0.11684165720503747'
        ],
        },
    });
    console.log('deleted multi-users');
}


async function updateUser() {
//     await UserModel.findByIdAndUpdate('6719274d31970ec4523f72c8',{
//         username:"updated-Thanapong-test",
//         birthDate: new Date(),
//         password:"updated-1234test",
//         email:"ThanapongTest@gmail.com"
//     });

    

    await UserModel.findOneAndUpdate({
        username: "updated-Thanapong-test",
        },
        {
            birthDate : new Date(),
        }
    );
}
async function  findUsers() {
    const listUsers = await UserModel.find({
        email:"test@test.com-function random() { [native code] }"
    });
    console.log(listUsers);
}

findUsers();

// updateUser();

// deleteUsers();

// createUser();
// createUser();
// createUser();
// async function createTodo() {
//     await mongoose.connect(
//         'mongodb+srv://mossamui123:12354569@cluster0.2thpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//     );

//     const newTodo = new TodoModel({
//         name: 'Thanapong Srangchang', 
//         status: 'in-progress',
//     });
//     const result = await newTodo.save();

//     console.log('result', result);
// }

// createTodo();