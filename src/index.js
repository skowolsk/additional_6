module.exports = function zeros(expression) {
    let str = expression.split('*');
    let fiveNum = 0;
    let twoNum = 0; 
    let tenNum = 0;

    for(let i = 0; i < str.length; i++) {
        let num = parseInt(str[i]);
        let storage = [];
        let temp;

        if(str[i].includes('!!'))
            temp = 2;
        else temp = 1;

        for(let n = num; n > 0; n -= temp) {
            storage.push(n);
        }


        fiveNum += zero(storage, 5);
        twoNum += zero(storage, 2);
        tenNum += zero(storage, 10);
    }
    return tenNum + Math.min(twoNum, fiveNum);
    function zero(storage, n) {
        let zero = 0;
        for(let i = 0; i < storage.length; i++) {
            if (n === 10) {
                for (;;) {
                    if (storage[i] % n === 0) {
                        zero++;
                        storage[i] = storage[i] / n;
                    } else break;
                }
            } else {
                for (;;) {
                    if ((storage[i] % n === 0) && (storage[i] % 10 !== 0)) {
                        zero++;
                        storage[i] = storage[i] / n;
                        continue;
                    }
                    if (storage[i] === 50) {
                        zero++;
                        storage[i] = storage[i] / n;
                    }
                    else break;
                }
            }
        }
        return zero;
    }
};


