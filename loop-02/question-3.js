// write a function that returns the largest number in an array

let arr = [-2,-3,-1,-7]

function largestNumber(arr){
    let max = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max= arr[i]
        }
    }
    console.log(max)
}

largestNumber(arr)