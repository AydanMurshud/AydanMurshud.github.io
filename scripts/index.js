const hMenu = document.getElementById('h-menu');
const closeIcon = document.getElementById('close-btn');
const sideMenuOpen = document.getElementById('h-menu-opened');
const sideMenuclosed = document.getElementById('h-menu-closed');
const mainPage = document.getElementById('main-page');
const profilePicOpened = document.getElementById('pp-opened');
const profilePicClosed = document.getElementById('pp-closed');

function menuOpen() {
    hMenu.addEventListener('click', () => {
        
        sideMenuOpen.style.display = 'flex';
        sideMenuOpen.style.width = '300px';
        sideMenuclosed.style.display = 'none';
    });
   
}
menuOpen()

function menuClose() {
    closeIcon.addEventListener('click', () => {
        sideMenuclosed.style.display = 'block';
        sideMenuOpen.style.display = 'none';
    });
}
menuClose()