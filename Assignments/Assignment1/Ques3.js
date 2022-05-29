/*Display factors*/
function main3() {
    DisplayFactors(20);
}
function DisplayFactors(num) {
    var factorsStringForDisplaying = '';
    for (var i = 1; i <= num / 2; ++i) {
        if (num % i === 0) {
            factorsStringForDisplaying += i.toString() + "\t";
        }
    }
    console.log(factorsStringForDisplaying);
}
main3();
