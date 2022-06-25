const {Sequelize,DataTypes} = require("sequelize");
const users = require("./users");


const sequelize = new Sequelize(
    "sequalize-join",
    "root",
     "",{
      host:"localhost",
      dialect:"mysql",
      operatorsAliases:0,
      pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
      },
      logging:true
      // logging:false
    });


sequelize.authenticate()
         .then(()=> console.log("connected to database..."))
         .catch(error => console.log(error));

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.users = require("./users")(sequelize,DataTypes);
db.userDetail = require("./user-detail")(sequelize,DataTypes);

//associations
db.users.hasMany(db.userDetail, {
    foreignKey: 'user_detail_id',
    as: 'user_details'
})

db.userDetail.belongsTo(db.users, {
    foreignKey: 'user_detail_id',
    as: 'users'
});



//this line is very important because 
//every time the server runs data get lost if it's set 
//to false
// db.sequelize.sync({force:false})
//             .then(()=>console.log("application re-syncing"))
//             .catch(error=>console.log(error));


            
    
module.exports = {db,sequelize};