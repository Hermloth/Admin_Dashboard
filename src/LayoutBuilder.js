function BuildLayout () {
console.log("Build Layout Loaded")

const body = document.body;

const parentDiv = document.createElement("div");
parentDiv.classList.add("parentDiv");
parentDiv.textContent = "Sample Parent Div";

document.body.appendChild(parentDiv);













}

module.exports = BuildLayout;