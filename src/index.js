module.exports = function toReadable(number) {
    let str = number.toString();

    function switchTo9(str, i) {
        switch (str[i]) {
            case '0': return 'zero';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
        }
    };

    function switchTo20(str, i) {
        switch (str[i]) {
            case '0': return 'ten';
            case '1': return 'eleven';
            case '2': return 'twelve';
            case '3': return 'thirteen';
            case '5': return 'fifteen';
            case '8': return 'eighteen';
            default: return `${switchTo9(str, str.length - 1)}teen`;
        }
    };

    function switchTo99(str, i) {
        switch (str[i]) {
            case '2': return `twenty`;
            case '3': return `thirty`;
            case '4': return 'forty';
            case '5': return `fifty`;
            case '8': return `eighty`;
            default: return `${switchTo9(str, str.length - 2)}ty`;
        }
    };

    if (str.length === 1) {
        return switchTo9(str, 0);
    };

    if (str.length === 2 && str[0] === '1') {
        return switchTo20(str, 1);
    };

    if (str.length === 2 && str[0] !== '1') {
        if (number % 10 === 0) {
            return switchTo99(str, 0);
        } else {
        return `${switchTo99(str, 0)} ${switchTo9(str, 1)}`;
    };
}

    if (str.length === 3) {
        if (number % 100 === 0) {
            return `${switchTo9(str, 0)} hundred`;
        }
        if (number % 100 < 10 && number % 100 !== 0) {
            return `${switchTo9(str, 0)} hundred ${switchTo9(str, 2)}`;
        }
        if (number % 100 < 20 && number % 100 >= 10) {
            return `${switchTo9(str, 0)} hundred ${switchTo20(str, 2)}`;
        }
        if (number % 100 >= 20 ) {
            if (number % 10 === 0) {
            return `${switchTo9(str, 0)} hundred ${switchTo99(str, 1)}`;
        } else {
            return `${switchTo9(str, 0)} hundred ${switchTo99(str, 1)} ${switchTo9(str, 2)}`;
        }
    };
}
};
