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
    pointsOfInterest: {
      type: DataTypes.STRING
    },
    surveyPoints: {
      type: DataTypes.INTEGER
    },
    category: {
      type: DataTypes.STRING
    }
    // defaultValue: "Istanbul"
  });
  return Destination;
};
