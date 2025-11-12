"use strict";
// ========================
// MOBILE MENU + ACTIVE LINK
// ========================

const header = document.querySelector(".header");
const mobileBtn = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".header__overlay");
const navLinks = document.querySelectorAll(".header__link");

// ====== TOGGLE MOBILE MENU ======
if (mobileBtn) {
  mobileBtn.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
}

// ====== CLOSE MENU WHEN OVERLAY IS CLICKED ======
if (overlay) {
  overlay.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
}

// ====== ACTIVE LINK (RELIABLE ON MOBILE) ======

// Detect current page (file name only)
let currentPage = window.location.pathname.split("/").pop();
if (currentPage === "" || currentPage === "/") {
  currentPage = "index.html"; // root page
}

// Highlight the correct nav link
navLinks.forEach(link => {
  const href = link.getAttribute("href");
  if (href === currentPage || currentPage.endsWith(href)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }

  // Save clicked link to localStorage for mobile reload reliability
  link.addEventListener("click", () => {
    localStorage.setItem("activeLink", href);
  });
});

// ====== RESTORE ACTIVE STATE (mobile browsers reload too fast) ======
const saved = localStorage.getItem("activeLink");
if (saved) {
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === saved);
  });
  // Optional: clear it after use
  localStorage.removeItem("activeLink");
}

// ====== CLOSE MENU WHEN LINK IS CLICKED ======
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
  });
});




//FADE INS
 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(
  '.fade-up, .fade-left, .fade-right, .zoom-in, .rotate-in, .fade-blur, .rise, .stagger'
).forEach(el => observer.observe(el));



//SCROLL TO TOP
const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", ()=> {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  }else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener('click', ()=> {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
});