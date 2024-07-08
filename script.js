var typed = new Typed(".typing",{
    strings:["Web Developer","Competitive Programmer"],
    typeSpeed:80,
    BackSpeed:20,
    loop:true
})


const navbar = document.querySelector(".navbar");
const navLinks  = document.querySelectorAll(".nav-link");


document.querySelectorAll(".nav-link").forEach((ele) =>
    ele.addEventListener("click", function (event) {
    //   event.preventDefault();
      document.querySelectorAll(".nav-link").forEach((ele) => ele.classList.remove("active"));
      this.classList.add("active")
    })
);
  
