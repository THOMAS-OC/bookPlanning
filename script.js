let btn = document.querySelector(".btn")
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
    alert(dateAddDays(21))
})

localStorage.setItem("Histoire de pouvoir", "date")