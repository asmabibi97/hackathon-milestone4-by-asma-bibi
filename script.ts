
//gpt version 

// Listening to the form submission
document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Type assertion (use HTMLTextAreaElement for textarea elements)
    const profilepictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;  // Correct type for textarea
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement; // Correct type for textarea
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;         // Correct type for textarea

    if (profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        //Profile picture handling
        const profilepictureFile = profilepictureInput.files?.[0];
        const profilepictureURL = profilepictureFile ? URL.createObjectURL(profilepictureFile) : '';


        // Create resume output
        const resumeOutput = `
          <h2>Resume</h2>
           ${profilepictureURL ? `<img src="${profilepictureURL}" alt="profile picture" class="profilepicture">` : ''}

            <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
            <h3>Education</h3>
            <p id="edit-education" class="editable">${education}</p>
            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${experience}</p>
            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${skills}</p>
        `;

        // Display the resume output in the div with ID 'resumeoutput'
        const resumeOutputElement = document.getElementById('resumeoutput');  // Correct ID here
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable()
        } else {
            console.error(`The resume output element is missing.`);
        }
    } else {
        console.error(`One or more form elements are missing.`);
    }
});

// ****editable code
function  makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            // Replace content with input for editing
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');

                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}













