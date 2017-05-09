
// hamburger nav //
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
// end hamburger nav //



// #animated dog//
var intervalHandle;
var currentPos = 0;
var maxWidth = window.innerWidth;


window.onload = function() {
 setTimeout(startMoving, 0);
}

function startMoving() {
  document.getElementById("animateToRight").style.position = "absolute";
  document.getElementById("animateToRight").style.left = "0px";
  document.getElementById("animateToLeft").style.position = "absolute";
  document.getElementById("animateToLeft").style.right = "0px";

  intervalHandle = setInterval(move, 50);
}

function move() {
  currentPos += 5;
  document.getElementById("animateToRight").style.left = currentPos + "px";
  document.getElementById("animateToLeft").style.right = currentPos + "px";
  if (currentPos >= maxWidth) {
    currentPos = 0;
  }
}
