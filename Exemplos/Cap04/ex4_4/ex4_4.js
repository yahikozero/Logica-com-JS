const forms = document.querySelector("form")
const respHoraFr = document.querySelector("#resp")

forms.addEventListener("submit", (e) =>{
    e.preventDefault()

    const horaBr = forms.horaBr.value;
    let horaFr = horaBr + 5;

    if (horaFr > 24){
        horaFr = horaFR - 24;
    }
    
    respHoraFr.innertext = `Hora na França: ${horaFr}`;
});