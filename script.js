function reveal() {
  window.addEventListener('scroll', (e) => {
    var reveal = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  });
}

reveal();


var header = document.getElementById("stickynav");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


var mybutton = document.getElementById("myBtn");
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

window.onscroll = function() {
  myFunction()
  scrollFunction()
};