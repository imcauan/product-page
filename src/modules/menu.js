const navBarLeft = document.querySelector(".navLeft");
const navMenuBtn = document.querySelector(".navMenu");
const navMenu = document.querySelector(".navMenuFeatures");
const closeBtn = document.getElementById("closeBtn");
const container = document.querySelector(".container")

export const toggleMenu = () => {
  navMenuBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
    navBarLeft.style.display = 'none'
    // container.style.backgroundColor = '#000'
  });
  
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navBarLeft.style.display = 'flex'
  });
};
