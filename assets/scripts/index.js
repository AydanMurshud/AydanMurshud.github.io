const hMenu = document.getElementById('h-menu');
const closeIcon = document.getElementById('close-btn');
const sideMenuOpen = document.getElementById('h-menu-opened');
const sideMenuclosed = document.getElementById('h-menu-closed');
const mainPage = document.getElementById('main-page');
const profilePicOpened = document.getElementById('pp-opened');
const profilePicClosed = document.getElementById('pp-closed');
const modeSwitch = document.getElementById('mode');
const mainContainer = document.getElementById('container');

function menuOpen() {
    hMenu.addEventListener('click', () => {
        
        sideMenuOpen.style.display = 'flex';
        sideMenuOpen.style.width = '300px';
        sideMenuclosed.style.display = 'none';
        hMenu.style.display = 'none';
    });
}
menuOpen()

function menuClose() {
    closeIcon.addEventListener('click', () => {
        sideMenuclosed.style.display = 'flex';
        sideMenuOpen.style.display = 'none';
        hMenu.style.display = 'flex';
        hMenu.style.animation = 'apear 1.0s';
    });
    mainPage.addEventListener('click', () => {
        sideMenuclosed.style.display = 'flex';
        sideMenuOpen.style.display = 'none';
        hMenu.style.display = 'flex';        
    });
}
menuClose()

function switchMode() {
    let counter = 0;
    modeSwitch.addEventListener('click', () => {
        if (counter === 0) {
            mainContainer.style.backgroundImage = 'url(/assets/images/hexagon-svgrepo-com-bg.svg)'
            mainContainer.style.backgroundColor = 'black';
            mainContainer.style.backgroundSize = '250px';
            mainContainer.style.backgroundPosition = 'bottom';
            document.documentElement.style.setProperty('--thirdColor', '#FFFFFF')
            sideMenuclosed.style.backgroundColor = 'rgb(17, 17, 17)';
            sideMenuclosed.style.backgroundImage = 'none'
            sideMenuOpen.style.backgroundColor = 'rgb(17, 17, 17)';
            sideMenuOpen.style.backgroundImage = 'none'
            
            modeSwitch.innerHTML = '🌑'
            counter++;
        } else {
            mainContainer.style.backgroundImage = 'url(/assets/images/19366.jpg)'
            mainContainer.style.backgroundColor = 'none';
            mainContainer.style.backgroundSize = 'cover'
            mainContainer.style.backgroundPosition = 'none';
            document.documentElement.style.setProperty('--thirdColor', '#060b38')
            sideMenuclosed.style.backgroundColor = 'var(--mainColor)';
            sideMenuclosed.style.backgroundImage = 'url(/assets/images/hexagon-svgrepo-com.svg)'
            sideMenuOpen.style.backgroundColor = 'var(--mainColor)';
            sideMenuOpen.style.backgroundImage = 'url(/assets/images/hexagon-svgrepo-com.svg)'

            modeSwitch.innerHTML = '☀️'
            counter--;
       }
    });
}
switchMode()
