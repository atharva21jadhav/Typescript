function OptionalArgs(no1:number, no2?:number) {
    console.log(`no1 = ${no1} `);
    if(no2 !== undefined){
        console.log(`and no2= ${no2}`);
    }
}


OptionalArgs(1,2);
OptionalArgs(1);