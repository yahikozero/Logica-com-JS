const forms = document.querySelector("form");
const promo = document.querySelector("#promo");
const valorPromo = document.querySelector("#valorPromo");

forms.addEventListener("submit", (e) =>{
    const produto = forms.produto.value;
    const precoProduto = Number(forms.precoProduto.value);

    const precoUltProduto = (precoProduto * 0.50);
    const promoPreco = (precoProduto * 2) + precoUltProduto;
    

    promo.innerText = `${produto} - Promoção: Leve 4 e pague R$ ${promoPreco.toFixed(2)}`;
    valorPromo.innerText = `O 3º produto sai por apenas R$ ${precoUltProduto.toFixed(2)}`;

    e.preventDefault();
});