var cities = [];
var userTotal = 0;
var baseline = 100;
var locationName = "";

$('#pack').on('click', (e) => {
  e.preventDefault();
  if ($('.form-container').hasClass('active')) {
    $('.form-container').removeClass('active');
  } else {
    $('.form-container').addClass('active');
  }

  $('html, body').animate({
    scrollTop: $("#survey").offset().top - 30
  }, 1000);
});

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

  if ($('.form-container').hasClass('active')) {
    $('.form-container').removeClass('active');
  } else {
    $('.form-container').addClass('active');
  }

  if ($('#destination').hasClass('active')) {
    $('#destination').removeClass('active');
  } else {
    $('#destination').addClass('active');
  }

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

    // console.log("Destination Match Data =", data);
    getDestinationInfo(data + 1);

  });
});

function getDestinationInfo(id) {
  $.get("/api/destinations/" + id, function(response) {
    if (response) {
      // console.log("Our response", response);
      // console.log("Respone.location", response.locationName)
      locationName = response.locationName;
      getPointsOfInterest(response.locationName);
    };
  });
}

function getPointsOfInterest(location) {
  $.get("/api/poi/" + location, function(responses) {
    // console.log(responses);
    // console.log(cityObject);
  }).done(function() {
    window.location.href = '/destination';
  });
}
