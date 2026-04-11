const findTheOldest = function(people) {
    let oldest = people.sort(function(a, b) {
        if (a.yearOfDeath === undefined){
           const currentYear = new Date().getFullYear();
           a.yearOfDeath = currentYear;
        } else if (b.yearOfDeath === undefined){
            const currentYear = new Date().getFullYear();
            b.yearOfDeath = currentYear;
        }

        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        if (lastGuy > nextGuy){
            return -1;
        } else {
            return 1;
        }
    })
    return oldest[0];
};


// const oldest = people.sort(function(a, b) {
//       const lastGuy = a.passed - a.year;
//       const nextGuy = b.passed - b.year;
//       if (lastGuy > nextGuy){
//         return -1;
//       } else {
//         return 1;
//       }
//     });
// Do not edit below this line
module.exports = findTheOldest;
