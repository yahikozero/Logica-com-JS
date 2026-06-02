const forms = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

forms.addEventListener("submit", (e) => {
    e.preventDefault()
    const ladoA = Number(forms.ladoA.value);
    const ladoB = Number(forms.ladoB.value);
    const ladoC = Number(forms.ladoC.value);

    if (ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)) {
        resp1.innerText = `Lados não podem formar um triângulo.`;
        resp2.innerText = ``;
    } else {
        resp1.innerText = `Lados podem formar um triângulo.`;

        if (ladoA === ladoB && ladoB === ladoC) {
            resp2.innerText = `Tipo: Equilátero`;
        } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
            resp2.innerText = `Tipo: Isósceles`
        } else {
            resp2.innerText = `Tipo: Escaleno`
        }
    }
});