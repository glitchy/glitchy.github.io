// -- Incomplete..

document.getElementById('flashMessage').style.display = 'none';
document.getElementById('target').on('click', function () {
    document.getElementById('flashMessage').slideDown(500).delay(2000).slideUp(500);
    event.preventDefault();
  })

// ---------------------------------------------


function clickDurin(lightup, message) {
    const response = prompt(message);
    if (response.toUpperCase() === "FRIEND") {
        return "Welcome"
    }
    if (response.toUpperCase() !== "FRIEND") {
        return clickDurin(lightup, "(an awkward silence fills the air..)")
    }
}

const lightup = 
const message = clickDurin(lightup, "Speak friend and enter")

let slideToggle = (target, duration) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') {
        display = 'block';
    }

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.style.overflow = 'hidden';
}

document.getElementById("trigger").addEventListener('click', function() {
    slideToggle(document.getElementById("target"), 200);
  });