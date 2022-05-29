// Default values are trailing (Right to left)
function DefaultVals(no1, no2, no3) {
    if (no2 === void 0) { no2 = 10; }
    if (no3 === void 0) { no3 = 10; }
    console.log('This is Default Args');
}
DefaultVals(1);
DefaultVals(1, 2);
DefaultVals(1, 2, 3);
