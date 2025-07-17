// find the second largest number in an array

let arr = [5,5,5,5]

function secondLargest(arr) {
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }

    }
    console.log(firstLargest)
    console.log(secondLargest)
}

secondLargest(arr)