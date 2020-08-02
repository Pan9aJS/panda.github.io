class Degree {
    constructor(unit = 'C', t = 0) {
        this.unit = unit;
        this.t = t;
    }



    Celsius() {
        if (this.unit == 'F')
            return ((this.t - 32) * (5 / 9));

        else if (this.unit == 'K')
            return this.t - 273.15;

        else if (this.unit == 'C')
            return this.t;

        else this._error();
    }


    Kelvins() {
        if (this.unit == 'F')
            return ((this.t + 459.67) * (5 / 9));

        else if (this.unit == 'K')
            return this.t;

        else if (this.unit == 'C')
            return this.t + 273.15;

        else this._error();
    }


    Fahrenheit() {
        if (this.unit == 'F')
            return this.t;

        else if (this.unit == 'K')
            return this.t - 273.15;

        else if (this.unit == 'C')
            return (this.t * (9 / 5)) + 32;

        else this._error();
    }


    getAll() {
        return {
            'F': this.Fahrenheit(),
            'C': this.Celsius(),
            'K': this.Kelvins()
        };
    }


    _error() {
        let has = ['F', 'K', 'C'].includes(this.unit);
        if (!has)
            throw new Error('Parameters were passed incorrectly.\nExample: new Degree(\'C\', 1);');
    }



}


// log(degree.Celsius());

// log(degree.Kelvins());

// log(degree.Fahrenheit());

// log(degree.getAll());


// log(parseInt('12k'));