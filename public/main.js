const topMenu = document.getElementById('ct-top-menu');
const toggleTopMenu = document.getElementById('ct-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if(toggleTopMenu.contains(e.target)){
        // click vào biểu tượng menu
        if (topMenu.classList.contains('hidden')) {
            topMenu.classList.remove('hidden');
            topMenu.classList.add('ct-top-menu-expanded');
            topMenu.classList.remove('ct-top-menu-collapsed');
        } else {
            topMenu.classList.remove('ct-top-menu-expanded');
            topMenu.classList.add('ct-top-menu-collapsed');
            setTimeout(() => {
                topMenu.classList.add('hidden');
            }, 400); // Chờ cho animation kết thúc (0.4s)
        }
    } else {
        // click bên ngoài menu
        if (topMenu.classList.contains('ct-top-menu-expanded')) {
            topMenu.classList.remove('ct-top-menu-expanded');
            topMenu.classList.add('ct-top-menu-collapsed');
            setTimeout(() => {
                topMenu.classList.add('hidden');
            }, 400); // Chờ cho animation kết thúc (0.4s)
        }
    }
});


window.onload = () => {
    var canvas = document.getElementById('logoCanvas');

    var ctx = canvas.getContext('2d');
    

    ctx.font = "bold 55px Pacifico";
    ctx.fillStyle = "#A25F4B";
    ctx.textAlign = "center";
    ctx.fillText('CoffeeStyle', 150 , 65);
}