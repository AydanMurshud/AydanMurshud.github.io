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

const cardElement = document.createElement('div');
cardElement.id = 'card-content';
cardElement.className = 'card-content'
cardElement.innerHTML = '<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, praesentium maxime cumque cum facere unde vero eius numquam, quas animi a fugit cupiditate possimus corporis enim placeat, provident velit inventore? Cupiditate eveniet culpa eos minus hic nihil quasi recusandae facilis.</p>';

document.getElementById('card-container').appendChild(cardElement);
const education = `<img src="" alt="">
<h2>Education</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est saepe inventore labore. Nihil tempora omnis deserunt nobis debitis cumque quibusdam et blanditiis asperiores sint magnam dolor exercitationem porro dolore reiciendis architecto quidem, cupiditate ducimus provident nam. Aut sequi incidunt ab praesentium! Cupiditate eveniet repellat hic autem aut tempora iste quis tenetur sed consectetur delectus veritatis officia nobis, qui aspernatur.</p>
<ul class="institution">
  <li>
      <img src="assets/images/logo_bg.png" alt="">
      <ul>
          <li>
            <p>University of Economics - Varna</p>
          </li>
          <li>
            <li>Bachelor degree - 2012/2016</li>
            <li>Master degree - 2016/2017</li>
          </li>
      </ul>
    </li>
  <li>
    <img src="assets/images/Logo_Software_University_(SoftUni)_-_blue.png" alt="">
    <ul>
        <li>
          <p>Softwere University</p>
        </li>
        <li>
          <li>Programming Basics - 2022</li>
          <li>Programming Fundamentals - Pending...</li>
        </li> 
    </ul>
  </li>
</ul>
</div>
</div>`

function closeMenu() {
    sideMenuclosed.style.display = 'flex';
    sideMenuOpen.style.display = 'none';
    hMenu.style.display = 'flex';
    hMenu.style.animation = 'apear 1.4s';
}

function cardContent() {
    mE1.addEventListener('click', () => {
        document.getElementById('card-container').appendChild(cardElement);
        cardElement.innerHTML = education;
        
        closeMenu()
    });
    mE2.addEventListener('click', () => {
        document.getElementById('card-container').appendChild(cardElement);
        cardElement.innerHTML = `<p>You suck!</p>`;
        
        closeMenu()
    });
    mE3.addEventListener('click', () => {
        document.getElementById('card-container').appendChild(cardElement);
        cardElement.innerHTML = education;
        
        closeMenu()
    });
    mE4.addEventListener('click', () => {
        document.getElementById('card-container').appendChild(cardElement);
        cardElement.innerHTML = education;
        
        closeMenu()
    });
    
}
cardContent()