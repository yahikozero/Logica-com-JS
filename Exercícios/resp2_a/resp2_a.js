const forms = document.querySelector("form");
const tituloPromo = document.querySelector("#promocao");
const precoPromo = document.querySelector("#precoPromocao");

forms.addEventListener("submit", (e) =>{
    const medicamento = forms.medicamento.value;
    const preco = Number(forms.preco.value);

    const promo = Math.floor(preco * 2);

    tituloPromo.innerText = `Promoção de ${medicamento}`;
    precoPromo.innerText = `Leve 2 por apenas R$ ${promo.toFixed(2)}`;

    e.preventDefault()

});