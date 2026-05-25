const forms = document.querySelector("form");
const aPagar = document.querySelector("h3");

forms.addEventListener("submit", e =>{
    const preco = forms.inPreco.value;
    const peso = forms.inPeso.value;

    const valorTotal = (preco * peso) / 1000;

    aPagar.innerText = `Valor a Pagar: R$ ${valorTotal.toFixed(2)}`;

    e.preventDefault();
});
