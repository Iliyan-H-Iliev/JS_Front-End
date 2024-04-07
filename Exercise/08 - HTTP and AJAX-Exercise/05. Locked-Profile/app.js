function lockedProfile() {
    const mainElement = document.getElementById('main')
    const firstChildProfileDivElement = document.querySelector('#profile:first-of-type')
    // firstChildProfileDivElement.style.display = 'none'
    
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(allProfiles => {
            for (const allProfilesKey in allProfiles) {
                mainElement.appendChild(createProfileDiv(allProfiles[allProfilesKey]))
            }
        } )

    function createProfileDiv(user) {
        // Create elements
        const profileDiv = document.createElement('div');
        const img = document.createElement('img');
        const lockLabel = document.createElement('label');
        const lockInput = document.createElement('input');
        const unlockLabel = document.createElement('label');
        const unlockInput = document.createElement('input');
        const hr1 = document.createElement('hr');
        const usernameLabel = document.createElement('label');
        const usernameInput = document.createElement('input');
        const userDiv = document.createElement('div');
        const hr2 = document.createElement('hr');
        const emailLabel = document.createElement('label');
        const emailInput = document.createElement('input');
        const ageLabel = document.createElement('label');
        const ageInput = document.createElement('input');
        const showMoreButtonElement = document.createElement('button')

        // Set attributes and content
        profileDiv.className = 'profile';
        img.src = './iconProfile2.png';
        img.className = 'userIcon';
        lockLabel.textContent = 'Lock';
        lockInput.type = 'radio';
        lockInput.name = 'user1Locked';
        lockInput.value = 'lock';
        lockInput.checked = true;
        unlockLabel.textContent = 'Unlock';
        unlockInput.type = 'radio';
        unlockInput.name = 'user1Locked';
        unlockInput.value = 'unlock';
        usernameLabel.textContent = 'Username';
        usernameInput.type = 'text';
        usernameInput.name = 'user1Username';
        usernameInput.value = user.username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        userDiv.className = 'hiddenInfo';
        emailLabel.textContent = 'Email:';
        emailInput.type = 'email';
        emailInput.name = 'user1Email';
        emailInput.value = user.email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
        ageLabel.textContent = 'Age:';
        ageInput.type = 'email';
        ageInput.name = 'user1Age';
        ageInput.value = user.age;
        ageInput.disabled = true;
        ageInput.readOnly = true;
        showMoreButtonElement.textContent = 'Show more'

        showMoreButtonElement.addEventListener('click', (e) => {
            const parentElement = e.currentTarget.parentElement
            const hiddenInformationElement = parentElement.querySelector('div')
            const lockedProfileElement = parentElement.querySelector('input[value=lock]')

            if (lockedProfileElement.checked) {
                return
            }

            if (showMoreButtonElement.textContent === 'Show more') {
                hiddenInformationElement.className = 'user1Username'
                showMoreButtonElement.textContent = 'Hide it'
            } else {
                hiddenInformationElement.className = 'hiddenInfo'
                showMoreButtonElement.textContent = 'Show more'
            }
        })

        // Append elements
        profileDiv.appendChild(img);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockInput);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockInput);
        profileDiv.appendChild(hr1);
        profileDiv.appendChild(usernameLabel);
        profileDiv.appendChild(usernameInput);
        profileDiv.appendChild(userDiv);
        userDiv.appendChild(hr2);
        userDiv.appendChild(emailLabel);
        userDiv.appendChild(emailInput);
        userDiv.appendChild(ageLabel);
        userDiv.appendChild(ageInput);
        profileDiv.appendChild(showMoreButtonElement)

        return profileDiv;
    }
}