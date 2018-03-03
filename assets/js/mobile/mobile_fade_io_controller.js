window.onload = function() {
    animateBackground();
    setTimeout(animateNav, 800);
    setTimeout(animateOpened, 1600)
    setTimeout(animateFooter, 2400);
}

window.onbeforeunload = function () {
    fx.animate(q('body'), 'opacity', 0, 400);
}

function animateBackground() {
    var contentElement = q('header');
    fx.animate(contentElement, 'opacity', 1, 800);
}

function animateNav() {
    var panelLeft = q('nav');
    fx.animate(panelLeft, 'opacity', 1, 800);
}

function animateOpened() {
    var opened = q('.tab-content.open');
    fx.animate(opened, 'opacity', 1, 800);
}

function animateFooter() {
    var footer = q('footer');
    fx.animate(footer, 'opacity', 0.5, 1000);
}

