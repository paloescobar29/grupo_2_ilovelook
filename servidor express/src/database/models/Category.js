module.exports = function(sequelize, dataTypes) {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        }
    }
    let config = {
        tableName: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)
    Category.associate=models=>{
        Category.hasMany(models.Product,{
            as:"products",
            foreignKey:"categoryId"
        })
    }
    return Category
}