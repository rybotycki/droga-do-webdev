let ponownie = true

function obliczSume(tablica) {
    let suma = 0;
    for (let i = 0; i < tablica.length; i++) {
        suma += tablica[i];
    }
    return suma;
}

function obliczPrzychod(dochod, sumWydatkow) {
    return dochod - sumWydatkow;
}

function oszczednosci6Msc(przychod) {
    return przychod * 6;
}

while (ponownie) {
    let dochod = Number(prompt("Podaj swoj dochod:"));
    if (isNaN(dochod) || dochod <= 0) {
        alert("To nie jest prawidłowa wartość!");
        continue;
    }
    let input = prompt("Podaj swoje wydatki oddzielone przecinkami (np. 100,200,300):");
    let wydatkiText = input.split(",");
    let wydatki = [];

    for (let i = 0; i < wydatkiText.length; i++) {
        let wydatek = Number(wydatkiText[i]);
        if (!isNaN(wydatek)) {
            wydatki.push(wydatek);
        }
    }

    let sumWydatkow = obliczSume(wydatki);
    let przychod = obliczPrzychod(dochod, sumWydatkow);
    let oszczednosci = oszczednosci6Msc(przychod).toFixed(2);

    alert("Twoje oszczędności w 6 miesięcy wynoszą: " + oszczednosci + "zł");
    if (oszczednosci < 0) {
        alert("Wydajesz więcej niż zarabiasz!");
    } else if (oszczednosci < 500) {
        alert("Postaraj się bardziej przyłożyć!");
    } else if (oszczednosci < 3000) {
        alert("Całkiem dobrze!");
    } else if (oszczednosci < 6000) {
        alert("Świetny wynik!");
    } else {
        alert("Gratulacje! Oszczędzasz ponad tysiąc miesięcznie!");
    }

    ponownie = confirm("Czy chcesz policzyć jeszcze raz?");

}

alert("Do zobaczenia!");