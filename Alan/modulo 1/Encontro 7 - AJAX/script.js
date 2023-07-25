const http = new XMLHttpRequest();
const select = document.querySelector("select");

document.querySelector("button").addEventListener("click", () => {
    http.open("GET", "./nomes.txt");
    http.send();
    http.onload = () => {
        let nomes = http.response.split(";");
        nomes.forEach((nome) => {
            let opt = document.createElement("option");
            select.append(opt);
            opt.setAttribute("value", nome.trim());
            opt.innerHTML = nome.trim();
        });
    };
});
