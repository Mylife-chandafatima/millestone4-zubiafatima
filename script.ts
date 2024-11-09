// script.ts or script.js

// Function to add new input groups dynamically
function addInputGroup(sectionId: string, inputHtml: string) {
    const section = document.getElementById(sectionId);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = inputHtml;
    section!.appendChild(newDiv);
}

// Event listener to dynamically add education fields
document.getElementById("addEducation")!.addEventListener("click", function() {
    const educationHtml = `
        <div class="education-group">
            <input type="text" class="education-input" placeholder="Degree" required />
            <input type="text" class="education-input" placeholder="School" required />
            <input type="text" class="education-input" placeholder="Year" required />
        </div>
    `;
    addInputGroup("education-section", educationHtml);
});

// Event listener to dynamically add work experience fields
document.getElementById("addWorkExperience")!.addEventListener("click", function() {
    const workExperienceHtml = `
        <div class="work-experience-group">
            <input type="text" class="work-experience-input" placeholder="Company" required />
            <input type="text" class="work-experience-input" placeholder="Role" required />
            <input type="text" class="work-experience-input" placeholder="Years" required />
        </div>
    `;
    addInputGroup("work-experience-section", workExperienceHtml);
});

// Event listener to dynamically add skill fields
document.getElementById("addSkill")!.addEventListener("click", function() {
    const skillHtml = `<input type="text" class="skills-input" placeholder="Skill" required />`;
    addInputGroup("skills-section", skillHtml);
});

// Function to handle form submission and generate the resume
document.getElementById("resumeForm")!.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather personal information
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;

    // Gather education entries
    const educationInputs = document.querySelectorAll(".education-group");
    let educationHtml = "";
    educationInputs.forEach((group: any) => {
        const degree = group.querySelector(".education-input:nth-child(1)").value;
        const school = group.querySelector(".education-input:nth-child(2)").value;
        const year = group.querySelector(".education-input:nth-child(3)").value;
        educationHtml += `<p><strong>${degree}</strong>, ${school} (${year})</p>`;
    });

    // Gather work experience entries
    const workExperienceInputs = document.querySelectorAll(".work-experience-group");
    let workExperienceHtml = "";
    workExperienceInputs.forEach((group: any) => {
        const company = group.querySelector(".work-experience-input:nth-child(1)").value;
        const role = group.querySelector(".work-experience-input:nth-child(2)").value;
        const years = group.querySelector(".work-experience-input:nth-child(3)").value;
        workExperienceHtml += `<p><strong>${role}</strong> at ${company} (${years})</p>`;
    });

    // Gather skills entries
    const skillInputs = document.querySelectorAll(".skills-input");
    let skillsHtml = "<ul>";
    skillInputs.forEach((input: any) => {
        skillsHtml += `<li>${input.value}</li>`;
    });
    skillsHtml += "</ul>";

    // Generate resume
    const resumeContent = `
        <div class="resume-section">
            <h3>Name:<span contentediable ="true"> ${name} </span> </h3>
            <p>Email: <span contentediable ="true">${email} </span></p>
            <p>Phone:<span contentediable ="true"> ${phone} </span></p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
           <span contentediable ="true"> ${educationHtml} </sapn>
        </div>
        <div class="resume-section">
            <h3>Work Experience</h3>
           <span contentediable ="true"> ${workExperienceHtml} </span>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <span contentediable ="true">${skillsHtml} </span>
        </div>
    `;

    // Display the resume in the resume-display div
    const resumeDisplay = document.getElementById("resume-display")!;
    resumeDisplay.innerHTML = resumeContent;
});
