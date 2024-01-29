const navBarLeft = document.querySelector(".navLeft");
const navMenuBtn = document.querySelector(".navMenu");
const navMenu = document.querySelector(".navMenuFeatures");
const closeBtn = document.getElementById("closeBtn");
export function toggleMenu() {
    navMenuBtn.addEventListener("click", () => {
        navMenu.classList.add("active");
        navBarLeft.classList.add("unactive");
    });
    closeBtn.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navBarLeft.classList.remove("unactive");
    });
}

// function isNotNull<T>(value: T | null):
//   value is T {
//     return value !== null
//   }
