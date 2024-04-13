// function lockedProfile() {
//     const mainElement = document.getElementById('main')
//     const firstChildProfileDivElement = document.querySelector('#profile:first-of-type')
//     // firstChildProfileDivElement.style.display = 'none'
//
//     fetch('http://localhost:3030/jsonstore/advanced/profiles')
//         .then(res => res.json())
//         .then(allProfiles => {
//             for (const allProfilesKey in allProfiles) {
//                 mainElement.appendChild(createProfileDiv(allProfiles[allProfilesKey]))
//             }
//         } )
//
//     function createProfileDiv(user) {
//         // Create elements
//         const profileDiv = document.createElement('div');
//         const img = document.createElement('img');
//         const lockLabel = document.createElement('label');
//         const lockInput = document.createElement('input');
//         const unlockLabel = document.createElement('label');
//         const unlockInput = document.createElement('input');
//         const hr1 = document.createElement('hr');
//         const usernameLabel = document.createElement('label');
//         const usernameInput = document.createElement('input');
//         const userDiv = document.createElement('div');
//         const hr2 = document.createElement('hr');
//         const emailLabel = document.createElement('label');
//         const emailInput = document.createElement('input');
//         const ageLabel = document.createElement('label');
//         const ageInput = document.createElement('input');
//         const showMoreButtonElement = document.createElement('button')
//
//         // Set attributes and content
//         profileDiv.className = 'profile';
//         img.src = './iconProfile2.png';
//         img.className = 'userIcon';
//         lockLabel.textContent = 'Lock';
//         lockInput.type = 'radio';
//         lockInput.name = 'user1Locked';
//         lockInput.value = 'lock';
//         lockInput.checked = true;
//         unlockLabel.textContent = 'Unlock';
//         unlockInput.type = 'radio';
//         unlockInput.name = 'user1Locked';
//         unlockInput.value = 'unlock';
//         usernameLabel.textContent = 'Username';
//         usernameInput.type = 'text';
//         usernameInput.name = 'user1Username';
//         usernameInput.value = user.username;
//         usernameInput.disabled = true;
//         usernameInput.readOnly = true;
//         userDiv.className = 'hiddenInfo';
//         emailLabel.textContent = 'Email:';
//         emailInput.type = 'email';
//         emailInput.name = 'user1Email';
//         emailInput.value = user.email;
//         emailInput.disabled = true;
//         emailInput.readOnly = true;
//         ageLabel.textContent = 'Age:';
//         ageInput.type = 'email';
//         ageInput.name = 'user1Age';
//         ageInput.value = user.age;
//         ageInput.disabled = true;
//         ageInput.readOnly = true;
//         showMoreButtonElement.textContent = 'Show more'
//
//         showMoreButtonElement.addEventListener('click', (e) => {
//             const parentElement = e.currentTarget.parentElement
//             const hiddenInformationElement = parentElement.querySelector('div')
//             const lockedProfileElement = parentElement.querySelector('input[value=lock]')
//
//             if (lockedProfileElement.checked) {
//                 return
//             }
//
//             if (showMoreButtonElement.textContent === 'Show more') {
//                 hiddenInformationElement.className = 'user1Username'
//                 showMoreButtonElement.textContent = 'Hide it'
//             } else {
//                 hiddenInformationElement.className = 'hiddenInfo'
//                 showMoreButtonElement.textContent = 'Show more'
//             }
//         })
//
//         // Append elements
//         profileDiv.appendChild(img);
//         profileDiv.appendChild(lockLabel);
//         profileDiv.appendChild(lockInput);
//         profileDiv.appendChild(unlockLabel);
//         profileDiv.appendChild(unlockInput);
//         profileDiv.appendChild(hr1);
//         profileDiv.appendChild(usernameLabel);
//         profileDiv.appendChild(usernameInput);
//         profileDiv.appendChild(userDiv);
//         userDiv.appendChild(hr2);
//         userDiv.appendChild(emailLabel);
//         userDiv.appendChild(emailInput);
//         userDiv.appendChild(ageLabel);
//         userDiv.appendChild(ageInput);
//         profileDiv.appendChild(showMoreButtonElement)
//
//         return profileDiv;
//     }
// }

// function lockedProfile() {
//     const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles"
//
//     const mainElement = document.getElementById("main");
//
//     fetch(baseUrl)
//         .then(res => res.json())
//         .then(profiles => {
//             mainElement.innerHTML = '';
//
//             for (const profile of Object.values(profiles)) {
//                 const imgElement = document.createElement("img");
//                 imgElement.classList.add("userIcon");
//                 imgElement.src = "./iconProfile2.png";
//
//                 const labelLockElement = document.createElement("label");
//                 labelLockElement.textContent = "Lock";
//
//                 const lockRadioElement = document.createElement("input");
//                 lockRadioElement.type = "radio";
//                 lockRadioElement.name = "user1Locked";
//                 lockRadioElement.value = "lock";
//                 lockRadioElement.checked = true;
//
//                 const labelUnlockElement = document.createElement("label");
//                 labelUnlockElement.textContent = "Unlock";
//
//                 const unlockRadioElement = document.createElement("input");
//                 unlockRadioElement.type = "radio";
//                 unlockRadioElement.name = "user1Locked";
//                 unlockRadioElement.value = "unlock";
//
//                 lockRadioElement.addEventListener("change", () => {
//                     if (lockRadioElement.checked) {
//                         unlockRadioElement.checked = false;
//                     }
//                 });
//
//                 unlockRadioElement.addEventListener("change", () => {
//                     if (unlockRadioElement.checked) {
//                         lockRadioElement.checked = false;
//                     }
//                 });
//
//                 const brProfileElement = document.createElement("br");
//                 const hrProfileElement = document.createElement("hr");
//
//                 const labelUsernameElement = document.createElement("label");
//                 labelUsernameElement.textContent = "Username";
//
//                 const inputUsernameElement = document.createElement("input");
//                 inputUsernameElement.type = "text";
//                 inputUsernameElement.name = "user1Username";
//                 inputUsernameElement.value = profile.username;
//                 inputUsernameElement.disabled = true;
//                 inputUsernameElement.readOnly = true;
//
//                 const divHiddenFieldsElement = document.createElement("div");
//                 divHiddenFieldsElement.classList.add("user1Username");
//
//                 const hrHiddenFieldsElement = document.createElement("hr");
//
//                 const labelEmailElement = document.createElement("label");
//                 labelEmailElement.textContent = "Email:";
//
//                 const inputEmailElement = document.createElement("input");
//                 inputEmailElement.type = "email";
//                 inputEmailElement.name = "user1Email";
//                 inputEmailElement.value = profile.email;
//                 inputEmailElement.disabled = true;
//                 inputEmailElement.readOnly = true;
//
//                 const labelAgeElement = document.createElement("label");
//                 labelAgeElement.textContent = "Age:";
//
//                 const inputAgeElement = document.createElement("input");
//                 inputAgeElement.type = "text";
//                 inputAgeElement.name = "user1Age";
//                 inputAgeElement.value = profile.age;
//                 inputAgeElement.disabled = true;
//                 inputAgeElement.readOnly = true;
//
//                 divHiddenFieldsElement.appendChild(hrHiddenFieldsElement);
//                 divHiddenFieldsElement.appendChild(labelEmailElement);
//                 divHiddenFieldsElement.appendChild(inputEmailElement);
//                 divHiddenFieldsElement.appendChild(labelAgeElement);
//                 divHiddenFieldsElement.appendChild(inputAgeElement);
//
//                 const showMoreButtonElement = document.createElement("button");
//                 showMoreButtonElement.textContent = "Show more";
//
//                 showMoreButtonElement.addEventListener('click', (e) => {
//                     if (lockRadioElement.checked) {
//                         return;
//                     }
//
//                     if (showMoreButtonElement.textContent === 'Show more') {
//                         showMoreButtonElement.textContent = 'Hide it';
//                         divHiddenFieldsElement.style.display = "block";
//                     } else {
//                         showMoreButtonElement.textContent = 'Show more';
//                         divHiddenFieldsElement.style.display = "none";
//                     }
//                 });
//
//                 const divProfileElement = document.createElement("div");
//                 divProfileElement.classList.add("profile");
//
//                 divProfileElement.appendChild(imgElement);
//                 divProfileElement.appendChild(labelLockElement);
//                 divProfileElement.appendChild(lockRadioElement);
//                 divProfileElement.appendChild(labelUnlockElement);
//                 divProfileElement.appendChild(unlockRadioElement);
//                 divProfileElement.appendChild(brProfileElement);
//                 divProfileElement.appendChild(hrProfileElement);
//                 divProfileElement.appendChild(labelUsernameElement);
//                 divProfileElement.appendChild(inputUsernameElement);
//                 divProfileElement.appendChild(divHiddenFieldsElement);
//                 divProfileElement.appendChild(showMoreButtonElement);
//
//                 mainElement.appendChild(divProfileElement);
//             }
//         })
// }

function lockedProfile() {
    const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles"

    const mainElement = document.getElementById("main");

    fetch(baseUrl)
        .then(res => res.json())
        .then(profiles => {
            for (const profile of Object.values(profiles)) {
                const imgElement = document.createElement("img");
                imgElement.classList.add("userIcon");
                imgElement.src = "./iconProfile2.png";

                const labelLockElement = document.createElement("label");
                labelLockElement.textContent = "Lock";

                const lockRadioElement = document.createElement("input");
                lockRadioElement.type = "radio";
                lockRadioElement.name = `user1Locked${profile._id}`;
                lockRadioElement.value = "lock";
                lockRadioElement.checked = true;

                const labelUnlockElement = document.createElement("label");
                labelUnlockElement.textContent = "Unlock";

                const unlockRadioElement = document.createElement("input");
                unlockRadioElement.type = "radio";
                unlockRadioElement.name = `user1Locked${profile._id}`;
                unlockRadioElement.value = "unlock";

                lockRadioElement.addEventListener("change", () => {
                    if (lockRadioElement.checked) {
                        unlockRadioElement.checked = false;
                    }
                });

                unlockRadioElement.addEventListener("change", () => {
                    if (unlockRadioElement.checked) {
                        lockRadioElement.checked = false;
                    }
                });

                const brProfileElement = document.createElement("br");
                const hrProfileElement = document.createElement("hr");

                const labelUsernameElement = document.createElement("label");
                labelUsernameElement.textContent = "Username";

                const inputUsernameElement = document.createElement("input");
                inputUsernameElement.type = "text";
                inputUsernameElement.name = "user1Username";
                inputUsernameElement.value = profile.username;
                inputUsernameElement.disabled = true;
                inputUsernameElement.readOnly = true;

                const divHiddenFieldsElement = document.createElement("div");
                divHiddenFieldsElement.id = `${profile._id}HiddenFields`;
                divHiddenFieldsElement.style.display = "none";

                const hrHiddenFieldsElement = document.createElement("hr");

                const labelEmailElement = document.createElement("label");
                labelEmailElement.textContent = "Email:";

                const inputEmailElement = document.createElement("input");
                inputEmailElement.type = "email";
                inputEmailElement.name = "user1Email";
                inputEmailElement.value = profile.email;
                inputEmailElement.disabled = true;
                inputEmailElement.readOnly = true;

                const labelAgeElement = document.createElement("label");
                labelAgeElement.textContent = "Age:";

                const inputAgeElement = document.createElement("input");
                inputAgeElement.type = "email";
                inputAgeElement.name = "user1Age";
                inputAgeElement.value = profile.age;
                inputAgeElement.disabled = true;
                inputAgeElement.readOnly = true;

                divHiddenFieldsElement.appendChild(hrHiddenFieldsElement);
                divHiddenFieldsElement.appendChild(labelEmailElement);
                divHiddenFieldsElement.appendChild(inputEmailElement);
                divHiddenFieldsElement.appendChild(labelAgeElement);
                divHiddenFieldsElement.appendChild(inputAgeElement);

                const showMoreButtonElement = document.createElement("button");
                showMoreButtonElement.textContent = "Show more";

                showMoreButtonElement.addEventListener('click', (e) => {
                    if (lockRadioElement.checked) {
                        return;
                    }

                    if (showMoreButtonElement.textContent === 'Show more') {
                        showMoreButtonElement.textContent = 'Hide it';
                        divHiddenFieldsElement.style.display = "block";
                    } else {
                        showMoreButtonElement.textContent = 'Show more';
                        divHiddenFieldsElement.style.display = "none";
                    }
                });

                const divProfileElement = document.createElement("div");
                divProfileElement.classList.add("profile");

                divProfileElement.appendChild(imgElement);
                divProfileElement.appendChild(labelLockElement);
                divProfileElement.appendChild(lockRadioElement);
                divProfileElement.appendChild(labelUnlockElement);
                divProfileElement.appendChild(unlockRadioElement);
                divProfileElement.appendChild(brProfileElement);
                divProfileElement.appendChild(hrProfileElement);
                divProfileElement.appendChild(labelUsernameElement);
                divProfileElement.appendChild(inputUsernameElement);
                divProfileElement.appendChild(divHiddenFieldsElement);
                divProfileElement.appendChild(showMoreButtonElement);

                mainElement.appendChild(divProfileElement);
            }
        })
}