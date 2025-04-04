let pageIndex = 1;
showPages(pageIndex);

// Next/previous controls
function plusPages(n) {
    showPages(pageIndex += n);
}

// Thumbnail image controls
function currentPage(n) {
    showPages(pageIndex = n);
}

function showPages(n) {
  let i;
  let pages = document.getElementsByClassName("gallery");
  if (n > pages.length) {pageIndex = 1}
  if (n < 1) {pageIndex = pages.length}
  for (i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }
  pages[pageIndex-1].style.display = "grid";
}