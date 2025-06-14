// Star pattern 1
// let n = 4;
// for(let i = 0; i < n; i++) {
//     let row = " ";
//     for(let j = 0; j < n; j++) {
//         row += " * ";
//     }
//     console.log(row);
// }

// Star pattern 2
// let n = 4;

// for(let i = 0; i < n; i++) {
//     let row = "";

//     for(let j = 0; j < i + 1 ; j++) {
//         row += " * ";
//     }

//     console.log(row);
// }

// Star pattern 3
// let n = 5;

// for(let i = 0; i < n; i++) {
//     let row = " ";

//     for(let j = 0; j < i + 1; j++) {
//         row = row + " " + (j + 1);
//     }
//     console.log(row);
// }

// Star pattern 4
// let n = 5;

// for(let i = 0; i < n; i++) {
//     let row = " ";
//     for(let j = 0; j < i + 1; j++) {
//         row = row + " " + (i + 1);
//     }
//     console.log(row);
// }

// Star pattern 5
// let n = 5;

// for(let i = 0; i < n; i++) {
//     let row = " ";

//     for(let j = 0; j < n - i; j++) {
//         row = row + " " + (j + 1);
//     }
//     console.log(row);
// }

// Star pattern 6
// let n = 5;
// for(let i = 0; i < n; i++) {
//     let row = " ";

//     for(let j = 0; j < n - (i + 1); j++) {
//         row = row + " - ";
//     }

//     for(let k = 0; k < i + 1; k++) {
//         row = row + " * ";
//     }
//     console.log(row);
// }

// Star pattern 7
// let n = 6;

// for(let i = 0; i < n; i++) {
//     let row = " ";
//     let switchVar = 1;
//     for(let j = 0; j < i + 1; j++) {
//         row = row + switchVar;
//         if(switchVar == 1) {
//             switchVar = 0;
//         } else {
//             switchVar = 1;
//         }
//     }
//     console.log(row);
// }

// Star pattern 8

let n = 6;
let switchVar = 1;

for(let i = 0; i < n; i++) {
    let row = " ";
    for(let j = 0; j < i + 1; j++) {
        row = row + switchVar;
        if(switchVar == 1) {
            switchVar = 0;
        } else {
            switchVar = 1;
        }
    }
    console.log(row);
}