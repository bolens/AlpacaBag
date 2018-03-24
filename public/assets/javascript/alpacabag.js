
// var timesUp = window.setTimeout(function() {
//   console.clear();
// }, 1500);

(function() {
  // timesUp;

  $(".image-carousel--container").slick({

    // normal options...
    infinite: false,

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

  // let vids = [
  //   '../../assets/videos/1.mp4',
  //   '../../assets/videos/2.mp4',
  //   '../../assets/videos/3.mp4',
  //   '../../assets/videos/4.mp4',
  //   '../../assets/videos/5.mp4'
  // ];
  //
  // var random = vids.sort(function() {
  //   return 0.5 - Math.random()
  // });

  var video_count = 2;
  var videoPlayer = $(".fullscreen-bg__video");

  var fadeOut = function() {
    videoPlayer.animate({
      opacity: 0
    }, 700);
  };

  var fadeIn = function() {
    videoPlayer.animate({
      opacity: 1
    }, 700);
  };

  function run() {
    fadeOut();
    if (video_count >= 5) video_count = 1;
    video_count++;
    var nextVideo = "../../assets/videos/" + video_count + ".mp4";
    videoPlayer.attr('src', nextVideo);
    fadeIn();
    // videoPlayer.play();
    video_count++;
    // console.log(video_count);
  };
  videoPlayer.on('ended', run);




})();
