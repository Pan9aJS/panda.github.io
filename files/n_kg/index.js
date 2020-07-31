window.addEventListener('load', () => {
    (() => {

        // DOM-элементы
        let input_newton = document.querySelector('#input_newton');
        let input_kg = document.querySelector('#input_kg');
        let btn_calc = document.querySelector('#calculate');
        let btn_toggle = document.querySelector('#btn-toggle');
        let input_boxes = document.querySelector('.input-boxes');


        // Функции для конвертирования
        let newtonToKg = val => val ? val / 9.80665 : 0;

        let kgToNewton = val => val ? val * 9.80665 : 0;



        let active = false;
        // направление flex - элементов
        let dir = [];


        let updateDir = () => {
            dir = (window.innerWidth <= 425) ? ['column', 'column-reverse'] : ['row', 'row-reverse'];
            input_boxes.style.flexDirection = dir[0];
        };
        updateDir();

        function replaceBoxes() {
            active ? active = false : active = true;
            if (active) {
                input_boxes.style.flexDirection = dir[1];
                input_kg.setAttribute('disabled', '');
                input_newton.removeAttribute('disabled');

                input_kg.setAttribute('placeholder', 'здесь будет вывод:');
                input_newton.setAttribute('placeholder', 'введите значение:');
                input_kg.value = '';
                input_newton.value = '';
            } else {
                input_boxes.style.flexDirection = dir[0];
                input_newton.setAttribute('disabled', '');
                input_kg.removeAttribute('disabled');

                input_kg.setAttribute('placeholder', 'введите значение:');
                input_newton.setAttribute('placeholder', 'здесь будет вывод:');
                input_newton.value = '';
                input_kg.value = '';
            }
        }


        window.addEventListener('resize', updateDir);



        btn_calc.addEventListener('click', () => {
            if (active) {
                let input = input_newton;
                let output = input_kg;
                output.value = newtonToKg(input ? input.value : 0);
            } else {
                let input = input_kg;
                let output = input_newton;
                output.value = kgToNewton(input ? input.value : 0);
            }
        });


        btn_toggle.addEventListener('click', () => {
            updateDir();
            replaceBoxes();
        });

    })();
});