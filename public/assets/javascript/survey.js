var cities = [];
var userTotal = 0;
var baseline = 100;

function alpacaBag(result, callback) {

  var destination = $.get('/api/destinations', function(data) {
    userTotal = result;

    for (var i = 0; i < data.length; i++) {
      var city = {
        score: data[i].surveyPoints
      }
      cities.push(city);
    }

  }).then(function(data) {
    return callback();
  });
  return destination;
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

  responses[0] *= 2;
  responses[1] *= 1.5;

  var responseTotal = 0;

  responses.forEach(function(currentResponse, index) {
    responseTotal += currentResponse;
  });

  var destinationMatch = alpacaBag(responseTotal, function() {
    var cityIndex = 0;

    //loop cities
    for (var i = 0; i < cities.length; i++) {
      var difference = Math.abs((userTotal - cities[i].score));
      if (difference < baseline) {
        baseline = difference;
        cityIndex = i;
      };
    };

    return cityIndex;

  }).then(function(data) {
    console.log("Destination Match Data =", data);
    // getDestinationInfo(data);
  });
});

function getDestinationInfo(data) {
  $.get("/api/destination/" + data, function(request, response) {
    if (data) {
      var destinationObject = {
        name: response.params.locationName,
        location: {
          latitude: result.params.lat,
          longitude: result.params.lon
        },
        interest: [
          {
            name: null,
            description: null,
            link: null,
            photo: null
          }
        ],
        survey: result.params.surveyPoints,
        category: result.params.category
      };
    };
  });
};
