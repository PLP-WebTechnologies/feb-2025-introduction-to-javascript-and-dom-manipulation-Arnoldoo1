// Change text dynamically
function changeText() {
    document.getElementById("description").textContent = "Text has been changed!";
}

// Modify CSS styles via JavaScript
function modifyStyle() {
    let element = document.querySelector(".styled-text");
    element.style.color = "blue";
    element.style.fontSize = "20px";
    element.style.fontWeight = "bold";
}

// Add a new element dynamically
function addElement() {
    let container = document.getElementById("dynamic-container");
    let newElement = document.createElement("p");
    newElement.textContent = "This is a dynamically added paragraph!";
    newElement.style.color = "blue";
    container.appendChild(newElement);
}

// Remove the last added element
function removeElement() {
    let container = document.getElementById("dynamic-container");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}
