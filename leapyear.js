// function leapyear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const isyear = 2100;
// const result = leapyear(isyear);
// console.log(result);

function isleapyear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2400;
const result = isleapyear(myYear);
console.log(result);