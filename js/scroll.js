// Shrink header on scroll START
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //document.getElementById("headerlogo").style.height = "8vh";
    //document.getElementById("headernav").style.height = "10vh";
    //document.getElementById("headerouter").style.height = "12.5vh";
    $("header").addClass("shrunk");
    //document.documentElement.style.setProperty("--header-offset", "10vh");
    document.documentElement.style.setProperty("--header-offset", "var(--header-offset-min)");
  } else if (document.body.scrollTop < 40 || document.documentElement.scrollTop < 40) {
    //document.getElementById("headerlogo").style.height = "18vh";
    //document.getElementById("headernav").style.height = "20vh";
    //document.getElementById("headerouter").style.height = "22.5vh";
    $("header").removeClass("shrunk");
    //document.documentElement.style.setProperty("--header-offset", "20vh");
    document.documentElement.style.setProperty("--header-offset", "var(--header-offset-max)");
  }
} 

// Shrink header on scroll END
