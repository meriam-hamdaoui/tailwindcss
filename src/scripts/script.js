/** change the navbar style on scroll action */
const scrollNavbar = () => {
  // select html elements
  let navbar = document.querySelector("#navbar");
  let heroHeader = document.querySelector("#hero-header");

  //   get the different heights
  const scrollingHeight =
    window.scrollY + heroHeader.getBoundingClientRect().height;
  const stickyNav = heroHeader.offsetTop;

  // change navbar (bg & text colors) base on the difference between the 2 heights

  const navClassNames =
    scrollingHeight > stickyNav
      ? ["transparent-nav", "bg-nav"]
      : ["bg-nav", "transparent-nav"];

  navbar.classList.replace(...navClassNames);
};
window.addEventListener("scroll", scrollNavbar);
