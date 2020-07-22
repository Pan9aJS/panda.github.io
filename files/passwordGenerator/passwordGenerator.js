// Создаём класс Password 
class Password {
    constructor() {}

    // Создаём метод класса generate который принимает в качестве параметра размер пароля.
    generate(length) {
        // Массив с числами [0-9]
        let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        // Строка символов 
        let symbols = '_,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z,_,$';
        //Массив который состоит из массива arrNumbers объединённого с новым массивом который создан из symbols через метод split
        let combinedArray = arrNumbers.concat(symbols.split(','));

        // Принимает параметры: длина, массив.
        // Возвращает новый массив состоящий из случайных значений взятых из переданного в качестве параметра массива.
        let fillArrayRandomValues = (count, arr) => {
            let newArr = [];
            for (let i = 0; i < count; i++) {
                let rand = Math.floor(Math.random() * arr.length);
                newArr.push(arr[rand]);
            }
            return newArr;
        };

        // Принимает массив, возвращает строку убрав запятные
        let arrToString = arr => ('' + arr).replace(/,/g, '');


        let password = arrToString(
            fillArrayRandomValues(
                length,
                combinedArray
            )
        );
        return password;
    }

    status(password) {
        let info = {
            length: 0,
            hasNum: 0,
            hasUpperCase: 0
        };

        let hasUpperCase = str => str.match(/[A-Z]/);
        let hasNumber = str => str.match(/[0-9]/);

        info.length = !!(password.length >= 8);
        info.hasNum = !!hasNumber(password);
        info.hasUpperCase = !!hasUpperCase(password);

        let max = Object.keys(info).length;

        let thePower = () => {
            let count = 0;
            for (let i in info) {
                if (info[i]) count++;
            }
            return `password strength: ${count} out of ${max}`;
        }

        return thePower();
    }
}



// let password = new Password();

// let pswrd1 = password.generate(7);
// console.log(pswrd1);

// let pswrd2 = password.generate(27);
// console.log(pswrd2);

// console.log(password.status(pswrd1));
// console.log(password.status(pswrd2));