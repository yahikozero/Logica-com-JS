const forms = document.querySelector("form");
const resp = document.querySelector("#resp");

forms.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(forms.numero.value);

    if (num % 2 === 0) {
        resp.innerText = `O número ${num} é Par!`
    } else {
        resp.innerText = `O número ${num} é Ímpar!`
    };
});