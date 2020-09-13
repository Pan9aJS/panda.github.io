////////////////////

// Инпут, для получения пользовательского ввода.
let status_code_input = document.querySelector('#status-code-input');
// Кнопка поиска 
let status_code_search = document.querySelector('#status-code-search');
// Контейнер для размещения блоков.
let OutputContainerData = document.querySelector('#data');







(async function() {
    // response - это глобальная переменная которая создана через webpack
    let bigData = response.GetData();
    // Передаёт в функцию весь объект полученный через fetch запрос
    bigData.then(data => init(data));
})();



class Template {
    constructor(data) {
        this.data = data;
    }
}



class Print {
    constructor(data) {
        this.data = data;
    }

    html() {
        return `
            <div class="response-code-block">
                <p id="response-code">Код ответа:</p>
                <span id="response-code-value">${this.data.response}</span>
            </div>
            <div class="response-code-class-block">
                <p id="response-code-class">Класс:</p>
                <span id="response-code-class-value">${this.data.class}</span>
            </div>
            <div class="meaning-block">
                    <p id="meaning-code">Значение:</p>
                    <span id="meaning-code-value">${this.data.meaning}</span>
            </div>
            <div class="description-block">
                <p id="description-code">Описание:</p>
                <span id="description-code-value">${this.data.description}</span>
        </div>`;
    }
}

function init(data) {
    // data - это объект со всеми кодами.
    // console.log('data:', data); 

    if (!data) throw new Error('Объект пуст!');



    status_code_search.addEventListener('click', () => {

        // Берём значение из инпута.
        let statusCode = status_code_input.value;

        // Проверяем, проходит ли переданное значение, в колбэк переданное условие. (И возвращаем boolean)
        let desiredLength = !!(statusCode.length == 3);

        if (desiredLength) {
            // Проверяем, есть ли необходимое свойство в объекте. 
            let hasProperty = checkTheValue(data[statusCode], val => val ? val : false);
            if (hasProperty) {
                removeChilds(OutputContainerData);
                generateOutput(data[statusCode]);
            } else {
                console.log(`Код ошибки '${statusCode}', не существует либо автор забыл добавить.`);
            }
        } else {
            console.log('Длина кода не должна быть меньше 3!');
        }
    });




}


// Генерирование и вывод
function generateOutput(obj) {
    let html = new Print(obj).html();

    append(html, document.querySelector('#data'));
}

// Присоединение
function append(el, parent) {
    parent.insertAdjacentHTML('afterbegin', el);
}


// удаляет все дочерние элементы переданного элемента.
function removeChilds(el) {
    while (el.hasChildNodes())
        el.removeChild(el.firstChild);
}


// Проверяем, проходит ли переданное значение, в колбэк переданное условие. 
function checkTheValue(num, callback) {
    return callback(num);
}