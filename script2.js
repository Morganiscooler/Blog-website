let nestSlideIndex = 1;
// "displaySlides(nestSlideIndex);" <-- this tells the website to display a slide by 
// default when you load, which is good for your outer slideshow but not for your 
// inner one 

// Thumbnail image controls for inner slideshow
function Slidedisplayed(n) {
   displaySlides(nestSlideIndex = n);
}

function displaySlides(n) {
   let i;

   // Changed the class names for the inner slideshow to further ensure no entanglement with the outer slideshow code
   let slides = document.getElementsByClassName("mySlides"); 
   let dots = document.getElementsByClassName("dot");

   // If the next button is pressed on the last slide, it sets the nestSlideIndex back to 
   // 1 to show the first slide again
   if (n > slides.length) {nestSlideIndex = 1}
  // Sets to last slide index if previous button is clicked on first slide
   if (n < 1) {nestSlideIndex = slides.length}

   // A for-loop that makes all slide content disappear/invisible
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   // A for-loop ensuring all dots don't have the "active" class
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[nestSlideIndex-1].style.display = "block";
   dots[nestSlideIndex-1].className += " active";
}
