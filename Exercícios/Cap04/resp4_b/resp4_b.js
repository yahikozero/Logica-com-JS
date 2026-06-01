const forms = document.querySelector("form");
const resp = document.querySelector("#resp");

forms.addEventListener("submit", (e) => {
    e.preventDefault()
    const velPerm = Number(forms.velPerm.value);
    const velMot = Number(forms.velMot.value);

    const multa = velPerm + (velPerm * 0.20);

    if (velMot <= velPerm) {
        resp.innerText = `Situação: Sem Multa`
    } else if (velMot <= multa) {
        resp.innerText = `Situação: Multa Leve`
    } else {
        resp.innerText = `Situação: Multa Grave`
    }

});