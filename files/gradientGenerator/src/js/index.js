onload = () => {
    (() => {
        // Присваиваем переменной randColor объект класса RandColor
        let randColor = new RandColor();
        // Присваиваем переменной gradient объект класса RandGradient
        let gradient = new RandGradient();

        // Присваиваем переменной body ссылку на объект body
        let body = document.querySelector('body');

        // изменяем фон body на рандомный цвет
        body.style.background = randColor.hex();

        // Присваиваем переменной range1 ссылку на объект с id = "btn_rand_color"
        let btn_rand_color = document.querySelector('#btn_rand_color');

        // Присваиваем переменной range2 ссылку на объект с id = "btn_rand_gradient"
        let btn_rand_gradient = document.querySelector('#btn_rand_gradient');

        // добавляем событие слушателя 'click'переменной btn_rand_color который будет изменять фон переменной body на рандомный цвет
        btn_rand_color.addEventListener('click', () => body.style.background = randColor.hex());

        // добавляем событие слушателя 'click'переменной btn_rand_gradient который будет изменять фон переменной body на рандомный градиент
        btn_rand_gradient.addEventListener('click', () => body.style.background = gradient.linear());
    })();
};







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