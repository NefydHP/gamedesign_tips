var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("navbar-hidden");
  } else {
    document.getElementById("navbar").classList.add("navbar-hidden");
  }
  prevScrollpos = currentScrollPos;
}