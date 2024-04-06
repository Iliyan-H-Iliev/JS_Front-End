function attachEvents() {
    const messagesURL = 'http://localhost:3030/jsonstore/messenger'
    
    const messagesTextAreaElement = document.getElementById('messages')
    const authorNameElement = document.querySelector('input[name=author]')
    const messageElement = document.querySelector('input[name=content]')
    
    const submitButtonElement = document.getElementById('submit')
    const refreshButtonElement = document.getElementById('refresh')
    
    refreshButtonElement.addEventListener('click', () => {
        fetch(messagesURL)
            .then(response => response.json())
            .then(messages => {
                const allMessages = []
                Object.values(messages).forEach(message => allMessages.push(`${message.author}: ${message.content}`))
                messagesTextAreaElement.textContent = allMessages.join('\n')
            })
    })
    
    submitButtonElement.addEventListener('click', () => {
        const author = authorNameElement.value
        const content = messageElement.value
        
        fetch(messagesURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({author: author, content: content})
        })
            .then(response => response.json())
            .then(data => {
                authorNameElement.value = ''
                messageElement.value = ''
                messagesTextAreaElement.textContent += `\n${author}: ${content}`
            })
    })
    
    
}

attachEvents();