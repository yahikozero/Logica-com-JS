const forms = document.querySelector("form")
const respHoraFr = document.querySelector("#resp")

forms.addEventListener("submit", (e) => {
    const horaBr = Number(forms.horaBr.value);
    let horaFr = horaBr + 5;

    if (horaFr > 23.59) {
        horaFr = horaFr - 24
    };

    respHoraFr.innerText = `Hora na França: ${horaFr.toFixed(2)}`;

    e.preventDefault()
});