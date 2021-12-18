const menuBtn = document.querySelector(".menu-wrapper");

const menuText = document.querySelector("#header-text");

const menuClose = document.querySelector(".menu-close");

const logoIcon = document.querySelector("#logo");

const menuIcon = document.querySelector("#menu-icon");

menuBtn.addEventListener("click", ()=>{
    //toggle close 
   menuClose.classList.toggle("close");

   logoIcon.classList.toggle("logo-color");

   menuIcon.classList.toggle("menu-icon");
    
    //change the text color
    menuText.classList.toggle("header-text");

    // set the content to new value
    if (menuText.textContent === "CLOSE") {
        menuText.textContent = "MENU";
    }
    else if(menuText.textContent === "MENU"){
        menuText.textContent = "CLOSE";
    }
});