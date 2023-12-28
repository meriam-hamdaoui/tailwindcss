/** change the navbar style on scroll action */
const scrollNavbar = () => {
  // detect the navbar element
  let navbar = document.querySelector("#navbar");
  // select the reference point, where the navbar will change
  let heroHeader = document.querySelector("#hero-header");

  // calculate the scrolling height
  const onScrolling =
    window.scrollY + heroHeader.getBoundingClientRect().height;
  const stickyNav = heroHeader.offsetTop;

  // change navbar (bg & text colors) base on the difference between the 2 heights
  const navClassNames =
    onScrolling > stickyNav
      ? ["transparent-nav", "bg-nav"]
      : ["bg-nav", "transparent-nav"];

  navbar.classList.replace(...navClassNames);

  /* if (onScrolling < stickyNav) {
    navbar.style.backgroundColor = "transparent";
    navbar.style.color = "white";
    navbar.style.boxShadow = "none";
  } else {
      navbar.style.backgroundColor = "#f7fafc"; // Change this to your desired bg-gray-100 color
      navbar.style.color = "#4a5568"; // Change this to your desired text-gray-600 color
      navbar.style.boxShadow =
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  }*/

  // for navbar text color, when it passes the banner height
  const bannerDimension = document
    .querySelector("#hero-banner")
    .getBoundingClientRect();
  const bannerPassed = bannerDimension.top + bannerDimension.height <= 38; // check if hero banner image is passed
  const navTextColor = bannerPassed
    ? ["text-white", "text-gray-700"]
    : ["text-gray-700", "text-white"];

  navbar.classList.replace(...navTextColor);
};
window.addEventListener("scroll", scrollNavbar);
