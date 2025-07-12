//write a function that returns the number of negative 
// numbers in an array 


let arr1 = [2, -9, 17, 0, 1, -10, -1,-90, 8]

function findNegativeNumber(arr1){
    let count =0
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] < 0){
            count++
        }
    }
    console.log(count)
}

findNegativeNumber(arr1)