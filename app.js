let isModalOpen = false;

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += "modal--open";
}

// dark mode
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// mouse move effect
const scaleFactor = 1 / 20;
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInteger = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px) rotate(${x * boolInteger * 10}deg)`;
  }
}

/**
 * You can put this beside x rotate if ya want
 * rotate(${y * boolInteger * 10}deg)`
 */

// Functional modal, it is finally working thanks to dc coder chads, Imma start later tho