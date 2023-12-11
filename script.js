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