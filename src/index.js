'use strict';
import * as sodexoData from './modules/SodexoData.js';
import * as fazerData from './modules/FazerData.js';
import * as functions from './modules/Functions.js';

const sdata = sodexoData;
const render = functions;
let activeSorting = 'asc';
const sortButton = document.querySelector('#sort-button');
const reverseButton = document.querySelector('#reverse-button');
const langFi = document.querySelector('#language-fi');
const langEn = document.querySelector('#language-en');
const random = document.querySelector('#random');
render.renderMenu(sdata.activeMenu, 1);
render.renderMenu(sdata.menuFi, 2);

/**
 * Renders menu content to html page
 * @param {*} menu = array of dishes 
 */

sortButton.addEventListener('click', () => {
    activeSorting = 'asc';
    render.renderMenu(sdata.sortMenu(sdata.activeMenu));
});
reverseButton.addEventListener('click', () => {
    activeSorting = 'desc';
    render.renderMenu(sdata.sortMenu(sdata.activeMenu, 'desc'));
});
langEn.addEventListener('click', () => {
    sdata.changeLanguage('en');
    sdata.menuSwap(sdata.coursesEn);
    render.renderMenu(sdata.sortMenu(sdata.activeMenu, activeSorting));
});
langFi.addEventListener('click', () => {
    sdata.changeLanguage('fi');
    sdata.menuSwap(sdata.coursesFi);
    render.renderMenu(sdata.sortMenu(sdata.activeMenu, activeSorting));
});
random.addEventListener('click', () => {
    alert(sdata.getRandomDish(sdata.activeMenu));
});