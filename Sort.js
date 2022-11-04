function threeDigitNumber(){
    return Math.floor(Math.random() * 1000 % 900 + 100);
}

let array = [];
for(let i = 0; i < 10; i++){
    array[i] = threeDigitNumber();
}

function sort(array){
    quickSort(array, 0, array.length - 1);
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partition(array, low, high){
    let pivot = array[high];
    let i = low - 1;
    for(let j = low; j <= high - 1; j++){
        if(array[j] < pivot){
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
}

function quickSort(array, low, high){
    if(low < high){
        let pivot = partition(array, low, high);
        quickSort(array, low, pivot - 1);
        quickSort(array, pivot + 1, high);
    }
}

console.log("10 elements are "+array);
sort(array);
console.log("second smallest element is "+array[1]);
console.log("second largest element is "+array[array.length - 2]);
