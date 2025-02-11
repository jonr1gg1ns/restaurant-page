import './menu.css';

function createMenuDiv() {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu-div";
    return menuDiv;
}

export function loadMenuContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const headerMenu = createNewHeader();
    content.appendChild(headerMenu);

    const menuDiv = createMenuDiv();

    // Create pizza items and append them to menuDiv
    const cheesePizza = new MenuItem("Cheese Pizza", "Cheesy goodness, without other toppings interrupting that cheese pull", "$12");
    const cheesePizzaMenu = cheesePizza.createElement();
    menuDiv.appendChild(cheesePizzaMenu);

    const pepperoniPizza = new MenuItem("Pepperoni Pizza", "All of the goodness of cheese pizza, with perfected homemade pepperonis to top it off", "$14");
    const pepperoniPizzaMenu = pepperoniPizza.createElement();
    menuDiv.appendChild(pepperoniPizzaMenu);

    const supremePizza = new MenuItem("Supreme Pizza", "A pizza loaded with fresh veggies, savory meats, and all the cheese you could dream of", "$18");
    const supremePizzaMenu = supremePizza.createElement();
    menuDiv.appendChild(supremePizzaMenu);

    const meatLoversPizza = new MenuItem("Meat Lovers Pizza", "A carnivore's dream with a mix of pepperoni, sausage, bacon, and more", "$20");
    const meatLoversPizzaMenu = meatLoversPizza.createElement();
    menuDiv.appendChild(meatLoversPizzaMenu);

    // Append the menuDiv to content
    content.appendChild(menuDiv);
}


function createNewHeader() {
    const headerMenu = document.createElement("h3");
    headerMenu.className = "menu-header";
    headerMenu.textContent = "MENU";
    return headerMenu;
}



function MenuItem(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

MenuItem.prototype.createElement = function() {
    const menuItemDiv = document.createElement("div");
    const nameP = document.createElement("p");
    nameP.textContent = this.name;
    const descriptionP = document.createElement("p");
    descriptionP.textContent = this.description;
    const priceP = document.createElement("p");
    priceP.textContent = this.price;

    menuItemDiv.appendChild(nameP);
    menuItemDiv.appendChild(descriptionP);
    menuItemDiv.appendChild(priceP);

    return menuItemDiv;
}
