// Shrink header on scroll START
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //document.getElementById("headerlogo").style.height = "8vh";
    //document.getElementById("headernav").style.height = "10vh";
    //document.getElementById("headerouter").style.height = "12.5vh";
    $("header").addClass("shrunk");
    document.documentElement.style.setProperty("--header-offset", "10vh");
  } else if (document.body.scrollTop < 40 || document.documentElement.scrollTop < 40) {
    //document.getElementById("headerlogo").style.height = "18vh";
    //document.getElementById("headernav").style.height = "20vh";
    //document.getElementById("headerouter").style.height = "22.5vh";
    $("header").removeClass("shrunk");
    document.documentElement.style.setProperty("--header-offset", "20vh");
  }
} 

// Shrink header on scroll END

// Intersection Observer for nav active state START
const sections = [
  document.querySelector("section#hero"),  
  document.querySelector("section#ueber"),
  document.querySelector("section#kalender"),
];

const navItems = {
  hero: null, // no nav item for hero section
  ueber: document.querySelector("#nav-ueber"),
  kalender: document.querySelector("#nav-kalender"),
};

// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'active' class on the navItem
      if (navItem) // check if navItem is not null
        navItem.classList.add('active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem && item != null) {
          item.classList.remove('active');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));

// Intersection Observer for nav active state END
