const hamMenu = document.querySelector(".header__hamburger");

const offScreenMenu = document.querySelector(".header__nav");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});