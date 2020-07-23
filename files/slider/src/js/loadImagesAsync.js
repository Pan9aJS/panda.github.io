let arrayImages = [
    loadImageAsync("../slider/images/png/image_1.png"),
    loadImageAsync("../slider/images/png/image_2.png"),
    loadImageAsync("../slider/images/png/image_3.png"),
    loadImageAsync("../slider/images/png/image_4.png"),
    loadImageAsync("../slider/images/png/image_5.png"),
];


function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.alt = 'Slider Image';
        img.onload = resolve(img);
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
                overlay.classList.add('hide');
                setTimeout(() => overlay.remove(), 2900);
            }
        }
    });