const express = require("express");
const app = express();


const {db,sequelize} = require("./models")



app.get("/users",async (req,res)=>{
    const Users = db.users;
    const UserDetail = db.userDetail;

    let users = await Users.findAll({
                     include:[{
                        model:UserDetail,
                        as:"user_details"
                     }]
    })

    res.json(users)
})














app.listen(3000,()=>console.log("application running on 3000"))

