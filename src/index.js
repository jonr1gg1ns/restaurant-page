import { loadMenuContent } from './menu.js';
import pizzaImage from './assets/pizza.jpeg';
import './style.css';
import { loadContactContent } from './contact.js'

function setBackgroundImage() {
    const content = document.querySelector('#content');
    content.style.backgroundImage = `url(${pizzaImage})`;
}

function createBigText() {
    const content = document.querySelector('#content');
    const bigText = document.createElement('h2');
    bigText.className = 'midText';
    bigText.id = 'contentCenter';
    bigText.textContent = "Come Get the Best Pizza in All of Sacramento!";
    content.appendChild(bigText);
}

function createSmallText() {
    const content = document.querySelector('#content');
    const smallText = document.createElement('p');
    smallText.className = 'midText';
    smallText.id = 'midP';
    smallText.textContent = "Free Pizza for anyone under 145.";
    content.appendChild(smallText);
}

function createButton() {
    const content = document.querySelector('#content');
    const tryNow = document.createElement('button');
    tryNow.className = 'midText';
    tryNow.id = 'midButton';
    tryNow.textContent = "Taste up!";
    content.appendChild(tryNow);
}

function createInfoDiv() {
    const content = document.querySelector('#content');
    const info = document.createElement('div');
    info.classList.add('midText', 'centerDiv');
    info.id = 'midDiv';
    content.appendChild(info);

    const address = document.createElement('p');
    address.className = 'midText';
    address.id = 'location';
    address.textContent = "5734 Rainbow Rd ";
    info.appendChild(address);

    const time = document.createElement('p');
    time.className = 'midText';
    time.id = 'time';
    time.textContent = "Mon - Sun:";
    info.appendChild(time);

    const lineBreak = document.createElement('br');

    address.appendChild(lineBreak);
    address.appendChild(document.createTextNode('Sacramento, CA'));

    time.appendChild(lineBreak);
    time.appendChild(document.createTextNode('12am - 1am'));
}

function loadHomeContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';  // Clear any previous content

    setBackgroundImage();
    createBigText();
    createSmallText();
    createButton();
    createInfoDiv();

    const menuButton2 = document.querySelector('#midButton');
    menuButton2.addEventListener('click', (e) => {
        e.preventDefault();
        loadMenuContent();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Load Home Content initially
    loadHomeContent();

    // Event listener for the Home link
    const homeLink = document.querySelector('.nav-links li:nth-child(1) a');
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadHomeContent();
    });

    // Event listener for the Menu link
    const menuButton = document.querySelector('.nav-links li:nth-child(2) a');
    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        loadMenuContent();
    });
    const contactLink = document.querySelector('.nav-links li:nth-child(3) a');
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadContactContent();
    });
});

