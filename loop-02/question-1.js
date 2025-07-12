// write a function that searches for an element in an 
// array and return the index, if the element is not present just 
// return -1


let arr = [4, 2, 0, 10, 8, 30]

function searchElement(arr , el){
    for(let i=0; i<arr.length;i++){
        if(arr[i] == el){
            return i
        }
    }

    return -1

}

let result = searchElement(arr,10)
console.log(result)

