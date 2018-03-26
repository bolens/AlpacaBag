module.exports = function(sequelize, DataTypes) {
  var PoI = sequelize.define("PoI", {
    name: {
      type: DataTypes.STRING
    },
    destination: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    link: {
      type: DataTypes.STRING
    },
    photo: {
      type: DataTypes.STRING
    }
  });

  PoI.associate = function(models) {
    PoI.belongsTo(models.Destination, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PoI;
};
