

const currloc = location.href;
const menuItem = document.querySelectorAll('.nav-link');
const menuLen = menuItem.length;
for (let i = 0; i < menuLen; i++) {
    menuItem[i].classList.remove('active');
    if (menuItem[i].href === currloc) {
        menuItem[i].className = "nav-link active";
    }
}

const currlocMobile = location.href;
const menuItemMobile = document.querySelectorAll('.mobile-nav-link');
const menuLenMobile = menuItemMobile.length;
for (let i = 0; i < menuLenMobile; i++) {
    menuItemMobile[i].classList.remove('active');
    if (menuItemMobile[i].href === currlocMobile) {
        menuItemMobile[i].className = "mobile-nav-link active";
    }
}

const currlocFooter = location.href;
const menuItemFooter = document.querySelectorAll('.footer-link');
const menuLenFooter = menuItemFooter.length;
for (let i = 0; i < menuLenFooter; i++) {
    menuItemFooter[i].classList.remove('active');
    if (menuItemFooter[i].href === currlocFooter) {
        menuItemFooter[i].className = "footer-link  active";
    }
}

// Search

const search = document.querySelector(".search");
const navbar = document.querySelector(".navbar");
const searchOpen = document.querySelector(".search_open");
const searchOpenResponsive = document.querySelector(".search_open_responsive");
const close = document.querySelector(".close");
let headerLogo = document.querySelector(".header-logo");
let headerNavbar = document.querySelector(".header-navbar");


search.addEventListener("click", function () {
    navbar.style.display = "none";
    searchOpen.classList.toggle("active");

    if (window.innerWidth < 992) {
        headerLogo.style.display = "none";
        searchOpen.classList.add("responsive");
        headerNavbar.style.justifyContent = "center"
    }
})

close.addEventListener("click", function () {
    navbar.style.display = "block";
    searchOpen.classList.toggle("active");
    if (window.innerWidth < 992) {
        headerLogo.style.display = "block";
        searchOpen.classList.remove("responsive");
        headerNavbar.style.justifyContent = "space-between"
    }
});




// Responsive Navbar


const hamburgerMenu = document.querySelector(".responsive-icon-hamburger");
const hamburgerClose = document.querySelector(".responsive-icon-close");
const mobileNavbar = document.querySelector(".mobile__navbar");
const mobileBackground=document.querySelector(".mobile-background");


hamburgerMenu.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
    this.style.display = "none";
    hamburgerClose.style.display = "block";
    search.style.marginRight = "-5px";
    mobileBackground.classList.add("active");

});

hamburgerClose.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
    hamburgerMenu.style.display = "block";
    this.style.display = "none";
    search.style.marginRight = "0px";
    mobileBackground.classList.remove("active");

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

$(function () {
    $(document).scroll(function () {
        var $nav = $(".header");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
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







