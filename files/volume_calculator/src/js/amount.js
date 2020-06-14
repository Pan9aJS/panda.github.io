// Элемент с id = calculate. Туда будем кликать. placeholder = ""
let calc = document.querySelector('#calculate');
// Элемент с id = value_cm. Туда будем выводить ответ в см^3.
let value_cm = document.querySelector('#value_cm');
// Элемент с id = value_liter. Туда будем выводить ответ в литрах.
let value_liter = document.querySelector('#value_liter');
// Элемент с id = value_tonne. Туда будем выводить ответ в тоннах.
let value_tonne = document.querySelector('#value_tonne');
// добавить слушателя click который при каждом клике будет вызывать функцию.
calc.addEventListener('click', function() {
    //  a - длина прямоугольника
    let a = +document.querySelector('#value_a').value;
    //   b - ширина прямоугольника
    let b = +document.querySelector('#value_b').value;
    // h - высота прямоугольника
    let h = +document.querySelector('#value_h').value;
    // s - площадь прямоугольника
    let s = a * b;
    // v - объём прямоугольника
    let v = s * h;

    let init = function() {
        let result = v;
        // конвентировать значения
        let sm = result;
        let liter = result / 1000;
        let tonne = liter / 1000;

        // Убрать числа после запятой
        sm = sm.toFixed();
        liter = liter.toFixed(4);
        tonne = tonne.toFixed(5);

        // присвоит значение в сантиметрах к тексту переменной value_cm 
        value_cm.innerText = sm;
        // присвоит значение в литрах к тексту переменной value_cm 
        value_liter.innerText = liter;
        // присвоит значение в литрах к тексту переменной value_cm 
        value_tonne.innerText = tonne;

        // присваиваем переменной ссылку на родительский элемент
        let parent = value_cm.parentElement;
        // добавляем аттрибут title со значением result
        parent.title = `${result}см^3 = ${result}мл.`;
    };


    if (a && b && h) init();
    else init();
});