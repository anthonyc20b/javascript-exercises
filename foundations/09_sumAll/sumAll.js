const sumAll = function(min, max) {
    // The below two if statements check for non numbers and negatives. The below is self explanatory 
    // So therefore the above is checking both min and max if they are numbers, however we want them to be true if they 
    // Are not numbers, this is why we add the !.
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min <= 0 || max <= 0) return "ERROR";

    const start = Math.min(min, max);
    const end = Math.max(min, max);
    let sum = 0
    
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
