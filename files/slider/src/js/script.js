//
window.onload = () => {
    (() => {
        // все нужные DOM-элементы
        let DOM = {
            // кнопки слайдера 
            btn_left: document.querySelector('.left'),
            btn_right: document.querySelector('.right'),
            // кнопки для быстрого перехода к изображению
            sliders: document.querySelectorAll('.btn-sliders span'),
            // Все изображения внутри слайдера
            images: document.querySelectorAll('.content .images > img'),
        };


        // индекс активного изображения
        let indexValue = 1;

        // Показывает изображение
        showImage(indexValue);


        // обработчик клика для кнопок назад/вперёд. 
        DOM.btn_left.addEventListener('click', e => showImage(indexValue += -1));
        DOM.btn_right.addEventListener('click', e => showImage(indexValue += 1));

        // обработчик клика для кнопок быстрого перехода. 
        for (let i = 0; i < DOM.sliders.length; i++)
            DOM.sliders[i].addEventListener('click', e => showImage(indexValue = i + 1));



        function showImage(e) {
            // Итератор для циклов
            let i;
            // Если значение переданного параметра больше длины массива с изображениями, то в качестве активного изоборажения,устанавливаем изображение с индексом 1.
            if (e > DOM.images.length) indexValue = 1;
            // Если значение переданного параметра меньше 0, то в качестве активного изоборажения, устанавливаем последнее изображение из массива.  
            else if (e < 1) indexValue = DOM.images.length;


            for (i = 0; i < DOM.images.length; i++)
                DOM.images[i].style.display = "none";

            for (i = 0; i < DOM.sliders.length; i++)
                DOM.sliders[i].style.background = "rgba(225,225,225,0.1)";


            DOM.images[indexValue - 1].style.display = 'block';
            DOM.sliders[indexValue - 1].style.background = 'white';
        }
    })();
};