const palindromes = function (string) {

    let caseSpecific = string.replace(/[^a-z0-9]/gi, "").toLowerCase();
    let newString = caseSpecific.split("").reverse().join("");

    if (newString === caseSpecific) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
