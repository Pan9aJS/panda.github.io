/////////
/////////
/////////
let init = function(input, button, output, callback) {
    let btn_convert = document.querySelector(button);
    btn_convert.addEventListener('click', function() {
        let input_binary = document.querySelector(input);
        if (input_binary.value != '') {
            document.querySelector(output)
                .innerText = callback(input_binary.value);
        }
    });
};

init('#input-binary', '#btn-convert', 'output', (value) => {
    let convert1 = new ConvertFromBinaryToDecimal(value);
    // convert1.test();
    return convert1.getResult();
});