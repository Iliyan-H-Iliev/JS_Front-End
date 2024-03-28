function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient')
    const resultElement = document.getElementById('result')

    gradientElement.addEventListener('mousemove', (ev) => {
        const currentWidth = ev.offsetX
        const elementWidth = ev.target.clientWidth
        const percentage = Math.floor((currentWidth / elementWidth) * 100)
        resultElement.textContent = `${percentage}%`
    })
}