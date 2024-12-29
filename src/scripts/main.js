
(function () {
  "use strict";

  // ########################## Preloader ##############################
  // window.addEventListener("load", (e) => {
  //   document.querySelector(".preloader").style.display = "none";
  // });

  // ########################## swipper ##########################

  new Swiper('.swiper', {
    slidesPerView: '2',
    loop: true,
    speed: 5000,
    loopAdditionalSlides: 5,
    spaceBetween: 0, 
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1640: {
        slidesPerView: 6, 
      },
      1340: {
        slidesPerView: 5, 
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      400: {
        slidesPerView:2, 
      },
      
    },
  });



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

  // ########################## Accordion ##########################
  const accordion = document.querySelectorAll("[data-accordion]");
  accordion.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });
})();

// table of contents

document.addEventListener("DOMContentLoaded", () => {
  const tableOfContentItems = document.querySelectorAll(".table-of-contents li a");
  const sections = document.querySelectorAll("#crafting, #creating, #comment");

  const updateActiveLink = () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= 200) {
        currentSectionId = section.id;
      }
    });

    tableOfContentItems.forEach((link) => {
      const href = link.getAttribute("href").replace("#", "");
      console.log(currentSectionId);
      
      if (href === currentSectionId) {
        link.parentElement.classList.add("active-table");
      } else {
        link.parentElement.classList.remove("active-table");
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("resize", updateActiveLink);

  updateActiveLink();
});


// make active page
const navMenuItems = document.querySelectorAll("#nav-menu li a");
navMenuItems.forEach((item) => {
  let urlPath = window.location.pathname
  if (urlPath === item.pathname) {
    item.classList.add("text-primary");
  }

})

// solve nav responsive issue 1024px
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    document.querySelector("#nav-menu").classList.add("lg:!flex");
  }
});

// rotate svg icon on scroll
function rotateOnScroll() {
  const svgIcon = document.querySelector('.svg-icon');
  
  if (window.scrollY === 0) {
    svgIcon.style.animation = 'none'; 
    svgIcon.offsetHeight; 
    svgIcon.style.animation = 'rotateOnLoad 1s forwards'; 
  }
}

window.addEventListener('scroll', rotateOnScroll);


// stop footer link animation on scroll

