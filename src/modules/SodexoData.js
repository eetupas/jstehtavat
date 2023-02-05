'use strict';
import Menu from '../assets/menu.json';
import * as functions from './Functions.js';
import * as fazerData from './FazerData';

const ruokalista = fazerData.menuEn;
const render = functions;
const courseMenu = Menu.courses;
const menuFi = fazerData.menuFin;
const menuEn = fazerData.menuEn;
const coursesEn = [];
const coursesFi = [];
const menu = Menu.courses;

/*
for (let x in menu){
    coursesFi[x-1] = (menu[x].title_fi);
    coursesEn[x-1] = (menu[x].title_en);
}
*/
let lang = 'fi';
let activeMenu = coursesEn;

const menuSwap = (menu) => {
  activeMenu = menu;
};
import {doFetch} from './network';

(async () => {
  // get sodexo data example (iife)
  try {
    const menuData = await doFetch(
      'https://www.sodexo.fi/ruokalistat/output/daily_json/152/2023-01-30'
    );
    for(let x in menuData.courses){
        coursesFi[x-1] = (menuData.courses[x].title_fi);
        coursesEn[x-1] = (menuData.courses[x].title_en);
    }
  } catch (error) {
    // tehdään jotain jos virhe doFetchiltä
    console.log('menu ei saatavilla');
  }
  // get foodco menu
  try {
    const menuData = await doFetch(
      'https://www.compass-group.fi/menuapi/feed/json?costNumber=3208&language=en',
      true
    );
    console.log('karaportin menu', menuData);
  } catch (error) {
    // do something
    console.log('menu ei saatavilla');
  }
})();

const sortMenu = (menu, order='asc') => {
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