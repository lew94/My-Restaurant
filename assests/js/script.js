//NavBar response
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Home page Carousel
$(document).ready(function () {
  // Activate the Carousel
  $("#carouselExample").carousel({
    interval: 5000, // Set the interval for automatic rotation (in milliseconds)
    pause: false, // Disable pausing on hover
    wrap: true // Enable wrapping at the end of the Carousel
  });
});