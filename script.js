
var typed = new Typed(".typing",{

strings:["Java Backend Developer","DSA Enthusiast","AWS Certified"],

typeSpeed:100,

backSpeed:60,

loop:true

})


// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior: 'smooth'

});

});

});