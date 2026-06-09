const forms = document.querySelector("form");
const resp = document.querySelector("#resp");

forms.addEventListener("submit", (e) =>{
    e.preventDefault();
    const numero = Number(forms.numero.value);
    let resposta = ``;

    for (let i = numero; i > 1; i--){
        resposta = `${resposta}${i}, `
    };

    resposta = `${resposta}1.`;

    resp.innerText = resposta;
});