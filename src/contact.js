import "./contact.css";

export function loadContactContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const header = document.createElement("h3")
    header.id = "headerrrr"
    content.appendChild(header)
    header.textContent = "Contact Us!"

    const contactDiv = document.createElement("div");
    contactDiv.id = "contact-div";
    content.appendChild(contactDiv);

    const contactP = document.createElement("p");
    contactP.classList.add("text-inside");
    contactP.textContent = "Phone Number: (916)-000-0000";
    contactDiv.appendChild(contactP);

    const contactP2 = document.createElement("p");
    contactP2.classList.add("text-inside");
    contactP2.textContent = "Email: lapizzeriaensacramento@gmail.com";
    contactDiv.appendChild(contactP2);
}
