function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const img = new Image();
        img.src = url;
        img.alt = '0';
        img.onload = resolve(img);
    });
}

Promise.all([
        loadImageAsync("../slider/images/image_1.png"),
        loadImageAsync("../slider/images/image_2.png"),
        loadImageAsync("../slider/images/image_3.png"),
        loadImageAsync("../slider/images/image_4.png"),
        loadImageAsync("../slider/images/image_5.png"),
    ])
    .then(elem => {
        let images = document.querySelector('.images');
        let btm_sliders = document.querySelector('.btm-sliders');


        for (let index = 0; index < elem.length; index++) {
            images.appendChild(elem[index]);
            btm_sliders.appendChild(document.createElement('span'));


            let overlay = document.querySelector('.overlay');
            overlay.classList.add('d-none');

        }
    });