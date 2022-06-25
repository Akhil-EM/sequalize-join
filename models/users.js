module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define("users",{
      user_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      user_detail_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
      } 
    },
    {freezeTableName: true,
     timestamps: false});

    


    return User;
}