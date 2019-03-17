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

    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width > 800) {
        red = true;
        window.location = "https://dzikoysk.net/";
    }
}