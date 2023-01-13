const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];
const sortButton = document.querySelector('#sort-button');
const reverseButton = document.querySelector('#reverse-button');
const langFi = document.querySelector('#language-fi');
const langEn = document.querySelector('#language-en');
const random = document.querySelector('#random');
let lang = 'fi';
let activeMenu = coursesFi;
let activeSorting = 'asc';
/**
 * Renders menu content to html page
 * @param {*} menu = array of dishes 
 */
const renderMenu = (menu) => {
    const menuBox = document.querySelector('.ruokalista1');
    menuBox.innerHTML = "";
    const list = document.createElement('ul');
    for(const dish of menu) {
        const li = document.createElement('li');
        li.textContent = dish;
        list.appendChild(li);
    }

    menuBox.append(list);
};
const sortMenu = (menu, order='asc') => {
    menu.sort();
    if (order === 'desc') {
        menu.reverse();
    }
    return menu;
};
const changeLanguage = (language) => {
    if (language === 'fi') {
        activeMenu = coursesFi;
    } else if (language === 'en') {
        activeMenu = coursesEn;
    }
    lang = language;
    renderMenu(activeMenu);
};
const getRandomDish = (menu) => {
    const randomIndex = Math.floor(Math.random()*menu.length);
    return menu[randomIndex];
};
changeLanguage('en');
sortButton.addEventListener('click', () => {
    activeSorting = 'asc';
    renderMenu(sortMenu(activeMenu));
});
reverseButton.addEventListener('click', () => {
    activeSorting = 'desc';
    renderMenu(sortMenu(activeMenu, 'desc'));
});
langEn.addEventListener('click', () => {
    lang = 'en';
    activeMenu = coursesEn;
    renderMenu(sortMenu(activeMenu, activeSorting));
});
langFi.addEventListener('click', () => {
    lang = 'fi';
    activeMenu = coursesFi;
    renderMenu(sortMenu(activeMenu, activeSorting));
});
random.addEventListener('click', () => {
    alert(getRandomDish(activeMenu));
});



