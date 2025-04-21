let ponownie = true;

while (ponownie) {
    let dochod = Number(prompt("Jaki jest twój miesięczny dochód?"));
    if (isNaN(dochod)) {
        alert("To nie jest prawidłowa liczba.");
        continue;
    }
    let wydatki = Number(prompt("Jakie są twoje miesięczne wydatki?"));
    if (isNaN(wydatki)) {
        alert("To nie jest prawidłowa liczba.");
        continue;
    }
    let dlugosc = Number(prompt("Ile miesięcy chcesz oszczędzać?"));
    if (isNaN(dlugosc)) {
        alert("To nie jest prawidłowa liczba.");
        continue;
    }

    let reszta = dochod - wydatki;
    let plan = reszta * dlugosc;

    alert("W " + dlugosc + " miesięcy uda ci się zaoszczędzić " + plan + " zł.");

    if (plan < 1000) {
        alert("Spróbuj zmniejszyć wydatki!");
    } else if (plan < 3000) {
        alert("Całkiem dobry plan, powodzenia!");
    } else {
        alert("Świetnie Ci idzie z finansami!");
    }

    ponownie = confirm("Czy chcesz obliczyć ponownie?");
}

alert("Dziękuję za skorzystanie! 👋");