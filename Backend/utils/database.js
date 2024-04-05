import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"Backend\.env"
})

const databaseConnection = () =>{
    // console.log(process.env.MONGO_URI);
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Mongodb connected successfully");
    }).catch((error)=>{
        console.log("error",error);
    })
};
export default databaseConnection;