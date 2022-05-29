function main5() {
    var strToCheck = "Pune Kothrud Marvellous InfoSystems";
    var hasMarvellous = ChkString(strToCheck);
    if (hasMarvellous) {
        console.log("String contains Marvellous in it");
    }
    else {
        console.log("String does not contain Marvellous in it");
    }
}
function ChkString(strToCheck) {
    var arrayOfSplitString = strToCheck.split(" ");
    var hasMarvellous = false;
    arrayOfSplitString.forEach(function (s) {
        if (s === "Marvellous") {
            hasMarvellous = true;
        }
    });
    return hasMarvellous;
}
main5();
