module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
         type: dataTypes.INTEGER(10).UNSIGNED,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(50).UNSIGNED,
            allowNull: false
        },
        description: {
            type: dataTypes.VARCHAR(100),
        },
        price: {
            type: dataTypes.DECIMAL(1, 3),
            allowNull: false
        },
        amount: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        imageId: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        colorId: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        seasonId: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config)

    return Product
}