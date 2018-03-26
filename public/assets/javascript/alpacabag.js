// var timesUp = window.setTimeout(function() {
//   console.clear();
// }, 1500);

(function() {
  // timesUp;

  $(".image-carousel--container").slick({

    // normal options...
    infinite: true,

    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: false,
        dots: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });

  var video_count = 2;
  var videoPlayer = $(".fullscreen-bg__video");

  var fadeOut = function() {
    videoPlayer.animate({
      opacity: 0
    }, 300);
  };

  var fadeIn = function() {
    videoPlayer.animate({
      opacity: 1
    }, 300);
  };

  function run() {
    fadeOut();
    video_count++;

    if (video_count > 4) video_count = 1;
    videoPlayer.attr('src', "../../assets/videos/" + video_count + ".mp4");
    fadeIn();
    // console.log(video_count);
  };
  videoPlayer.on('ended', run);

})();


// Our typed.js function
var typed = new Typed('.typed', {
  strings: [
    // Are you ready to...
    "",
    "adventure?",
    "relax?",
    "go hiking?",
    "discover new cuisine?",
    "go exploring?",
    "Alpaca Bag?"],
  typeSpeed: 75,
  backSpeed: 30,
  smartBackspace: true,
  cursorChar: '',
});
