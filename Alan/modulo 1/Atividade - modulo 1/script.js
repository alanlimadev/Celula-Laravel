var contador = 0;

/**
 * Essa função faz uma requisição ajax dos site www.joemaster.com.br e raspa os dados como retorno
 * @param {*CEP do vendededor} origiem
 * @param {*CEP de que vai receber o produto} destino
 * @returns {O retorno deve ser tratado pelo desenvolvedor}
 */
function calculaDist(origem, destino) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            let resp = this.response;
            //expressões regulares
            const regOrigem = /Origem: (.+?)<br \/>/;
            const regDestino = /Destino: (.+?)<br \/>/;
            const regDistancia = /Dist&acirc;ncia: (.+?)<br \/>/;
            const regTempo = /Tempo: (.+?)<\/b><br><br>/;

            let origem = resp.match(regOrigem)[1];
            let destino = resp.match(regDestino)[1];
            let distancia = resp.match(regDistancia)[1];
            let tempo = resp.match(regTempo)[1];

            console.log(origem);
            console.log(destino);
            console.log(distancia);
            console.log(tempo);
        }
    });

    xhr.open(
        "GET",
        "http://api.scraperapi.com/?api_key=a599cc351bf8ba44a0574b803d658d4d&url=https%3A%2F%2Fwww.joemaster.com.br%2Fcodigos%2Fexemplos%2Fcalculardistanciagoogle.php%3Forigem%3D" +
            origem +
            "%26destino%3D" +
            destino
    );
    xhr.send();
}
