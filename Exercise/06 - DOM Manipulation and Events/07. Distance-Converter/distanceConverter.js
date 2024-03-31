function attachEventsListeners() {
    const convertButtonElement = document.getElementById('convert')
    const inputDistanceElement = document.getElementById('inputDistance')
    const inputUnitsElement = document.getElementById('inputUnits')
    const outputDistanceElement = document.getElementById('outputDistance')
    const outputUnitsElement = document.getElementById('outputUnits')

    const toMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    convertButtonElement.addEventListener('click', () => {
        const inputDistance = inputDistanceElement.value
        const inputUnit = inputUnitsElement.value
        const outputUnit = outputUnitsElement.value

        outputDistanceElement.value = (Number(inputDistance) * toMeters[inputUnit]) / toMeters[outputUnit]
    })
}