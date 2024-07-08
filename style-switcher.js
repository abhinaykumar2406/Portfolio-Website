
/********** style swticher **********/

const styleSwitcherToggler=document.querySelector(".style-switcher-toggler");
const styleSwitcher=document.querySelector(".style-switcher");
styleSwitcherToggler.addEventListener("click",()=>{
    styleSwitcher.classList.toggle("open");
});
window.addEventListener("scroll",()=>{
    if(styleSwitcher.classList.contains("open")){
        styleSwitcher.classList.remove("open");
    }
});

/********** color swticher **********/
const alternateStyle = document.querySelectorAll(".alternate-style");
setActiveStyle = (color)=>{
    alternateStyle.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    }
)};


/********** theme - day and light **********/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
        dayNight.querySelector("i").classList.remove("fa-moon");
    }
    else{
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});