var hash = window.location.hash;
var tabPane = q('.tab-pane');
var defaultTab;

if (hash == null || hash == "") {
    defaultTab = 'about';
}
else {
    defaultTab = hash.substring(1, hash.length);
}

tabPane.setAttribute('default', defaultTab);

var TabPane = (function () {
    function TabPane(pane, def) {
        var fn, i, len, name, ref, tab;
        this.pane = pane;
        def = (this.pane.attr('default')) || def || 0;
        this.content = {};
        this.tabs = {};
        ref = this.pane.qq('.tab');
        fn = (function (_this) {
            return function (name) {
                return tab.on('click', function () {
                    return _this.open(name);
                });
            };
        })(this);

        for (i = 0, len = ref.length; i < len; i++) {
            tab = ref[i];
            name = tab.attr('name');
            this.tabs[name] = tab;
            this.content[name] = this.pane.q('.tab-content.tab-' + name);
            fn(name);
        }

        this.open(def, true);
    }

    TabPane.prototype.open = function (name, disableOpacityManipulation) {
        if (this.currentTab != null) {
            this.currentTab.classList.remove('open');
        }

        if (this.current != null) {
            var current = this.current;
            setTimeout(function () {
                current.classList.remove('open');
            }, 250);

            if (!disableOpacityManipulation) {
                fx.animate(this.current, 'opacity', 0, 200);
            }
        }

        this.current = this.content[name];
        this.currentTab = this.tabs[name];
        this.currentTab.className += ' open';

        return setTimeout((function (_this) {
            return function () {
                if (!disableOpacityManipulation) {
                    fx.animate(_this.current, 'opacity', 1, 600);
                }
                return _this.current.className += ' open';
            };
        })(this), 250);
    };

    return TabPane;
})();

new TabPane(tabPane);