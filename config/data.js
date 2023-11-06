const mongoose = require("mongoose")

async function connectDB(){
    try {
        //kết nối 1 trong 2 cách đều ok
        //kết nối mongodb ở local (local tức là máy của e)
        await mongoose.connect("mongodb://127.0.0.1:27017/demo_abc") //sao tên db lại để là account?
        //kết nối mongodb online
        // await mongoose.connect("mongodb+srv://huynhngocphuqs:<nhập pass vào đây>@cluster0.8mbczyo.mongodb.net/demo_crud?retryWrites=true&w=majority") //sao tên db lại để là account?

        console.log("connect db thanh cong");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = connectDB;