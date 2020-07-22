(() => {

    let generate = document.getElementById("generate");
    let output = document.getElementById('output');
    let input = document.getElementById('input_pswrd_length');


    let gen = () => {
        let length = input.value;
        let password = new Password().generate(length);
        output.innerHTML = password;
    };


    generate.addEventListener('click', gen);

    onkeydown = e => e.keyCode == 13 ? gen() : '';

})();