const renderMenu = (menu, lista) => {
    let menuBox = document.querySelector('.ruokalista1');
    if (lista == 2) {
        menuBox = document.querySelector('.ruokalista2');
    }
    console.log(menu);
    menuBox.innerHTML = "";
    const list = document.createElement('ul');
    for(const dish of menu) {
        const li = document.createElement('li');
        li.textContent = dish + ".";
        list.appendChild(li);
    }
    console.log("moi");
    menuBox.append(list);
};

export {
    renderMenu,
};