// src/js/components/menu.js

export function createMenu() {
    const menu = document.createElement('nav');
    menu.classList.add('menu');

    const menuItems = [
        { name: 'Home', link: 'home.html' },
        { name: 'Lost Date', link: 'lost-items.html' },
        { name: 'Found Date', link: 'found-items.html' },
        { name: 'Details', link: 'item-details.html' },
        { name: 'Owner Address', link: 'report-item.html' }
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.href = item.link;
        menuItem.textContent = item.name;
        menu.appendChild(menuItem);
    });

    document.body.appendChild(menu);
}

export function initMenu() {
    createMenu();
}