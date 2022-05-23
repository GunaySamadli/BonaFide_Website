$(function () {
    $(document).scroll(function () {
      var $nav = $(".header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// Search

const search = document.querySelector(".search");
const navbar = document.querySelector(".navbar");
const searchOpen = document.querySelector(".search_open");
const searchOpenResponsive = document.querySelector(".search_open_responsive");
const close = document.querySelector(".close");
let headerLogo=document.querySelector(".header-logo");
let headerNavbar=document.querySelector(".header-navbar");


search.addEventListener("click", function () {
    navbar.style.display = "none";
    searchOpen.classList.toggle("active");

    if(window.innerWidth < 992){
        headerLogo.style.display="none";
        searchOpen.classList.add("responsive");
        headerNavbar.style.justifyContent="center"
    }
})

close.addEventListener("click", function () {
    navbar.style.display = "block";
    searchOpen.classList.toggle("active");
    if(window.innerWidth < 992){
        headerLogo.style.display="block";
        searchOpen.classList.remove("responsive");
        headerNavbar.style.justifyContent="space-between"
    }
});




// Responsive Navbar


const hamburgerMenu = document.querySelector(".responsive-icon-hamburger");
const hamburgerClose = document.querySelector(".responsive-icon-close");
const mobileNavbar = document.querySelector(".mobile__navbar");


hamburgerMenu.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
    this.style.display = "none";
    hamburgerClose.style.display = "block";
});

hamburgerClose.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
    hamburgerMenu.style.display = "block";
    this.style.display = "none";
});






const mobileLinks = Array.from(document.querySelectorAll(" .mobile-link"));
const mobileLists = Array.from(document.querySelectorAll(".mobile-list"));

const clearActivesFromDetail = function () {
    mobileLinks.forEach(mobileLink => {
        mobileLink.classList.remove("active");
    });
    mobileLists.forEach(mobileList => {
        mobileList.classList.remove("active");
    });
};



mobileLinks.forEach(mobileLink => {
    mobileLink.onclick = function () {
        clearActivesFromDetail();
        const targetId = mobileLink.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        mobileLink.classList.add("active");
        targetContent.classList.add("active")
    };
});


// Tab Menu

const serviceBlocks = Array.from(document.querySelectorAll(" ._blocks--block"));
const serviceContents = Array.from(document.querySelectorAll("._content"));

const clearActivesFromService = function () {
    serviceBlocks.forEach(serviceBlock => {
        serviceBlock.classList.remove("active");
    });
    serviceContents.forEach(serviceContent => {
        serviceContent.classList.remove("active");
    });
};



serviceBlocks.forEach(serviceBlock => {
    serviceBlock.onclick = function () {
        clearActivesFromService();
        const targetId = serviceBlock.getAttribute("data-target");
        const targetContent = document.getElementById(targetId);
        serviceBlock.classList.add("active");
        targetContent.classList.add("active")
    };
});








