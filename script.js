let btn = document.querySelector(".btn")
let nameBook = document.querySelector("input")
let section = document.querySelector("section")
let date = new Date();

function dateAddDays(a, b) {
    var d = b ? new Date(b) : new Date();
    d.setDate(d.getDate() + a);
    d = d.toLocaleString('fr-FR',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return d;
}

btn.addEventListener("click", () => {
    localStorage.setItem(nameBook.value, dateAddDays(21))
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // ajoute le nœud texte au nouveau div créé
    section.appendChild(newDiv);
    newDiv.innerHTML= "<p> toto </p>"
})

localStorage.setItem("Histoire de pouvoir", "date")