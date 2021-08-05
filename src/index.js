import menuTpl from './templates/menu-card.hbs';
import menu from './menu.json';
import './styles.css';

const menuCardsMarkup = createMenuCard(menu);
const root = document.querySelector('.js-menu');

function createMenuCard(menu) {
    return menu.map(menuTpl).join('');
};

root.insertAdjacentHTML('afterbegin', menuCardsMarkup);

const body = document.querySelector('body');

const switcher = document.querySelector('.theme-switch__toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

let defaultTheme = body.classList.add(Theme.LIGHT);    

function switchTheme(e) {      

    if (e.target.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
        switcher.checked = true;
        localStorage.setItem('checkbox-key', switcher.checked);
        
    } else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
        switcher.checked = false;
        localStorage.setItem('checkbox-key', switcher.checked);
    }
}

switcher.addEventListener('change', switchTheme);

checkTheme();

function checkTheme() {
    const savedTheme = localStorage.getItem('theme');
    const savedCheck = localStorage.getItem('checkbox-key');
    
    if(savedTheme){
        console.log(savedTheme);
        defaultTheme = body.classList.add(savedTheme);
        switcher.checked = savedCheck;
    }
}





