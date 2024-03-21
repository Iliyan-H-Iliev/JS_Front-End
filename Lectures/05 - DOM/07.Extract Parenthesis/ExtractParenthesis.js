function extract(content) {
    let contentElement = document.getElementById(content)

    let pattern = RegExp(`\\((.*?)\\)`, 'g')

    let matches = [];
    let match
    while ((match = pattern.exec(contentElement.textContent)) !== null) {
        matches.push(match[1])
    }

    return matches.join('; ')
}
