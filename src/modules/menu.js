const navBarLeft = document.querySelector(".navLeft");
const navMenuBtn = document.querySelector(".navMenu"); 
const navMenu = document.querySelector(".navMenuFeatures"); 
const closeBtn = document.getElementById("closeBtn");

export function toggleMenu() {
    navMenuBtn.addEventListener("click", () => {
      navMenu.classList.add("active");
      navBarLeft.classList.add("unactive")
      console.log(`Menu has been opened!`);
    })
    
    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navBarLeft.classList.remove("unactive")
      console.log(`Menu has been closed!`);
    });
  }