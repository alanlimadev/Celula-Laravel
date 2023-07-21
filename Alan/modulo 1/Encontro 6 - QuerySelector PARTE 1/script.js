let inputs = document.querySelectorAll(".children input[type=radio]");
const father = document.querySelector(".father");

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        father.style.backgroundColor = input.value;
    });
});
