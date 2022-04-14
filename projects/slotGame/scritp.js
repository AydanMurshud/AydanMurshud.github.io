const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const slot4 = document.getElementById('slot4');
const slot5 = document.getElementById('slot5');
const slot6 = document.getElementById('slot6');
const slot7 = document.getElementById('slot7');
const slot8 = document.getElementById('slot8');
const message = document.getElementById('message');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');

const btn = document.getElementById('btn');
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let numbers = ['🍓', '🍌', '🍉', '🍋','🍊','🍎','🍇','🍈','⭐'];
function click() {
    btn.addEventListener('click', () => {
        
        a = numbers[Math.floor(Math.random() * numbers.length)];
        b = numbers[Math.floor(Math.random() * numbers.length)];
        c = numbers[Math.floor(Math.random() * numbers.length)];
        d = numbers[Math.floor(Math.random() * numbers.length)];
        e = numbers[Math.floor(Math.random() * numbers.length)];
        f = numbers[Math.floor(Math.random() * numbers.length)];
        g = numbers[Math.floor(Math.random() * numbers.length)];
        h = numbers[Math.floor(Math.random() * numbers.length)];
        slot1.innerHTML = a;
        slot2.innerHTML = b;
        slot3.innerHTML = c;
        slot4.innerHTML = d;
        slot5.innerHTML = e;
        slot6.innerHTML = f;
        slot7.innerHTML = g;
        slot8.innerHTML = h;
        setTimeout(2000)
        if (a === b) {
            message.style.display = 'flex';
            setTimeout(() => {
                message.style.display = 'none';
            }, 2000);

        }
        
    })
    btn.removeEventListener('click', btn);
    
}
click()
