function threeDigitNumber(){
    return Math.floor(Math.random() * 1000 % 900 + 100);
}

let array = [];
for(let i = 0; i < 10; i++){
    array[i] = threeDigitNumber();
}

let largest;
let secondLargest;
let smallest;
let secondSmallest;
let index;
for (index = 1; index < array.length; index++) {
    if(array[index] != array[index - 1]){
        if(array[index] < array[index - 1]){
            secondSmallest = largest = array[index - 1];
            smallest = secondLargest = array[index];
        } else {
            secondSmallest = largest = array[index];
            smallest = secondLargest = array[index - 1];
        }
        break;
    }
}
for (index = index + 1; index < array.length; index++) {
    if(array[index] > largest){
        secondLargest = largest;
        largest = array[index];
    } else if(array[index] > secondLargest){
        secondLargest = array[index];
    } else if(array[index] < smallest){
        secondSmallest = smallest;
        smallest = array[index];
    } else if(array[index] < secondSmallest){
        secondSmallest = array[index]
    }
}

console.log("10 randon three digit valuse are : "+array);
console.log("second largest value of them is : "+secondLargest);
console.log("second smallest value of them is : "+secondSmallest);