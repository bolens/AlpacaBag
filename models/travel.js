module.exports = function (sequelize, DataTypes) {
    var Travel = sequelize.define("Travel", {
        // burger_id: {
        //     type: DataTypes.INTEGER
        // },
        // burger_name: {
        //     type: DataTypes.STRING
        // },
        // devoured: {
        //     type: DataTypes.BOOLEAN
        // }
    });
    return Travel;
};
