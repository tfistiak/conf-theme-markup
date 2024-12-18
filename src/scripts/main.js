
(function () {
  "use strict";

  // ########################## Preloader ##############################
  // window.addEventListener("load", (e) => {
  //   document.querySelector(".preloader").style.display = "none";
  // });

  // ########################## Theme switcher ##########################
  var darkMode = false;
  var themeSwitch = document.querySelectorAll("[data-theme-switcher]");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkMode = true;
  }
  if (localStorage.getItem("theme") === "dark") {
    darkMode = true;
  } else if (localStorage.getItem("theme") === "light") {
    darkMode = false;
  }
  if (darkMode) {
    document.documentElement.classList.toggle("dark");
  }
  document.addEventListener("DOMContentLoaded", () => {
    [].forEach.call(themeSwitch, function (ts) {
      ts.checked = darkMode ? true : false;
      ts.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          document.documentElement.classList.contains("dark")
            ? "dark"
            : "light",
        );
      });
    });
  });


})();
// table of contents
const tableOfContentItems = document.querySelectorAll(".table-of-contents li");
tableOfContentItems.forEach((item) => {

  item.addEventListener("click", () => {
    document.querySelectorAll(".active-table").forEach((activeItem) => {
      activeItem.classList.remove("active-table");
    });
    item.classList.add("active-table");
  })
})

// make active page
const navMenuItems = document.querySelectorAll("#nav-menu li a");
navMenuItems.forEach((item) => {
  let urlPath = window.location.pathname
  if (urlPath === item.pathname) {
item.classList.add("active-page")
  }
  
})