const forms = document.querySelector("form");
const resp = document.querySelector("#resp");

forms.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(forms.numero.value);
    let tabuada = "";

    for (let i = 1; i <= 10; i++){
        tabuada = `${tabuada}${numero} x ${i} = ${numero * i}\n`;
    };

    resp.innerText = tabuada
});
