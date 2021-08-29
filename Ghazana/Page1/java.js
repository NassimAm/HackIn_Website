var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "slides/image1.jpg";
images[1] = "slides/image2.jpg";
images[2] = "slides/image3.jpg";
images[3] = "slides/image4.jpg";
images[4] = "slides/image5.jpg";
images[5] = "slides/image6.jpg";
images[6] = "slides/image7.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
let eyePage = document.querySelector("#eye-page");
window.addEventListener("load", e => {
	
	setTimeout(e => {
		eyePage.style.transitionDuration = ".5s";
		eyePage.style.opacity = 0;
	}, 3000)
	setTimeout(e => {
		eyePage.remove();
	}, 4000)
});