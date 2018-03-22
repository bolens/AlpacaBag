var timesUp = window.setTimeout(function() {
  console.clear();
}, 1500);

(function() {
  timesUp;

  let vids = [
    '../../assets/videos/1.mp4',
    '../../assets/videos/2.mp4',
    '../../assets/videos/3.mp4',
    '../../assets/videos/4.mp4'
  ];

  vids.sort(function() {
    return 0.5 - Math.random()
  });


})();
