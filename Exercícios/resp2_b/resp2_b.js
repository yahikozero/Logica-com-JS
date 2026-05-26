const forms = document.querySelector("form");
const precoFinal = document.querySelector("#precoFinal");

forms.addEventListener("submit", (e) =>{
    const precoMinuto = Number(forms.preco.value);
    const tempoCliente = Number(forms.tempo.value);

    precoFinal.innerText = `O total a pagar é R$ ${(Math.ceil(tempoCliente / 15) * precoMinuto).toFixed(2)}`;

    e.preventDefault();
});