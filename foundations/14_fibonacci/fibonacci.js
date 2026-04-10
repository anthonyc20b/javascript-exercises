const fibonacci = function(n) {
    newInt = parseInt(n);

    if (newInt <= -1) {
        return "OOPS";
    }
    if (newInt === 0) {
        return 0;
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 0; i < newInt - 1; i++) {
        const current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    };
    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
