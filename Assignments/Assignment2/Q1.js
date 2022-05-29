function main1() {
    var numArray = [23, 89, 6, 29, 56, 45, 77, 32];
    var maxNumber = Maximum(numArray);
    console.log("Maximum number is " + maxNumber);
}
function Maximum(numArray) {
    if (numArray.length === 0) {
        return -1;
    }
    var currMaxNumber = numArray[0];
    numArray.forEach(function (num) {
        if (num > currMaxNumber) {
            currMaxNumber = num;
        }
    });
    return currMaxNumber;
}
main1();
