const cart = document.querySelector('.navCart')
const cartContainer = document.querySelector('.cart-container')
const closeCart = document.getElementById('closeCart')

export function toggleCart() {
  cart.addEventListener('click', () => {
    cartContainer.style.display = "flex"
  })

  closeCart.addEventListener('click', () => {
    cartContainer.style.display = 'none'
  })
}