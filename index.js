function openNav() {
    alert('clicked');
    let menu = document.getElementById('mobile-menu');

    if (menu.style === 'block') {
        menu.style = 'none';
    } else {
        menu.style = 'block';
    }
}
