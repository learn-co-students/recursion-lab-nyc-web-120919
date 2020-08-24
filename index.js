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

function reverseString(string, result = '') {
    if (string.length > 0) {
        let substring = string.substring(0, string.length - 1)
        return reverseString(substring, result + string[string.length - 1])
    } else {
        return result;
    }
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true
    } else {
        if (string[0] === string[string.length - 1]) {
            let substring = string.substring(1, string.length - 1)
            return isPalindrome(substring)
        } else {
            return false
        }
    }
}

function addUpTo(array, index = 0) {
    if (index === 0) {
        return array[index]
    } else {
        return array[index] + addUpTo(array, index - 1)
    }
}

function maxOf(array) {
    if(array.length === 1)
        return array[0]
    else {
        let max = maxOf(array.slice(1))
        return array[0] > max ? array[0] : max
    }
}

function includesNumber(array, num) {
    if(array.length === 1)
        return array[0] === num ? true : false
    if(array[0] === num)
        return true
    else
        return includesNumber(array.slice(1), num)
}