class ConvertFromBinaryToDecimal {
    constructor(value) {
        this.value = value;
    }

    isBinary(value) {
        for (let i in value) {
            if (value[i] !== '0' && value[i] !== '1') {
                console.log('Is not binary!');
                return false;
            }
        }
        return value;
    }

    convertFromBinary(binary) {
        let value = this.isBinary(binary);
        let length = value.length;
        let power = (length - 1) >= 0 ? length - 1 : 0;
        let output = 0;

        if (value) {
            for (let i in value)
                output += ((+value[i]) * (2 ** power--));
        }
        return output;
    }

    test() {
        console.log(this.convertFromBinary('' + this.value));
    }

    getResult() {
        return this.convertFromBinary('' + this.value);
    }
}

// export default ConvertFromBinaryToDecimal;