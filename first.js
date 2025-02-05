let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

//************* BTN1 ***************/ //

let button = document.querySelector(".btn1");

button.onclick = () => {
    console.log("Your Order is conform");
}

// *********************  order btn  *********************** //


let ordbtn = document.querySelector(".order-btn");

ordbtn.onclick = () => {
    console.log("Your Order is Conform");
}



let ordbtn2 = document.querySelector(".order-btn2");

ordbtn2.onclick = () => {
    console.log("Your Order is Conform");
}



let ordbtn3 = document.querySelector(".order-btn3");

ordbtn3.onclick = () => {
    console.log("Your Order is Conform");
}


// *********************  placeholder  *********************** //

let sucs = document.querySelector(".search-sec");

sucs.onclick = () => {
    console.log("Thank You Visit Again");
    // let a = 88;
    // a++;
    // console.log(a);
}


// *********************  change mode  *********************** //

let modebtn = document.querySelector(".modeBtn");
console.log(modebtn);
let currmode = "light";

modebtn.addEventListener("click", () => {
    if(currmode === "light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector(".modeBtn").style.backgroundColor = "black";
        document.querySelector(".modeBtn").style.color = "white";
    } else {
        currmode = "light"
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".modeBtn").style.backgroundColor = "white";
        document.querySelector(".modeBtn").style.color = "black";
    }

    // console.log(currmode);
});

 