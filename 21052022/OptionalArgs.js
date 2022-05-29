function OptionalArgs(no1, no2) {
    console.log("no1 = ".concat(no1, " "));
    if (no2 !== undefined) {
        console.log("and no2= ".concat(no2));
    }
}
OptionalArgs(1, 2);
OptionalArgs(1);
