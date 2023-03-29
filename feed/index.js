function openNav() {
    console.log('clicked');
    alert('clicked');
    let menu = document.getElementById('mobile-menu');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}



    

window.addEventListener('load', (event) => {
    let mobileNav = document.getElementById('mobile-nav');
    console.log(mobileNav);
    mobileNav.addEventListener('click', function() { console.log('clicked'); });
})