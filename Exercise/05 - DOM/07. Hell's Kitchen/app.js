function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let inputElement = document.querySelector('#inputs textarea')
        let bestRestaurantElement = document.querySelector('#bestRestaurant p')
        let bestWorkersElement = document.querySelector('#workers p')


        let restaurants = []
        let input = JSON.parse(inputElement.value)

        for (const element of input) {
            let restaurantProp = element.toString().split(' - ')
            let restaurantName = restaurantProp[0]
            let workers = restaurantProp[1].split(', ').map(x => x.split(' '))
            workers = workers.map(([worker, salary]) => [worker, Number(salary)])


            if (!restaurants.some(restaurant => restaurant.name === restaurantName)) {
                restaurants.push({
                        name: restaurantName,
                        workers: [],
                        avgSalary: 0,
                    }
                )
            }

            let restaurant = restaurants.find(restaurant => restaurant.name === restaurantName)
            for (const worker of workers) {
                restaurant.workers.push(worker)
            }

            let avgSalary = restaurant.workers
                .reduce((acc, worker) => acc + worker[1], 0) / restaurant.workers.length

            restaurant.avgSalary = avgSalary.toFixed(2)
        }

        let bestRestaurant = restaurants.sort((a, b) => b.avgSalary - a.avgSalary)[0]
        let sortedWorkers = bestRestaurant.workers.sort((a, b) => b[1] - a[1])

        bestRestaurantElement.textContent =
            `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary} Best Salary: ${bestRestaurant.workers[0][1].toFixed(2)}`

        let bestWorkers = []
        for (const sortedWorker of sortedWorkers) {
            bestWorkers.push(`Name: ${sortedWorker[0]} With Salary: ${sortedWorker[1]}`)
        }

        bestWorkersElement.textContent = bestWorkers.join(' ')
    }
}
