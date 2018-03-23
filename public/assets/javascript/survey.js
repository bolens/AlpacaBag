var cities = [];
var userTotal = 0;
var baseline = 100;

function alpacaBag(result, callback) {

  console.log("User score: " + result);

  $.get('/api/destinations', function(data) {
    console.log("Sequelize get data: ");
    console.log(data);
    userTotal = result;

    for (var i = 0; i < data.length; i++) {
      var city = {
        score: data[i].surveyPoints
      }
      cities.push(city);
    }

  }).then(function(data) {
    callback();
  });
};

$("form").on("submit", function(e) {
  e.preventDefault();

  var responses = [
    $("#Q1").val(),
    $("#Q2").val(),
    $("#Q3").val(),
    $("#Q4").val(),
    $("#Q5").val(),
    $("#Q6").val(),
    $("#Q7").val(),
    $("#Q8").val(),
    $("#Q9").val(),
    $("#Q10").val(),
    $("#Q11").val()
  ];
  console.log("Survey responses: ");
  console.log(responses);

  responses[0] *= 2;
  responses[1] *= 1.5;

  var responseTotal = 0;

  responses.forEach(function(currentResponse, index) {
    responseTotal += currentResponse;
  });

  var destinationMatch = alpacaBag(responseTotal, function() {
    console.log("Cities array: ");
    console.log(cities);
    var cityIndex = 0;

    //loop cities
    for (var i = 0; i < cities.length; i++) {
      var difference = Math.abs((userTotal - cities[i].score));
      if (difference < baseline) {
        baseline = difference;
        cityIndex = i;
      };
    };
    console.log("City index inside callback: " + cityIndex);

    return cityIndex;

  });
  console.log("City index outside callback: " + destinationMatch);

});
