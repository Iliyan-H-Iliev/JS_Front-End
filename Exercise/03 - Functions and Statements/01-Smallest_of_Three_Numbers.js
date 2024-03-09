function solve(...numbers) {

    function smallestNumber(arrayOfNumbers) {
        let startNumber = arrayOfNumbers[0]
        for (let number of arrayOfNumbers) {
            if (number < startNumber)
                startNumber = number
        }

        return startNumber
    }

    console.log(smallestNumber(numbers))

}


solve(1 ,2 , 23, -1)