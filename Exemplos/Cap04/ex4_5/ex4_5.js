const forms = document.querySelector("form");
const resp = document.querySelector("#resp");

forms.addEventListener("submit", (e) => {
    const num = Number(forms.num.value);
    const raiz = Math.sqrt(num)

    if (Number.isInteger(raiz)) {
        resp.innerText = `A raiz de ${num} é ${raiz}`;
    } else {
        resp.innerText = `${num} não possui raiz quadrada exata.`;
    }

    e.preventDefault();
    
});