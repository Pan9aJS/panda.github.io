window.addEventListener('load', () => init());

function init() {
    let box = document.querySelector('#box');

    box.addEventListener('click', e => {
        let size = 150;
        let color = `rgb(${RGB()})`;
        let posX = e.clientX;
        let posY = e.clientY;

        let circle = new Circle({ size, color });

        let elem = circle.create(posX, posY);

        elem.classList.add('circle');

        // Разместить элемент 
        deploy(box, elem);

        // миллисекунды
        let ms = 1000;
        removeElem(elem, ms);
    });


    function removeElem(elem, ms) {
        setTimeout(() => elem.remove(), ms);
    }

    function deploy(parent, elem) {
        parent.insertAdjacentElement('beforeend', elem);
    }

    function RGB() {
        let r = Math.floor(Math.random() * 225);
        let g = Math.floor(Math.random() * 225);
        let b = Math.floor(Math.random() * 225);

        return [r, g, b];
    }

}