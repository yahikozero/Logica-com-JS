const forms = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

forms.addEventListener("submit", (e) => {
    e.preventDefault()
    const deposito = Number(forms.deposito.value)
    
    if (deposito < 1) {
        alert("Valor insuficiente, valor mínimo: R$1.00");
    };

    let troco
    let tempo

    if (deposito >= 3) {
        tempo = 120
        troco = deposito - 3;     
    } else if (deposito >= 1.75) {
        tempo = 60
        troco = deposito - 1.75;
    } else {
        tempo = 30
        troco = deposito - 1;
    }

    resp1.innerText = `Tempo: ${tempo} min`;
    if (troco > 0){
        resp2.innerText = `Troco: R$ ${troco}`;
    }
});