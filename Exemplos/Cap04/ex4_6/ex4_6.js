const forms = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");
const resp3 = document.querySelector("#resp3");

forms.addEventListener("submit", (e) => {
    const saque = Number(forms.valor.value);

    if (saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis no momento! Notas disponíveis: R$ 10, 50, 100.");
        forms.valor.focus();
        return
    };

    const notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    const notasCinquenta = Math.floor(resto / 50);
    resto = saque % 50;
    const notasDez = Math.floor(resto / 10);
    
    if (notasCem > 0){
        resp1.innerText = `Notas de R$100: ${notasCem}`
    };

    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$50: ${notasCinquenta}`
    };

    if (notasDez > 0) {
        resp3.innerText = `Notas de R$10: ${notasDez}`
    };

    e.preventDefault();
});