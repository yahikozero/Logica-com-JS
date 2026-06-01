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
    if (deposito >= 1) {
        troco = deposito % 1;
        resp1.innerText = `Tempo: 30 min`;
        resp2.innerText = `Troco: R$ ${troco}`
        
    } else if (deposito >= 1.75) {
        troco = deposito % 1.75;
        resp1.innerText = `Tempo: 60 min`;
        resp2.innerText = `Troco: R$ ${troco}`
    } else {
        troco = deposito % 3;
        resp1.innerText = `Tempo: 120 min`
        resp2.innerText = `Troxo: R$ ${troco}`
    }
});