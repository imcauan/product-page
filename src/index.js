import { toggleMenu } from "./modules/menu.js";
import { removeQuantity } from "./modules/ImageClicker.js";
import { addQuantity, minusBtn, plusBtn } from "./modules/ImageClicker.js";
import { changeToNextImage, changeToPreviousImage } from "./modules/imageslider.js";
import { toggleCart } from "./modules/Cart.js";

toggleMenu()
toggleCart()
minusBtn.addEventListener('click', removeQuantity)
plusBtn.addEventListener('click', addQuantity)
changeToNextImage()
changeToPreviousImage()