// Shrink header on scroll START
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").classList.add("shrunk");
    document.documentElement.style.setProperty("--header-offset", "var(--header-offset-min)");
  } else if (document.body.scrollTop < 40 || document.documentElement.scrollTop < 40) {
    document.querySelector("header").classList.remove("shrunk");
    document.documentElement.style.setProperty("--header-offset", "var(--header-offset-max)");
  }
} 

// Shrink header on scroll END
