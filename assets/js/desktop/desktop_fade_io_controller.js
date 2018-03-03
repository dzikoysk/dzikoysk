window.onload = function() {
    animateBackground();
    setTimeout(animateLeft, 800);
    setTimeout(animateRight, 1200);
    setTimeout(animateOpened, 2000)
    setTimeout(animateFooter, 2000);
}

window.onbeforeunload = function () {
    fx.animate(q('body'), 'opacity', 0, 400);
}

function animateBackground() {
    var contentElement = q('.particles-js-canvas-el');
    fx.animate(contentElement, 'opacity', 0.45, 800);
}

function animateLeft() {
    var panelLeft = q('.left');
    fx.animate(panelLeft, 'opacity', 1, 800);
}

function animateRight() {
    var panelRight = q('.right');
    fx.animate(panelRight, 'opacity', 1, 800);
}

function animateOpened() {
    var opened = q('.tab-content.open');
    fx.animate(opened, 'opacity', 1, 800);
}

function animateFooter() {
    var footer = q('footer');
    fx.animate(footer, 'opacity', 0.5, 1000);
}

