var detector = new MobileDetect(window.navigator.userAgent);
var red = false;

if (!(detector.mobile() != null && detector.userAgent() == "Firefox")) {
    check();
    setInterval(check, 250);
}

function check() {
    if (red) {
        return;
    }

    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    if (w > 800) {
        red = true;
        window.location = "https://dzikoysk.net/";
    }
}