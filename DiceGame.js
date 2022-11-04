function diceRoll(){
    return Math.floor(Math.random() * 10 % 6 + 1);
}

let countsForDiceRoll = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

while(true){
    if(++countsForDiceRoll[diceRoll()] == 10){
        break;
    }
}

let looser = 1;
let looserCount = countsForDiceRoll[looser];
let winnerCount = 10;
let winner;

for (let diceRollNumber = 1; diceRollNumber <= 6; diceRollNumber++) {
    if(countsForDiceRoll[diceRollNumber] == 10){
        winner = diceRollNumber;
    }
    if(countsForDiceRoll[diceRollNumber] < looserCount){
        looser = diceRollNumber;
        looserCount = countsForDiceRoll[diceRollNumber];
    }
}

console.log("Winner is "+winner+" and it win "+winnerCount+" times");
console.log("Losser is "+looser+" and it win "+looserCount+" times");