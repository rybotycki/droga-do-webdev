const tgl = document.getElementById("toggle-btn");
const przycisk = document.getElementById("przycisk");
const licznik = document.getElementById("licznik");
const reset = document.getElementById("reset");

tgl.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        tgl.textContent = "Włącz tryb jasny";
    } else {
        tgl.textContent = "Włącz tryb ciemny";
    }
})

przycisk.addEventListener("click", function () {
    licznik.textContent = parseInt(licznik.textContent) + 1;
    if (parseInt(licznik.textContent) === 10) {
        alert("Ale klikasz!");
    }
    if (parseInt(licznik.textContent) === 20) {
        alert("Uważaj, uzależnia!");
    }
})

reset.addEventListener("click", function () {
    licznik.textContent = 0;
})