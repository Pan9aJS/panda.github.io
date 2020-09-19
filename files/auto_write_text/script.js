//////////////////////// 

// элемент. Родитель текста.
let element = document.querySelector('#text');
// текст
// let text = 'Hello buddy! What are you doing?';
let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.   ';




async function autoWriteText(data = { parent: 'body', text: 'Hello World!', ms: 150 }) {
    let { parent, text, ms } = data;
    parent = document.querySelector(parent);
    let end = 1;


    let forwards = async() => {
        for (let item of text) {
            await promiseResolve(text, ms)
                .then(text => parent.innerText = text.slice(0, end++));
        }
        return 1;
    }


    let backwards = async() => {
        for (let item of text) {
            await promiseResolve(text, ms)
                .then(text => parent.innerText = text.slice(0, --end));
        }
        parent.innerText = '';
        return 1;
    }

    //  асинхронная функция которая принимает две функции и вызывает по очереди
    (async(f, b) => (await f(), await b()))(forwards, backwards);

    console.log('DONE!');
}



async function promiseResolve(item, ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(item), ms);
    });
}




let data = {
    parent: '#text',
    text: text,
    ms: 100
};

autoWriteText(data);










// (() => {
//     let text = document.querySelector('#inp_text');
//     let ms = document.querySelector('#inp_ms');

//     document.querySelector('#start')
//         .addEventListener('click', function() {
//             if (text.value) {
//                 autoWriteText({
//                     parent: '#text',
//                     text: text.value,
//                     ms: +ms.value || 100
//                 });
//             }
//         });
// })();