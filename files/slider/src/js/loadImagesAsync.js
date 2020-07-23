let arrayImages = [
    loadImageAsync("../slider/images/jpg/image_1.jpg"),
    loadImageAsync("../slider/images/jpg/image_2.jpg"),
    loadImageAsync("../slider/images/jpg/image_3.jpg"),
    loadImageAsync("../slider/images/jpg/image_4.jpg"),
    loadImageAsync("../slider/images/jpg/image_5.jpg"),
];


function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.alt = 'Slider Image';
        img.onload = () => resolve(img);
        // setTimeout(() => { resolve(img); }, 5000);
    });
}

Promise.all(arrayImages)
    .then(elem => {
        let images = document.querySelector('.images');
        let btn_sliders = document.querySelector('.btn-sliders');


        for (let index = 0; index < elem.length; index++) {
            images.appendChild(elem[index]);
            let span = document.createElement('span');
            btn_sliders.appendChild(span);

            if (index >= (elem.length - 1)) {
                let overlay = document.querySelector('.overlay');
                overlay.remove();
                console.log('Загрузка завершена!');
                init();
            }
        }
    });