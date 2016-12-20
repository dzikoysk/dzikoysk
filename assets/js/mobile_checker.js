check()
setInterval(check, 250);

var red = false;

function check() {
    if (red) {
        return;
    }

    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    if (w <= 800) {
        red = true;
        window.location = "https://dzikoysk.net/mobile/";
    }
}