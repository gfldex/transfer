document.querySelectorAll("input[type=checkbox]").forEach((e) => { 
    e.previousSibling.addEventListener("click", (ev) => {
        e.click();
    })
});

function id(){ 
    var targets = Array.apply(null, arguments).map((name) => { return document.getElementById(name) });

    function list_proxy(targets) {
        return new Proxy({}, {
            get: (target, name) => {
                if (name == "__dump__") {
                    return targets;
                }
                return list_proxy(targets.map((target) => { return target[name] }));
            },
            set: (target, name, value) => {
                targets.forEach((target) => { target[name] = value; });
                return value;
            },
            apply: (target, that, args) => {
                return targets.map((target) => { return target.apply(that, args) });
            }
        });
    }

    return list_proxy(targets);
}

