module.exports = function(sequelize, DataTypes) {
  var Destination = sequelize.define("Destination", {
    locationName: {
      type: DataTypes.STRING
    },
    lat: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    lon: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      }
    },
    surveyPoints: {
      type: DataTypes.DECIMAL
    },
    category: {
      type: DataTypes.STRING
    }
    // defaultValue: "Istanbul"
  });

  Destination.associate = function(models) {
    Destination.hasMany(models.PoI, {
      // as: 'Point',
      onDelete: "cascade"
    });
  };
  return Destination;
};
