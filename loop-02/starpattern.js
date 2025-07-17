// star printing 1

function squarePrint(n) {
    for (let i = 0; i < n; i++) {
        let bag = ""
        for (let j = 0; j < 3; j++) {
            bag = bag + "* "
        }
        console.log(bag)
    }
}

//squarePrint(7)


// star printing 2

for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + "* "
    }
    //console.log(row)
}


for (let i = 1; i <= 5; i++) {
    let numRow = ""
    for (let j = 1; j <= i; j++) {
        numRow = numRow + i  + " "
    }
    //console.log(numRow)

}
