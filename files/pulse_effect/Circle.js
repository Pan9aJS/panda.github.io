class Circle {
    constructor({ size, color } = { size: '30', color: '#000' }) {
        this.size = parseInt(size);
        this.color = color;
    }

    create(posX, posY) {
        let elem = document.createElement('div');
        let elemWidth = this.size;
        let elemHeight = this.size;

        elem.style.width = elemWidth + 'px';
        elem.style.height = elemHeight + 'px';

        elem.style.top = (posY - (elemHeight / 2)) + 'px';
        elem.style.left = (posX - (elemHeight / 2)) + 'px';

        elem.style.backgroundColor = this.color;

        return elem;
    }
}