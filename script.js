//стрілочка
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var topButton = document.getElementById("topButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //для інших браузерів
}


//кнопочка переключає тему
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const icon = document.getElementById('icon');
    const body = document.body;
    const levelBlock = document.querySelector('.level-block');
    const contacts = document.querySelector('.contacts');
    const striloczka = document.getElementById('striloczka');
    const c = document.getElementById('c');
    const facebook = document.getElementById('facebook');
    const instagram = document.getElementById('instagram');
    const telegram = document.getElementById('telegram');

    themeToggle.addEventListener('click', function () {
        const root = document.documentElement;

        if (getComputedStyle(root).getPropertyValue('--background-color') === 'rgb(217, 217, 217)') {
            root.style.setProperty('--background-color', 'rgb(30, 30, 30)');
            root.style.setProperty('--top-background-color', 'rgb(217, 217, 217)');
            root.style.setProperty('--text-color1', '#ffffff');
            root.style.setProperty('--text-color2', '#000000');
            root.style.setProperty('--dark', ' rgb(91, 30, 27)');

            icon.src = 'images/icon_2.png';
            body.classList.remove('main-images');
            body.classList.add('alternative-images');

            levelBlock.classList.remove('back2');
            levelBlock.classList.toggle('alt-back2');

            contacts.classList.remove('back3');
            contacts.classList.toggle('alt-back3');

            striloczka.src = 'images/down-arrow.png';

            c.src = 'images/c2.png';

            facebook.src = 'images/facebook2.png';

            instagram.src = 'images/instagram2.png';

            telegram.src = 'images/telegram2.png';
        } else {
            root.style.setProperty('--background-color', 'rgb(217, 217, 217)');
            root.style.setProperty('--top-background-color', 'rgb(30, 30, 30)');
            root.style.setProperty('--text-color1', '#000000');
            root.style.setProperty('--text-color2', '#ffffff');
            root.style.setProperty('--dark', ' rgb(30, 30, 30)');

            icon.src = 'images/icon.png';
            body.classList.remove('alternative-images');
            body.classList.add('main-images');

            levelBlock.classList.remove('alt-back2');
            levelBlock.classList.toggle('back2');

            contacts.classList.remove('back3');
            contacts.classList.toggle('alt-back3');

            striloczka.src = 'images/striloczka.png';

            c.src = 'images/c.png';

            facebook.src = 'images/facebook.png';

            instagram.src = 'images/instagram.png';

            telegram.src = 'images/telegram.png';
        }
    });
});


function toggleNav() {
    var overlay = document.getElementById('overlay');
    var navList = document.querySelector('.nav-list');

    overlay.style.display = 'block';
    navList.classList.add('open');
}

function closeNav() {
    var overlay = document.getElementById('overlay');
    var navList = document.querySelector('.nav-list');

    overlay.style.display = 'none';
    navList.classList.remove('open');
}
