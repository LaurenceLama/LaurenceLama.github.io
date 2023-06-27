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
    shapes[i].style.transform = `translate(${x * boolInteger}px, ${
      y * boolInteger
    }px) rotate(${x * boolInteger * 10}deg)`;
  }
}

/**
 * You can put this beside x rotate if ya want
 * rotate(${y * boolInteger * 10}deg)`
 */

// Functional modal
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
//   when putting classes on a String, put space instead of .
  emailjs
    .sendForm(
      "service_kueprne",
      "template_gwbb11yy",
      event.target,
      "6bb0lY29GPPPQglEn"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    //   since success does not have a classList above(1st time putting success.classList), we also put space here instead of .
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please try again or contact me directly at lalalalaa@lala.lala"
      );
    });

  //   loading.classList += " modal__overlay--visible";
  //   setTimeout(() => {
  //     loading.classList.remove("modal__overlay--visible");
  //     success.classList += "modal__overlay--visible";
  //     console.log("worked ma boi");
  //   }, 1000);
}
