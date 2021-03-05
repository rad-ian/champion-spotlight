const skillList = document.getElementById('skills-list')
//console.log(skillList.innerHTML);

const fajnofajno = document.getElementsByClassName('fajnofajno')
console.log(fajnofajno);

const miejsceProdukcji = "made in Szewnia Dolna"
const bodyList = document.getElementsByTagName("body")
const body = bodyList[0]
const miejsceProdukcjiH3 = document.createElement("h3")
miejsceProdukcjiH3.innerText = miejsceProdukcji

body.appendChild(miejsceProdukcjiH3)    