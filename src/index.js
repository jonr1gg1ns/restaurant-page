import pizzaImage from './assets/pizza.jpeg';
import "./style.css";
const Content = document.querySelector("#content")
content.style.backgroundImage = `url(${pizzaImage})`;

const bigText = document.createElement("h2")
bigText.className = "midText"
bigText.id = "contentCenter"
bigText.textContent = "Come Get the Best Pizza in All of Sacramento!"
Content.appendChild(bigText);

const smallText = document.createElement("p")
smallText.className = "midText"
smallText.id = "midP"
smallText.textContent = "Free Pizza for anyone under 145."
Content.appendChild(smallText)

const tryNow = document.createElement("button")
tryNow.className = "midText"
tryNow.id = "midButton"
tryNow.textContent = "Taste up!"
Content.appendChild(tryNow)

const info = document.createElement("div")
info.classList.add("midText", "centerDiv");
info.id = "midDiv"
Content.appendChild(info)

const address = document.createElement("p");
address.className = "midText";
address.id = "location";
address.textContent = "5734 Rainbow Rd ";
info.appendChild(address);

const time = document.createElement("p");
time.className = "midText";
time.id = "time";
time.textContent = "Mon - Sun:";
info.appendChild(time);

const lineBreak = document.createElement("br");

// Append the line break and additional text to the address
address.appendChild(lineBreak);
address.appendChild(document.createTextNode('Sacramento, CA'));

// Append the line break and additional text to the time
time.appendChild(lineBreak);
time.appendChild(document.createTextNode('12am - 1am'));
