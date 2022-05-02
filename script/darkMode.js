var darkModeBtn = document.getElementById('btn-darkmode');
var lupa = document.getElementById('lupa');

darkModeBtn.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        window.localStorage.setItem('darkMode', 'disabled');
        darkModeBtn.textContent = 'MODO NOTURNO';
        lupa.src = './img/lupa.png';
    } else {
        document.body.classList.add('dark-mode');
        window.localStorage.setItem('darkMode', 'enabled');
        darkModeBtn.textContent = 'MODO DIURNO';
        lupa.src = './img/lupa2.png';
    }
});

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeBtn.textContent = 'MODO DIURNO';
    lupa.src = './img/lupa2.png';
}