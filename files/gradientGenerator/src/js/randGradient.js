// Создаём класс RandGradient который расширяется от класса RandColor

class RandGradient extends RandColor {
    constructor() {
        //Ключевое слово super используется для вызова функций, принадлежащих родителю объекта (В данном случае родитель RandColor)
        super();
    }


    // метод linear принимает градусы в качестве параметра (15deg)
    // если параметр не указан, значение параметра будет рандомным 
    // возвращает линейный градиент пример: 'linear-gradient(45deg, red, black)'

    linear(deg = 0) {
        //  this.rgba это метод унаследованный от класс RandColor.block
        // this.rgba() - возвращает rgba() с рандомными значениями
        // this.rgb() - возвращает rgb() с рандомными значениями
        // this.hex() - возвращает hex() с рандомными значениями
        let gradients = [this.hex(), this.hex()];

        // если градус указан 
        if (deg) return `linear-gradient(${deg}, ${gradients})`;
        // если градус не указан. Значение рандомное.
        else return `linear-gradient(${Math.floor(Math.random()*350)}deg, ${gradients})`;
    }
}