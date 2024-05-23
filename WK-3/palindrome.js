// let string1 = "dad"
// let string2 = [];

// let i = string1.length - 1
// while (i >= 0) {
//     console.log(string1[i])
//     string2[i] = string1[i]
//     i--
// }
// console.log(string1)
// console.log(string2 == string1)

{
    function isPalindrome(str) {
        let d = str.length - 1
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[d]) {
                return false;
            }
            d--;
        }
        return true;
    }
    let str1 = "sis";
    let str2 = "nitin";
    let str3 = "nathan";
    console.log(isPalindrome(str1));
    console.log(isPalindrome(str2));
    console.log(isPalindrome(str3));
}