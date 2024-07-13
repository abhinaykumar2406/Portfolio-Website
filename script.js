var typed = new Typed(".typing",{
    strings:["","Web Developer","Competitive Programmer"],
    typeSpeed:80,
    BackSpeed:20,
    loop:true
})


const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

document.querySelectorAll(".nav-link").forEach((ele) =>
    ele.addEventListener("click", function (event) {
    //   event.preventDefault();
      document.querySelectorAll(".nav-link").forEach((ele) => ele.classList.remove("active"));
      this.classList.add("active")
    })
);

// Nav button change on scroll
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id'); // Corrected this line

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document
        .querySelector(`.nav-link[href="#${id}"]`)
        .classList.add('active'); // Corrected this line
    }
  });
};


  
