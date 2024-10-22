// NAvigation Scroll Effect
document.addEventListener("DOMContentLoaded", function() {
    // Select the navigation bar
    const navbar = document.querySelector("nav");
  
    // Function to handle scroll event
    function handleScroll() {
      if (window.scrollY > 500) {
        // If the scroll position is greater than 600, make the navbar transparent
        navbar.style.background = "linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .5))";
        navbar.style.backdropFilter = 'blur(10px) contrast(1.2)';
      } else {
        // Otherwise, reset the background to transparent
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = 'none';
      }
    }
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
});





// Show button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
  const button = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



const body = document.querySelector("body");
const navigation = document.querySelector("#nav");
const popNav = document.querySelector("#pop_nav");
const openicon = document.querySelector(".ham");
const closeicon = document.querySelector("#menu-close");

openicon.addEventListener("click", openSideMenu)
closeicon.addEventListener("click", closeSideMenu)


function openSideMenu(){
  navigation.style.display="none";
  popNav.style.display="block";
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}
function closeSideMenu(){
  navigation.style.display="flex";
  popNav.style.display="none";
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';
}