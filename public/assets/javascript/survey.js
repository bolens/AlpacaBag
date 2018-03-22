function alpacaBag(result) {
    var cities = [];
    var cityIndex = 0;
    $.get(“/api/destinations”, function (data) {
        var userTotal = result;
        var baseline = 100;

        for(var i =0; i < data.length; i++) { 
            var city = {
                score: data[i].surveyPoints
            }
            cities.push(city);
        }
        //loop cities
    for(var i = 0; i < cities.length; i++){
        var difference = Math.abs((userTotal - cities[i].score))
            if(difference < baseline){
                baseline = difference;
                cityIndex = i;
            };
        };
        return cityIndex;
    });
}

alpacaBag(); //pass in sum slider
