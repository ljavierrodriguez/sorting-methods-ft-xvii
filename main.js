// console.log(["Paco", "Samanta", "Luis", "Paco"].sort((a, b) => a > b ? 1 : -1))

let notas = [2, 10, 21, 5, 32, 12, 90, 8, 19, 22]; // 10 items

const bubbleSortWhile = (arr = []) => {
    let stop = arr.length - 1; // 9
    while(stop > 0){
        let index = 0;
        while(index < stop){
            if(arr[index] < arr[index + 1]){
                let temp = arr[index];
                arr[index] = arr[index+1];
                arr[index+1] = temp;
            }
            index++;
        }
        stop--;
    }
    return arr;
}

const bubbleSortFor = (arr = []) => {
    let size = arr.length; // 10
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const insertionSort = (arr = []) => {
    let size = arr.length; // 10
    let j, temp;

    for(let i = 1; i < size; i++){
        j = i;
        temp = arr[i];
        while(j > 0 && arr[j - 1] < temp){
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }

    return arr;
}

const selectionSort = (arr = []) => {
    let size = arr.length;
    for(let i = 0; i < size; i++){
        let min = i;
        for(let j = min; j < size; j++){
            if(arr[min] > arr[j]){
                let temp = arr[min];
                arr[min] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}



let resultado = bubbleSortWhile(notas);
console.log(resultado);
let resultado2 = bubbleSortFor(notas);
console.log(resultado2);

let resultado3 = insertionSort(notas);
console.log(resultado3);

let resultado4 = selectionSort(notas);
console.log(resultado4);


