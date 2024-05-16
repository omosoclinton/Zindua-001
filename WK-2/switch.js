// {
//     x = 11;

//     switch(x) {
//         case 3:
//             console.log("x is three");
//             break;
//         case 10:
//             console.log("x is 10");
//             break;
//         default:
//             console.log("X is not assigned");
//     }

// }

// divisbilty by 3
// A number is divisble by 3 if  the sum of its digits is divisble by 3

// let x = 111;
// let b;

// b = x%3;

// switch (b) {
//     case (0):
//         console.log("Divisble by 3");
//         break;
//     default:
//         console.log("Not divisible by 3");
// }

// logical or and logical and &&

// deves and engs to  = boardroom 10
// lawyers and doctors = 9
// young profs btn 20 and 25 = 1
// retired profs = 15

let age = 21;
let prof = 'engineer'

if (age >= 18 && (prof=='engineer' || prof=='developer')) {
    console.log("Allowed")
}else {
    console.log("Not allowed in")
}