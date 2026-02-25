const removeFromArray = function(oldArray, ...valuesToRemove) {
    return oldArray.filter(item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
