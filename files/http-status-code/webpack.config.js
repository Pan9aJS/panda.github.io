/////////////////


const path = require('path');


module.exports = {
    // Предоставление опции mode конфигурации говорит webpack использовать его встроенные оптимизации соответственно. string = 'production': 'none' | 'development' | 'production'
    mode: 'development',

    // входной файл. (файл который будет преобразован)
    entry: './assets/js/getData',

    // результат преобразования входного файла.
    output: {
        // путь, где будет размещён новый (или обновлённый) файл.
        path: __dirname + '/public/js',
        // имя для файла.
        filename: "build.js",
        // переменная для хранения модулей
        library: 'response'
    }
};