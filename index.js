const ratingElements = document.querySelectorAll('.rating');

let selectedRating = '';

const btnElement = document.getElementById('btn');

const containerElement = document.getElementById('container');

console.log('hello jojo');

ratingElements.forEach((ratingEl) => {
    ratingEl.addEventListener('click', (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        console.log(`eu cliquei no ${selectedRating}`);
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnElement.addEventListener('click', () => {
    if (selectedRating !== '') {
        containerElement.innerHTML = `
        <strong>Obrigado!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}.</strong>
        <br>
        <br>
        <p>Continuaremos trabalhando para melhorar nosso suporte ao cliente.</p>
        `
    }
})

function removeActive() {
    ratingElements.forEach((ratingEl) => {
        ratingEl.classList.remove("active")
    });
}