function solve(arrayOfNumbers) {
    function isPalindrome(number) {
        return number === Number(number.toString().split('').reverse().join(''))
    }

    arrayOfNumbers.forEach(x => console.log(isPalindrome(x)))

}

solve([123,323,421,121])