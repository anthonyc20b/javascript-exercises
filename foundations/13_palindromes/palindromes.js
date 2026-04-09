const palindromes = function (string) {
// Below two lines first take input of string above and remove special characters, convert to lower case, then split
// the array into seperate letters, reverse the array, and join back the array to create a new string.
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
