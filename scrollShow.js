var elementsToShow2 = document.querySelectorAll(".show-on-scroll2");

var scroll2 = window.requestAnimationFrame ||
function(callback){ window.setTimeout(callback, 1000/60)};
function loop2() {

  elementsToShow2.forEach(function (element) {
    if (isElementInViewport2(element)) {
      element.classList.add('is-visible2');
    }
  });

  scroll2(loop2);
}
loop2()
// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport2(el2) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el2 instanceof jQuery) {
      el2 = el2[0];
    }
    var rect2 = el2.getBoundingClientRect();
    return (
      (rect2.top <= 0
        && rect2.bottom >= 0)
      ||
      (rect2.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect2.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect2.top >= 0 &&
        rect2.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }