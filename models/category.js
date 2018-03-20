module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    categoryName: {
      type: DataTypes.STRING
    },
    surveyPoints: {
      type: DataTypes.INTEGER
    }
  });
  return Category;
};
