function main4() {
    var num = 153;
    var isNumberArmstrong = ChkArmstrong(num);
    if (isNumberArmstrong) {
        console.log("Is it Armstrong number");
    }
    else {
        console.log("Is it not Armstrong number");
    }
}
function ChkArmstrong(num) {
    var numTostr = num.toString();
    var power = numTostr.length;
    var sum = 0;
    for (var i = 0; i < power; ++i) {
        var currCharAsNum = +numTostr[i];
        sum += Math.pow(currCharAsNum, power);
    }
    if (sum === num) {
        return true;
    }
    return false;
}
main4();
