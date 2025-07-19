let num = 0

function countDigit(n) {
    if (n === 0) return 1

    // converting negative numbers to positive
    n=Math.abs(n)
    let count = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }
    return count
}

let result = countDigit(num)
console.log(result)