function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

function reverseString(str) {
    if (str.length < 2) {
        return str;
    } else {
        return reverseString(str.substring(1)) + str[0];
    }
}

function isPalindrome(str) {
    if (str.length < 2) {
        return true
    } else {
        if (str[0] != str[str.length - 1]) {
            return false
        } else {
            return isPalindrome(str.substring(1, str.length - 1))
        } 
    }
}

function addUpTo(array, idx) {
    if (idx < 1) {
        return array[0];
    } else {
        return addUpTo(array, idx - 1) + array[idx]
    }
}

function maxOf(array) {
    if (array.length < 2) {
        return array[0];
    } else {
        return Math.max(array.pop(), maxOf(array));
    }
}

function includesNumber(array, n) {
    if (array.length < 1) {
        return false;
    } else if (array[0] === n) {
        return true;
    } else {
        return includesNumber(array.slice(1), n)
    }
}

// function includesNumber(array, n) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === n) {
//             return true;
//         }
//     } 
//     return false;
// }