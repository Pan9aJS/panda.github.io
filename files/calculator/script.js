(() => {

    let inputs = document.querySelectorAll('.input-windows>input');
    let buttons = document.querySelectorAll('.container-buttons > .btn');

    setListenerForButtons();

    let printValue = (val) => inputs[1].value += val;
    let clear = (inp) => (inp[0].value = '', inp[1].value = '');
    let backspace = () => inputs[1].value = (inputs[1].value.slice(0, -1));
    let calculate = (val) => (inputs[0].value = val, inputs[1].value = eval(backspace(val)));

    function setListenerForButtons() {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                switch (buttons[i].dataset.value) {
                    case 'clear':
                        clear(inputs);
                        break;
                    case '=':
                        printValue(buttons[i].dataset.value);
                        calculate(inputs[1].value);
                        break;
                    case 'backspace':
                        backspace(inputs[1].value);
                        break;
                    default:
                        printValue(buttons[i].dataset.value);
                        break;
                }
            });
        }
    }

    function setThemes() {
        let calculator = document.querySelector('.calculator');
        console.log(calculator);
        let themes = [
            { background: 'rgb(20, 158, 178)', color: '#fff' },
            { background: 'rgb(176, 178, 20)', color: '#fff700' },
            { background: 'rgb(81, 178, 20)', color: '#fff700' },
            { background: 'rgb(255, 0, 0)', color: 'white' },

        ];
        let func = (styles = {}) => {
            for (let i in styles) {
                calculator.style[i] = styles[i];

                // console.log(i + ': ' + styles[i]);
            }
        }
        let buttons = document.querySelectorAll('.theme-switch div>button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                func(themes[i]);
            });
        }
    }
    setThemes();

})();