function attachEventsListeners() {
    const daysInputElement = document.getElementById('days')
    const hoursInputElement = document.getElementById('hours')
    const minutesInputElement = document.getElementById('minutes')
    const secondsInputElement = document.getElementById('seconds')
    const daysButtonElement = document.getElementById('daysBtn')
    const hoursButtonElement = document.getElementById('hoursBtn')
    const minutesButtonElement = document.getElementById('minutesBtn')
    const secondsButtonElement = document.getElementById('secondsBtn')

    daysButtonElement.addEventListener('click', () => {
        const days = Number(daysInputElement.value)
        if (!days) {
            return NaN
        }
        hoursInputElement.value = days * 24
        minutesInputElement.value = days * 24 * 60
        secondsInputElement.value = days * 24 * 60 * 60
    })

    hoursButtonElement.addEventListener('click', () => {
        const hours = Number(hoursInputElement.value)
        if (!hours) {
            return NaN
        }
        daysInputElement.value = hours / 24
        minutesInputElement.value = hours * 60
        secondsInputElement.value = hours * 60 * 60
    })

    minutesButtonElement.addEventListener('click', () => {
        const minutes = Number(minutesInputElement.value)

        if (!minutes) {
            return NaN
        }

        daysInputElement.value = minutes / 60 / 24
        hoursInputElement.value = minutes / 60
        secondsInputElement.value = minutes * 60
    })

    secondsButtonElement.addEventListener('click', () => {
        const seconds = Number(secondsInputElement.value)

        if (!seconds) {
            return NaN
        }

        daysInputElement.value = seconds / 60 / 60 / 24
        hoursInputElement.value = seconds / 60 / 60
        minutesInputElement.value = seconds / 60
    })
}