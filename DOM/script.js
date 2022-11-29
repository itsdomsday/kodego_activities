window.onload = loadDom;
document.getElementsByTagName("div")[0].addEventListener("mouseover", brownColor);
document.getElementsByTagName("div")[1].addEventListener("mouseover", greenColor);
document.getElementsByTagName("div")[2].addEventListener("mouseover", blueColor);
document.getElementsByTagName("div")[3].addEventListener("mouseover", yellowColor);


function loadDom(){
    document.getElementById("change_heading").innerText = "Hello World!";
    let newDiv = document.createElement("div");
    document.getElementsByTagName("section")[0].appendChild(newDiv);
    document.getElementsByTagName("div")[4].classList.add("purple");
    document.getElementsByTagName("div")[4].addEventListener("mouseover", purpleColor);
}

function brownColor(){
    document.getElementsByClassName("selected")[0].innerText = "Brown";
}

function greenColor(){
    document.getElementsByClassName("selected")[0].innerText = "Green";
}

function blueColor(){
    document.getElementsByClassName("selected")[0].innerText = "Blue";
}

function yellowColor(){
    document.getElementsByClassName("selected")[0].innerText = "Yellow";
}

function purpleColor(){
    document.getElementsByClassName("selected")[0].innerText = "Purple";
}