const forms = document.querySelector("form");
const media = document.querySelector("#media");
const situacao = document.querySelector("#situacao")

forms.addEventListener("submit", (e) => {
    const nome = forms.nomeAluno.value;
    const nota1 = Number(forms.nota1.value);
    const nota2 = Number(forms.nota2.value);

    const mediaFinal = (nota1 + nota2) / 2;

    media.innerText = `Média das Notas: ${mediaFinal}`

    if (mediaFinal >= 7) {
        situacao.innerText = `Parabéns ${nome}! Você foi aprovado(a)!!`
        situacao.style.color = "blue"
    } else if (mediaFinal >= 4) {
        situacao.innerText = `${nome}, você está de recuperação, estude para a próxima prova!`
        situacao.style.color = "yellow"
    } else {
        situacao.innerText = `${nome}, você foi reprovado(a), tente novamente!`
        situacao.style.color = "red"
    }

    e.preventDefault();
});
