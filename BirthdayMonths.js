function birthdayMonth(){
    return Math.floor(Math.random() * 10 % 2 + 1992) + " " 
    + Math.floor(Math.random() * 100 % 12 + 1);
}

let countBirthdayMonths = {};

for(let person = 1; person <= 50; person++){
    let personBirthdayMonth = birthdayMonth();
    if(countBirthdayMonths[personBirthdayMonth]){
        countBirthdayMonths[personBirthdayMonth] = countBirthdayMonths[personBirthdayMonth].concat("Person "+person);
    } else {
        countBirthdayMonths[personBirthdayMonth] = ["Person "+person];
    }
}

console.log(countBirthdayMonths);