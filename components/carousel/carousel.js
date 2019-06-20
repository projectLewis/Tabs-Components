// display none, display block

// array of images
const imgRotatorContainer = document.querySelector('.imgRotatorContainer');
const imageSrc = ["../../images/dice1.jpg", "../../images/dice2.jpg", "../../images/dice3.jpg", "../../images/dice4.jpg"]

let imgRotator = document.querySelector('.imgRotator');

currentImage = 0;
imgRotatorContainer.addEventListener('click', () => {
  if (currentImage === 4) {
    currentImage = 0;
  }
  else {
    currentImage += 1;
  }
  imgRotator.src = imageSrc[currentImage];
});

