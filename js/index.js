alert("Test from index.js");
// Open/Close Hamburger when you click on the icon
var navBackground = document.getElementsByClassName("navbar-menu")[0];
var element = document.querySelector("label.checkbtn");
element.addEventListener('click', function(e){
    document.querySelector("#icon").classList.add("rotation");
    if(element.classList.contains("close")){
        element.classList.remove("close");
        document.querySelector("#icon").classList.remove("rotation");
        document.querySelector("#icon").src = "images/icon-hamburger.svg";
        navBackground.style.left = "-100%";
    }else{
        element.classList.add("close");
        document.querySelector("#icon").src = "images/icon-close.svg";
        navBackground.style.left = "0";
    }
});

 // Open/Close Hamburger when you click on a link from the navigation menu
var navElement = document.querySelectorAll("ul.navbar-menu li a");

navElement.forEach(element => {

    element.addEventListener('click', (e) =>{
        document.querySelector("#icon").classList.remove("rotation");
        var label = element.parentElement.parentElement.previousElementSibling; 
        navBackground.style.left = "-100%";
        if(label.classList.contains("close")){
            label.classList.remove("close");
            document.querySelector("#icon").src = "images/icon-hamburger.svg";
            
        }

    });
});