function getLCF(number){
    for(let i=2; i * i <= number; i++){
        if((number%i) == 0){
            return i;
        }
    }
    return number;
}

function factors(number){
    let LCF = getLCF(number);
    let factorsOfNumber = [LCF];
    if (number != LCF) {
        factorsOfNumber = factorsOfNumber.concat(factors(number/LCF));
    }
    return factorsOfNumber;
}

console.log(factors(52));