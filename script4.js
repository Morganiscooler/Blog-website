let nestSlideIndex3 = 1;
// "displaySlides(nestSlideIndex);" <-- this tells the website to display a slide by 
// default when you load, which is good for your outer slideshow but not for your 
// inner one 

// Thumbnail image controls for inner slideshow
function Slidedisplayed3(n) {
   displaySlides3(nestSlideIndex3 = n);
}

function displaySlides3(n) {
   let i;

   // Changed the class names for the inner slideshow to further ensure no entanglement with the outer slideshow code
   let slides = document.getElementsByClassName("mySlides3"); 
   let dots = document.getElementsByClassName("dot3");

   // If the next button is pressed on the last slide, it sets the nestSlideIndex back to 
   // 1 to show the first slide again
   if (n > slides.length) {nestSlideIndex3 = 1}
  // Sets to last slide index if previous button is clicked on first slide
   if (n < 1) {nestSlideIndex3 = slides.length}

   // A for-loop that makes all slide content disappear/invisible
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   // A for-loop ensuring all dots don't have the "active" class
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[nestSlideIndex3-1].style.display = "block";
   dots[nestSlideIndex3-1].className += " active";
}
