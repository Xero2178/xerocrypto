const hamburger = document.querySelector("#btnHamb")
const header = document.querySelector('.header');
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector("body");

hamburger.addEventListener('click', function(){
    header.classList.toggle("open")
    hamburger.classList.toggle("open")
    console.log("Hello")
    if(header.classList.contains("open")){
        fadeElems.forEach(element => {
                body.classList.add("noscroll")
                overlay.classList.add("fade-in")
                overlay.classList.remove("fade-out")
                element.classList.add("fade-in")
                element.classList.remove("fade-out")

            });
    }else{

            fadeElems.forEach(element => {
                overlay.classList.add("fade-out")
                overlay.classList.remove("fade-in")
                element.classList.add("fade-out")
                element.classList.remove("fade-in")
                body.classList.remove("noscroll")
            });
       
    }
})
const nav = document.querySelector("#topNavBar");
window.addEventListener('scroll', function(e){
    let value = window.scrollY;
    if (value > 100){
        nav.classList.add('colored');
        nav.classList.remove('transparent');
        console.log("worked")
    }else{
        nav.classList.remove('colored');
        nav.classList.add('transparent');
    }
})
hamburger.addEventListener('click', function(e){
    nav.classList.toggle('colored')
})