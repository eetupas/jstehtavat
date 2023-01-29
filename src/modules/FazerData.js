'use strict';
import MenuFi from '../assets/menu-fin.json';
import MenuEn from '../assets/menu-en.json';

const menuFin = MenuFi.MenusForDays[0].SetMenus[0].Components;
const menuEn = MenuEn.MenusForDays[0].SetMenus[0].Components;

export {
    menuFin,
    menuEn,
};