function solution() {
    
    const articleListURL = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const articleDetailURL = 'http://localhost:3030/jsonstore/advanced/articles/details'
    
    const sectionElement = document.getElementById('main')
    
    fetch(articleListURL)
        .then(res => res.json())
        .then(data => {
            data.forEach(el => sectionElement.appendChild(createArticle(el._id, el.title)))
        })
    
    function createArticle(id, title) {
        const spanElement = document.createElement('span')
        spanElement.textContent = title
        
        const buttonElement = document.createElement('button')
        buttonElement.id = id
        buttonElement.className = 'button'
        buttonElement.textContent = 'More'
        
        const headDivElement = document.createElement('div')
        headDivElement.className = 'head'
        
        headDivElement.appendChild(spanElement)
        headDivElement.appendChild(buttonElement)
        
        const pElement = document.createElement('p')
        
        const extraDivElement = document.createElement('div')
        extraDivElement.className = 'extra'
        extraDivElement.style.display = 'none'
        extraDivElement.appendChild(pElement)
        
        buttonElement.addEventListener('click', (ev) => {
            if (buttonElement.textContent === 'More') {
                
                if (pElement.textContent === '') {
                    fetch(`${articleDetailURL}/${ev.target.id}`)
                        .then(res => res.json())
                        .then(data => {
                            pElement.textContent = data.content
                        })
                }
                                
                buttonElement.textContent = 'Less'
                extraDivElement.style.display = 'block'
            } else {
                buttonElement.textContent = 'More'
                extraDivElement.style.display = 'none'
            }
        })
        
        const accordionDivElement = document.createElement('div')
        accordionDivElement.className = 'accordion'
        accordionDivElement.appendChild(headDivElement)
        accordionDivElement.appendChild(extraDivElement)
        
        return accordionDivElement
    }
}

solution()