document.querySelector("#add").addEventListener("click", () => {
    let newColor = document.querySelector("#addColor").value;
    createColor(newColor);
});

const children = document.querySelector(".children");
const father = document.querySelector(".father");

colors.forEach((color) => {
    createColor(color);
});

function createColor(color) {
    let label = document.createElement("label");
    let input = document.createElement("input");

    label.append(input);
    children.append(label);
    label.setAttribute("class", color);
    label.style.backgroundColor = color;
    input.setAttribute("type", "radio");
    input.setAttribute("value", color);

    input.addEventListener("click", () => {
        father.style.backgroundColor = input.value;
    });
}
