var fullHeight = document.body.clientHeight,
 	viewportHeight = window.innerHeight,
 	scrollHeight = fullHeight - viewportHeight,
 	lastKnownScrollPosition = 0,
 	ticking = false,
	progressBar = document.getElementById("oScrollindictor").getElementsByTagName('span')[0];


function resize() {
	fullHeight = document.body.clientHeight;
 	viewportHeight = window.innerHeight;
 	scrollHeight = fullHeight - viewportHeight;
 	scroll();
}

function scroll(scrollPos) {
	
	var first50 = 90 + Math.trunc(scrollPos/(scrollHeight/2)*100*1.8);

	if( first50 < 270){
		progressBar.style.clipPath = "inset(0px 0px 0px 80px)";
		progressBar.style.webkitClipPath = "inset(0px 0px 0px 80px)";
		progressBar.style.backgroundImage = "linear-gradient(90deg, transparent 50%, transparent 50%, transparent), linear-gradient("+first50+"deg, #ffffff 50%, transparent 50%, transparent)";
	} else if(first50 < 453){
		progressBar.style.clipPath = "inset(0px 0px 0px 0px)";
		progressBar.style.webkitClipPath = "inset(0px 0px 0px 0px)";
		progressBar.style.backgroundImage = "linear-gradient("+first50+"deg, #ffffff 50%, transparent 50%, transparent), linear-gradient(270deg, #ffffff 50%, transparent 50%, transparent)";

	}
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      scroll(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
window.addEventListener('resize', resize());