//
window.onload = () => {
    (() => {
        let indexValue = 1;

        showImage(indexValue);

        const left = document.querySelector('.left');
        const right = document.querySelector('.right');


        left.addEventListener('click', e => showImage(indexValue += -1));
        right.addEventListener('click', e => showImage(indexValue += 1));


        const sliders = document.querySelectorAll('.btm-sliders span');

        for (let i = 0; i < sliders.length; i++)
            sliders[i].addEventListener('click', e => showImage(indexValue = i + 1));





        function showImage(e) {
            let i;

            const img = document.querySelectorAll('img');
            const sliders = document.querySelectorAll('.btm-sliders span');

            if (e > img.length) indexValue = 1;
            else if (e < 1) indexValue = img.length;

            for (i = 0; i < img.length; i++)
                img[i].style.display = "none";

            for (i = 0; i < sliders.length; i++)
                sliders[i].style.background = "rgba(225,225,225,0.1)";

            img[indexValue - 1].style.display = 'block';
            sliders[indexValue - 1].style.background = 'white';
        }
    })();

};