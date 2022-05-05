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

function closeMenu() {
    sideMenuclosed.style.display = 'flex';
    sideMenuOpen.style.display = 'none';
    hMenu.style.display = 'flex';
    hMenu.style.animation = 'apear 1.4s';
}

function cardContent() {
    mE1.addEventListener('click', () => {
      let request = new XMLHttpRequest()
      request.open('GET', '/assets/html/education.html', true);
      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          let resp = request.responseText;
          document.getElementById('card-container').innerHTML = resp;
        }
      };
      request.send()

      closeMenu()
    });
  
    mE2.addEventListener('click', () => {
        let request = new XMLHttpRequest()
        request.open('GET', '/assets/html/projects.html', true);
        request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          let resp = request.responseText;
          document.getElementById('card-container').innerHTML = resp;
        }
      };
      request.send()

      closeMenu()
    });
  
    mE3.addEventListener('click', () => {
      let request = new XMLHttpRequest()
      request.open('GET', '/assets/html/experiance.html', true);
      request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let resp = request.responseText;
        document.getElementById('card-container').innerHTML = resp;
      }
    };
    request.send()

        closeMenu()
    });
  
    mE4.addEventListener('click', () => {
      let request = new XMLHttpRequest()
      request.open('GET', '/assets/html/contacts.html', true);
      request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let resp = request.responseText;
        document.getElementById('card-container').innerHTML = resp;
      }
    };
    request.send()
        closeMenu()
    });
    
}
cardContent()