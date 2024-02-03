const bgImg = document.querySelector('.imgBack')
const nextImage = document.querySelector('.nextImage')
const previousImage = document.querySelector('.previousImage')

let currentImage = 0

export function changeToNextImage() {
  nextImage.addEventListener('click', () => {
    if(currentImage === 4) {
      bgImg.src = `./images/image-product-${currentImage}.jpg`
    } else {
      currentImage++
      bgImg.src = `./images/image-product-${currentImage}.jpg`
      console.log(`Switched to image ${currentImage}`);
    }
  })
}

export function changeToPreviousImage() {
  previousImage.addEventListener('click', () => {
    if(currentImage === 1) {
      bgImg.src = `./images/image-product-${currentImage}.jpg`
    } else {
      currentImage--
      bgImg.src = `./images/image-product-${currentImage}.jpg`
      console.log(`Switched to image ${currentImage}`);
    }
  })
}
