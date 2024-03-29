function focused() {
    const sections = document.querySelectorAll('input');

    Array.from(sections).forEach(section => {
        section.addEventListener('focus', () => {
            section.parentElement.classList.add('focused');
        });
        section.addEventListener('blur', () => {
            section.parentElement.classList.remove('focused');
        });
    });
}