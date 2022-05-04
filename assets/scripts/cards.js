const mE1 = document.getElementById('education');
const mE2 = document.getElementById('projects');
const mE3 = document.getElementById('experiance');
const mE4 = document.getElementById('contacts')
const mainP = document.createElement('div');
mainP.id = 'main-page';
mainP.className = 'main-page';
const cardContainer = document.createElement('div');
cardContainer.id = 'card-container';
cardContainer.className = 'card-container';
function mainPageSetUp() {
    document.body.appendChild(container);
    document.getElementById('container').appendChild(mainP);
    document.getElementById('main-page').appendChild(cardContainer);
    
}
mainPageSetUp()
let cardElement = 'hello word';

function cardContent() {
    mE1.addEventListener('click', () => {
        cardElement = mE1.getAttribute('name');
        alert(cardElement)
    });
}
cardContent()
cardContainer.innerHTML = cardElement