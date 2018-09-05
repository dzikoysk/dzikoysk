function PandaRequest(requests) {
    this.requests = requests;
    this.onLoadListeners = [];
}

PandaRequest.prototype.get = function (url, onLoad) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function () {
        onLoad(req.responseText);
    };
    req.send(null);
};

PandaRequest.prototype.loadContent = function(element, url) {
    var instance = this;
    this.get(url, function (response) {
        element.html(response);
        --instance.requests;

        if (instance.requests <= 0) {
            instance.onLoadListeners.forEach(function (listener) {
                listener();
            });
        }
    });
};

PandaRequest.prototype.addOnLoadListener = function(listener) {
    this.onLoadListeners.push(listener);
}