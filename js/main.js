
/* Navbar fixed */
var num = 0;
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > num) {
    $('.hamburger__menu').addClass('fixed');
  } else {
    $('.hamburger__menu').removeClass('fixed');
  }
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "50%"; 
  document.body.classList.add("overlay-open");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.body.classList.remove("overlay-open");
}
/* Close the menu when a link inside the menu is clicked */
document.querySelectorAll("#myNav a").forEach(link => {
  link.addEventListener("click", closeNav);
  
});
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    event.preventDefault()
})

function sendForm() {
    const newPath = 'thanks.html';
    
    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent = 'Invalid E-mail. Please enter a valid email address.';
    }
}

//Cookie
const cookieBox = document.querySelector(".cookie-wrapper"),
  buttons = document.querySelectorAll(".cookie-button");

  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      cookieBox.classList.add("hidden");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });