let btn = document.querySelector(".btn")
let nameBook = document.querySelector("input")
let section = document.querySelector("section")
let date = new Date();

let btnDelete = document.querySelectorAll("h3")

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
    if (nameBook.value) {
        localStorage.setItem(nameBook.value, dateAddDays(21))
        // crée un nouvel élément div
        var newDiv = document.createElement("div");
        // ajoute le nœud texte au nouveau div créé
        section.appendChild(newDiv);
        newDiv.innerHTML= `<h2> ${nameBook.value} </h2>
        <p> Date de retour : <strong> ${dateAddDays(21)} </strong> </p>
        <h3> X </h3>
        `
        btnDelete = document.querySelectorAll("h3")
    }
})
    
for (let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);

    section.innerHTML += ` <div> <h2> ${key} </h2>
    <p> Date de retour : <strong> ${localStorage.getItem(key)} </strong> </p>
    <h3> X </h3>
    </div>`

    btnDelete = document.querySelectorAll("h3")
}

btnDelete.forEach(e => {
    e.addEventListener("click", () => {
        alert("test")
        let clef = e.parentNode.querySelector("h2")
        console.log(clef)
        // e.parentNode.remove()
    })
})