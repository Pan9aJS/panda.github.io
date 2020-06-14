// Присваиваем переменной randColor объект класса RandColor
let randColor = new RandColor();
// Присваиваем переменной gradient объект класса RandGradient
let gradient = new RandGradient();

// Присваиваем переменной body ссылку на объект body
let body = document.querySelector('body');

// изменяем фон body на рандомный цвет
body.style.background = randColor.hex();

// Присваиваем переменной range1 ссылку на объект с id = "range1"
let range1 = document.querySelector('#range1');

// Присваиваем переменной range2 ссылку на объект с id = "range2"
let range2 = document.querySelector('#range2');

// добавляем событие слушателя 'change'переменной range1 который будет изменять фон переменной body на рандомный цвет
range1.addEventListener('change', () => body.style.background = randColor.hex());

// добавляем событие слушателя 'change'переменной range2 который будет изменять фон переменной body на рандомный градиент
range2.addEventListener('change', () => body.style.background = gradient.linear());

// добавляем событие слушателя 'wheel'переменной range1 который будет изменять фон переменной body на рандомный цвет и прокручивать ползунок.
range1.addEventListener('wheel', function(e) {
    // Если e.deltaY = 1
    if (Math.sign(e.deltaY) == 1) {
        // если цифровое значение range1 больше чем его минимальное значение
        if (+range1.value > range1.min) {
            body.style.background = gradient.hex();
            range1.value = '' + (+range1.value - 5);
        }
    }
    // Если e.deltaY не равно 1
    else {
        // если цифровое, максимальное значение range1 больше или равно его данному значение+1
        if (+range1.max >= +range1.value + 1) {
            body.style.background = gradient.hex();
            range1.value = '' + (+range1.value + 5);
        }
    }
});

// добавляем событие слушателя 'wheel'переменной range2 который будет изменять фон переменной body на рандомный цвет и прокручивать ползунок.
range2.addEventListener('wheel', function(e) {
    // Если e.deltaY = 1
    if (Math.sign(e.deltaY) == 1) {
        // если цифровое значение range2 больше чем его минимальное значение
        if (+range2.value > range2.min) {
            body.style.background = gradient.linear();
            range2.value = '' + (+range2.value - 5);
        }
    }
    // Если e.deltaY не равно 1
    else {
        // если цифровое, максимальное значение range2 больше или равно его данному значение+1
        if (+range2.max >= +range2.value + 1) {
            body.style.background = gradient.linear();
            range2.value = '' + (+range2.value + 5);
        }
    }
});







// console.log(randColor.rgb());
// console.log(randColor.rgba());
// console.log(randColor.hex()) // полная  версия например    #f3da19
//console.log(randColor.hex(1)); // сокращённая версия например #ba3

// let gradient = new RandGradient();
// console.log(gradient.linear());
// console.log(gradient.linear('45deg'));





// setInterval(() => {
//     document.querySelector('body')
//         .style.background = randColor.hex();
//     // .style.background = '-webkit-' + gradient.linear();
// }, 700);