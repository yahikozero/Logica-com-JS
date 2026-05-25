const forms = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

forms.addEventListener("submit", (e) =>{
    const modelo = forms.inVeiculo.value;
    const preco = forms.inPreco.value;

    const entrada = preco * 0.50;
    const parcela = entrada / 12;

    resp1.innerText = `Promoção ${modelo}`;
    resp2.innerText = `Entrada de R$ ${entrada}`;
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`;

    e.preventDefault();
});
