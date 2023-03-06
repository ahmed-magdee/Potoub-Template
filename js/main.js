let settingIcon = document.querySelector(".open .setting"); // The Setting Icon To Close And Open The Left Nav
let leftNav = document.querySelector(".left-nav"); // The List Menu In Left Section
let linksHeaderIcon = document.querySelector(".links"); // Header Icon To Close And Open The Left List
let leftList = document.querySelectorAll(".links-left li"); // The Links Of Left List
let linksFooter = document.querySelectorAll(".links-footer .style li"); // The Footer Of Links
let scrollToTop = document.querySelector(".scroll-to-top");

settingIcon.onclick = function () {
  // Setting Icon Onlcik
  settingIcon.classList.toggle("fa-spin");
  leftNav.classList.toggle("opend");
};
linksHeaderIcon.onclick = function () {
  // Header Icon Onlcik
  settingIcon.classList.toggle("fa-spin");
  leftNav.classList.toggle("opend");
};
document.addEventListener("click", (e) => {
  // The Document Onlcik
  if (
    e.target !== leftNav &&
    e.target !== settingIcon &&
    e.target !== linksHeaderIcon
  ) {
    settingIcon.classList.remove("fa-spin");
    leftNav.classList.remove("opend");
  }
});

function scrollToSection() {
  leftList.forEach((link) => {
    link.onclick = function () {
      let section = document.querySelector(this.dataset.class);
      leftList.forEach((li) => {
        li.classList.remove("active");
      });
      this.classList.add("active");
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
  });
  linksFooter.forEach((liLink) => {
    liLink.onclick = function () {
      let section = document.querySelector(this.dataset.class);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    };
  });
}
scrollToSection();
window.onscroll = function () {
  if (window.scrollY >= 500) {
    scrollToTop.classList.add("open");
  } else {
    scrollToTop.classList.remove("open");
  }
};
scrollToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
