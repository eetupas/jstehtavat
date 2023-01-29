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
export {
    renderMenu,
};