const a = document.getElementsByClassName("card shadow-sm")

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function() {
        a[i].classList.toggle("active");
    });
}
const edit = document.getElementsByClassName("edit")
const text = document.getElementsByClassName("card-text")

for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click", function(e) {
        e.stopPropagation()
        const newText = prompt("Edit Text")
        if (text[i] && text[i].textContent) {
            text[i].textContent = newText.valueOf()
        }
    });
}