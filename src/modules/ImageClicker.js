export const minusBtn = document.querySelector('.minusBtn')
export const plusBtn = document.querySelector('.plusBtn')
const quantitySpan = document.getElementById('quantity')
let quantity = 0

export function addQuantity() {
  quantity += 1
  quantitySpan.innerText = quantity
  console.log(`Quantity is ${quantity}`);
}

export function removeQuantity() {
  if(quantitySpan.textContent === "0") {
    quantity.innerText = "0";
  }
  
  quantity -=1
  quantitySpan.innerText = quantity
  console.log(`Quantity is ${quantity}`);
}


export function previousImage() {
  
}