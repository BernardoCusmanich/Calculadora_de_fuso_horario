function calcularFuso() {
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraRussia = document.getElementById("outHoraRussia");

    var horaBrasil = Number(inHoraBrasil.value);

    if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
        alert("Informe a hora no Brasil corretamente"); // exibe alerta
        inHoraBrasil.focus(); // posiciona em inHoraBrasil
        window.location.reload();
        return;
    }

    var horaRussia = horaBrasil + 6;

    if(horaRussia > 24) {
        horaRussia = horaRussia - 24;
    }

    outHoraRussia.textContent = "Hora na Russia: " + horaRussia.toFixed(2);

}

var btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", calcularFuso);
