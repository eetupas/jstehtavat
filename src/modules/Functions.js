const renderMenu = (menu, lista) => {
    let menuBox = document.querySelector('.ruokalista1');
    if (lista == 2) {
        menuBox = document.querySelector('.ruokalista2');
    } 
    menuBox.innerHTML = "";
    const list = document.createElement('ul');
    for(const dish of menu) {
        const li = document.createElement('li');
        li.textContent = dish;
        list.appendChild(li);
    }

    menuBox.append(list);
};

export {
    renderMenu,
};