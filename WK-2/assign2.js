let n = 0
function countVowels(variab) {
    for (i = 0; i <=variab.length; i++) {
    if (variab[i] == "a") {
        n++
    } else if (variab[i] == "e") {
        n++
    }  else if (variab[i] == "i" ) {
        n++
    } else if (variab[i] == "o") {
        n++
    }else if (variab[i] == "u") {
        n++
    }
} 
console.log(n)
}
countVowels("zindua")