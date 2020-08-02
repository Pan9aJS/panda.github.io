window.onload = () => {

    (() => {
        let { log } = console;

        // Единица измерения
        let unit = 'C';
        // Температура
        let t = 41;
        // Объект Degree
        let degree = new Degree(unit, t);


        log(`${t}°${unit} = ${degree.Fahrenheit()}°F`);

        log(`${t}°${unit} = ${degree.Celsius()}°C`);

        log(`${t}°${unit} = ${degree.Kelvins()}°K`);

    })();
};