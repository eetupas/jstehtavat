'use strict';
import Menu from '../assets/menu.json';

import * as functions from './Functions.js';
import * as fazerData from './FazerData';

const ruokalista = fazerData.menuEn;
console.log(ruokalista);
const render = functions;
const courseMenu = Menu.courses;
const menuFi = fazerData.menuFin;
const menuEn = fazerData.menuEn;
const coursesEn = [];
const coursesFi = [];
const menu = Menu.courses;

const menuSwap = (menu) => {
    activeMenu = menu;
};
for (let x in menu){
    coursesFi[x-1] = (menu[x].title_fi);
    coursesEn[x-1] = (menu[x].title_en);
}

let lang = 'fi';
let activeMenu = coursesEn;

const sortMenu = (menu, order='asc') => {
    console.log(ruokalista);
    menu.sort();
    if (order === 'desc') {
        menu.reverse();
    }
    return menu;
};

const getRandomDish = (menu) => {
    const randomIndex = Math.floor(Math.random()*menu.length);
    return menu[randomIndex];
};

const changeLanguage = (language) => {
    if (language === 'fi') {
        activeMenu = coursesFi;
    } else if (language === 'en') {
        activeMenu = coursesEn;
    }
    lang = language;
    render.renderMenu(activeMenu);
};

export {
    courseMenu,
    coursesFi,
    coursesEn,
    activeMenu,
    lang,
    menuSwap,
    sortMenu,
    getRandomDish,
    changeLanguage,
    menuFi,
    menuEn,
};