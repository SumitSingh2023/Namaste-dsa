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
        numRow = numRow + i + " "
    }
    //console.log(numRow)

}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


//let n = 7
// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n - i; j++) {
//         row = row + (j + 1) + " "
//     }
//     //console.log(row)

// }

// _ _ _ _ *
// _ _ _ * *
// _ _ * * *
// _ * * * *
// * * * * *

// let n = 5
// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n - (i + 1); j++) {
//         row = row + " "
//     }
//     for (k = 0; k < i + 1; k++) {
//         row = row + "*" 
//     }
//     console.log(row)

// }

// for (let i = 0; i < 5; i++) {
//     let row = ""; toggle = 1
//     for (let j = 0; j <= i; j++) {
//         row = row + toggle+' '

//         // switch the toggle
//         if (toggle == 1) {
//             toggle = 0
//         } else {
//             toggle=1

//         }
//     }
//     console.log(row)

// }


// right-angled trianglr(half pyramid)

function rightAngle(n) {
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < i; j++) {
            row = row + "* "
        }
        console.log(row)
    }
}

//rightAngle(5)

// inverted half pyramid
// * * * * *
// * * * *
// * * *
// * *
// *



// for (let i = 0; i < n; i++) {
//     let row = ""
//     for (let j = 0; j < n - i; j++) {
//         row = row + "* "
//     }
//     //console.log(row)


// }

// full pyramid 
//     *    
//    * *   
//   * * *  
//  * * * * 
// * * * * *

let n = 5
for (let i = 1; i <= n; i++) {
    // print spaces
    let str = ""
    for (let j = 1; j <= n - i; j++) {
        str = str + " "
    }

    //print strts
    for (let k = 1; k <= i; k++) {
        str = str + "* "
    }
    console.log(str)

}
