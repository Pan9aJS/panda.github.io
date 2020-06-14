///////////////////////////////////////////

//  Создаём класс RandColor
class RandColor {
    constructor() {}

    // Создаём метод rgb который возвращает rgb(); с рандомными значениями.
    rgb() {
        let color = [
            Math.floor(Math.random() * 225),
            Math.floor(Math.random() * 225),
            Math.floor(Math.random() * 225)
        ];
        return `rgb(${color})`;
    }

    // Создаём метод rgba который возвращает rgba(); с рандомными значениями.
    rgba() {
        let color = [
            Math.floor(Math.random() * 225),
            Math.floor(Math.random() * 225),
            Math.floor(Math.random() * 225),
            (Math.random() * (1 - 0.5) + 0.5).toFixed(1)
        ];
        return `rgba(${color})`;
    }

    // Создаём hex  который возвращает #hex-цвет  с рандомными значениями.
    hex(reduce = 0) {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 'a', 'b', 'c', 'd', 'e', 'f'];

        let randValue = (count) => {
            let result = '#';
            for (let i = 0; i < count; i++)
                result += arr[Math.floor(Math.random() * arr.length)];
            return result;
        }

        if (reduce) return randValue(3);
        else return randValue(6);
    }
}


// Присваиваем переменной новый объект класса.
// let randColor = new RandColor();

// console.log(randColor.rgb());
// console.log(randColor.rgba());
// console.log(randColor.hex());