window.onload = function() {
    (async function() {
        let module = await
        import ('./dynamicmodule.js');
        let m = new module.default;
        m.sayHi();
    })();
};