function openMenu() {
    const menu = document.getElementById('menunav');
    console.log(menu.style.display)
    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style = 'display:inline-block';
    } else {
        menu.style = 'display:none;';
    }
}