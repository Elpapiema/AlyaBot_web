document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('show');
});

document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/Elpapiema/AlyaBot_MD', '_blank');
});

document.getElementById('descargar').addEventListener('click', function() {
    window.open('https://github.com/Elpapiema/AlyaBot_MD/archive/refs/heads/main.zip', '_blank');
});
