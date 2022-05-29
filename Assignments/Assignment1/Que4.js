function main4() {
    var isPrime = ChkPrime(11);
    if (isPrime) {
        console.log("It is prime number");
    }
    else {
        console.log("Not a prime");
    }
}
function ChkPrime(numToCheck) {
    for (var i = 2; i <= numToCheck / 2; ++i) {
        if (numToCheck % i === 0) {
            return false;
        }
    }
    return true;
}
main4();
