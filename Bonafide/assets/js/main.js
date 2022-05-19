// Search

const search = document.querySelector(".search");
const navbar = document.querySelector(".navbar");
const searchOpen = document.querySelector(".search_open");
const close = document.querySelector(".close");

search.addEventListener("click", function () {
    navbar.style.display = "none";
    searchOpen.classList.toggle("active");
})

close.addEventListener("click", function () {
    navbar.style.display = "block";
    searchOpen.classList.toggle("active");
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









