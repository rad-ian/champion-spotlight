/*
const skillList = document.getElementById('skills-list')
console.log(skillList.innerHTML);
*/
const fajnofajno = document.getElementsByClassName('fajnofajno')
console.log(fajnofajno);

const miejsceProdukcji = "made in Szewnia Dolna"
const bodyList = document.getElementsByTagName("body")
const body = bodyList[0]
const miejsceProdukcjiH3 = document.createElement("h3")
miejsceProdukcjiH3.innerText = miejsceProdukcji

body.appendChild(miejsceProdukcjiH3)

// const button2 = document.querySelector(".button")
// const button3 = document.querySelector("button")
// const button4 = document.querySelectorAll(".button")
// const button5 = document.getElementsByClassName('button')
//przykłady

const button = document.querySelector(".button")
const skillList = document.querySelector("#skills-list")


function pokaListeSkilli(event) {
    // console.log("poka Liste Skilli");
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.innerText);
    if (event.target.innerText === "zobacz wincyj") {
        skillList.style.display = "block"
        button.innerText = "zobacz mniyj"
    }
    else if (event.target.innerText === "zobacz mniyj") {
        skillList.style.display = "none"
        button.innerText = "zobacz wincyj"
    }


    // if (event.offsetX < 50) {
    //     console.log("po lewo");
    // }
    // else if (event.offsetX > 50) {
    //     console.log("po prawo");
    // }
    // else {
    //     console.log("po środku");
    // }


}


button.onclick = pokaListeSkilli
