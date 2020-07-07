// Code your solution here!
function printString(myString) {
    console.log(myString[0]); 
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(string){
    return string === '' ? '' : reverseString(string.substr(1)) + string.charAt(0);
}

function isPalindrome(str){
    if (str.length === 1){return true}
    if (str.length === 2 && str[0] === str[1]){return true}
    if (str[0] !== str[str.length - 1]){return false}
    let newString = str.split('')
    newString.pop()
    newString.shift()
    return isPalindrome(newString.join(''))
}

function addUpTo(myArray, index){
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(arr){
    if (arr.length === 1) {return arr[0]}
    return Math.max(arr.pop(), maxOf(arr))
}

function includesNumber(arr, num){
    if (!arr.length){return false}
    if(arr[0] === num){return true}
    return includesNumber(arr.slice(1), num)
}