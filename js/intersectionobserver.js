// Intersection Observer for nav active state START
const sections = [
  document.querySelector("section#hero"),  
  document.querySelector("section#ueber"),
  //document.querySelector("section#kalender"),
];

const navItems = {
  hero: null, // no nav item for hero section
  ueber: document.querySelector("#nav-ueber"),
  //kalender: document.querySelector("#nav-kalender"),
};

// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: [0.2, 0.8],
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