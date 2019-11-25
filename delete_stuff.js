javascript: (function() {
    var style_text = '.highlighted_to_remove{background:red !important}';
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = style_text;
    } else {
        style.appendChild(document.createTextNode(style_text));
    }

    document.getElementsByTagName('head')[0].appendChild(style);

    var e = function(e) {
        if (e.keyCode == 27) {
            i();
        }
    };
    document.addEventListener("keydown", e);
    var t = function(e) {
        e.stopPropagation();
        this.classList.add("highlighted_to_remove");
        return false;
    };
    var n = function(e) {
        e.stopPropagation();
        this.classList.remove("highlighted_to_remove");
        return false;
    };
    var r = function(e) {
        this.parentNode.removeChild(this);
        i();
        e.preventDefault();
        e.stopPropagation();
        return false;
    };
    var i = function() {
        var i = 0;
        var s = document;

        while (s = document.body.getElementsByTagName("*").item(i++)) {
            s.removeEventListener("mouseover", t);
            s.removeEventListener("mouseout", n);
            s.removeEventListener("click", r);
            s.classList.remove("highlighted_to_remove")
        }

        document.removeEventListener("keydown", e);
    };
    var s = 0;
    var o = document;
    while (o = document.body.getElementsByTagName("*").item(s++)) {
        o.addEventListener("mouseover", t);
        o.addEventListener("mouseout", n);
        o.addEventListener("click", r);
    }
})();
