module.exports = (sequelize,DataTypes) =>{
    const UserDetail = sequelize.define("user_details",{
      user_detail_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_address: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
    },
    {freezeTableName: true,
     timestamps: false});

    return UserDetail;
}