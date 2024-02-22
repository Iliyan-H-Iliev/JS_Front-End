function solve(groupOfPeople, typeOfGroup, dayOfTheWeek) {
    let pricePerTicket = 0
    let totalPrice = 0

    if (typeOfGroup === "Students") {
        switch (dayOfTheWeek) {
            case "Friday":
                pricePerTicket =  8.45;
                break;
            case "Saturday":
                pricePerTicket = 9.8;
                break;
            case "Sunday":
                pricePerTicket = 10.46;
                break;
        }

        totalPrice = groupOfPeople * pricePerTicket

        if (groupOfPeople >= 30) {
            totalPrice *= 0.85
        }

    } else if (typeOfGroup === "Business") {
        switch (dayOfTheWeek) {
            case "Friday":
                pricePerTicket = 10.9;
                break;
            case "Saturday":
                pricePerTicket = 15.6;
                break;
            case "Sunday":
                pricePerTicket = 16;
                break;
        }
        totalPrice = groupOfPeople * pricePerTicket

        if (groupOfPeople >= 100) {
            totalPrice -= 10 * pricePerTicket
        }

    } else if (typeOfGroup === "Regular") {
        switch (dayOfTheWeek) {
            case "Friday":
                pricePerTicket = 15;
                break;
            case "Saturday":
                pricePerTicket = 20;
                break;
            case "Sunday":
                pricePerTicket = 22.5;
                break;
        }

        totalPrice = groupOfPeople * pricePerTicket
        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            totalPrice *= 0.95
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

solve(40,
"Regular",
"Saturday"
)