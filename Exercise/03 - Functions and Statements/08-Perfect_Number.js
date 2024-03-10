function isPerfectNumber(number) {
    let aliquotSum = 0;

    if (number % 2 !== 0) {
        return 'It\'s not so perfect.';
    }
    for (let i = number / 2; i > 0; i--) {
        if (number % i === 0) {
            aliquotSum += i;
        }
    }
    if (aliquotSum === number) {
            return 'We have a perfect number!'
        } else {
        return 'It\'s not so perfect.';
    }
}

console.log(isPerfectNumber(1236498))