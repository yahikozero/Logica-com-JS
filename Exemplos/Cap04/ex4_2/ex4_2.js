const forms = document.querySelector("form");
const resp = document.querySelector("h3");

forms.addEventListener("submit", (e) => {
    const nome = forms.nome.value;
    const altura = Number(forms.altura.value);
    const check = forms.masculino.checked;

    let peso
    if (check) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerText = `${nome} seu peso ideal é ${peso.toFixed(3)}Kg`

    e.preventDefault();

});