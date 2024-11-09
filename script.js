// script.ts or script.js
// Function to add new input groups dynamically
function addInputGroup(sectionId, inputHtml) {
    var section = document.getElementById(sectionId);
    var newDiv = document.createElement("div");
    newDiv.innerHTML = inputHtml;
    section.appendChild(newDiv);
}
// Event listener to dynamically add education fields
document.getElementById("addEducation").addEventListener("click", function () {
    var educationHtml = "\n        <div class=\"education-group\">\n            <input type=\"text\" class=\"education-input\" placeholder=\"Degree\" required />\n            <input type=\"text\" class=\"education-input\" placeholder=\"School\" required />\n            <input type=\"text\" class=\"education-input\" placeholder=\"Year\" required />\n        </div>\n    ";
    addInputGroup("education-section", educationHtml);
});
// Event listener to dynamically add work experience fields
document.getElementById("addWorkExperience").addEventListener("click", function () {
    var workExperienceHtml = "\n        <div class=\"work-experience-group\">\n            <input type=\"text\" class=\"work-experience-input\" placeholder=\"Company\" required />\n            <input type=\"text\" class=\"work-experience-input\" placeholder=\"Role\" required />\n            <input type=\"text\" class=\"work-experience-input\" placeholder=\"Years\" required />\n        </div>\n    ";
    addInputGroup("work-experience-section", workExperienceHtml);
});
// Event listener to dynamically add skill fields
document.getElementById("addSkill").addEventListener("click", function () {
    var skillHtml = "<input type=\"text\" class=\"skills-input\" placeholder=\"Skill\" required />";
    addInputGroup("skills-section", skillHtml);
});
// Function to handle form submission and generate the resume
document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Gather personal information
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    // Gather education entries
    var educationInputs = document.querySelectorAll(".education-group");
    var educationHtml = "";
    educationInputs.forEach(function (group) {
        var degree = group.querySelector(".education-input:nth-child(1)").value;
        var school = group.querySelector(".education-input:nth-child(2)").value;
        var year = group.querySelector(".education-input:nth-child(3)").value;
        educationHtml += "<p><strong>".concat(degree, "</strong>, ").concat(school, " (").concat(year, ")</p>");
    });
    // Gather work experience entries
    var workExperienceInputs = document.querySelectorAll(".work-experience-group");
    var workExperienceHtml = "";
    workExperienceInputs.forEach(function (group) {
        var company = group.querySelector(".work-experience-input:nth-child(1)").value;
        var role = group.querySelector(".work-experience-input:nth-child(2)").value;
        var years = group.querySelector(".work-experience-input:nth-child(3)").value;
        workExperienceHtml += "<p><strong>".concat(role, "</strong> at ").concat(company, " (").concat(years, ")</p>");
    });
    // Gather skills entries
    var skillInputs = document.querySelectorAll(".skills-input");
    var skillsHtml = "<ul>";
    skillInputs.forEach(function (input) {
        skillsHtml += "<li>".concat(input.value, "</li>");
    });
    skillsHtml += "</ul>";
    // Generate resume
    var resumeContent = "\n        <div class=\"resume-section\">\n            <h3>Name:<span contentediable =\"true\"> ".concat(name, " </span> </h3>\n            <p>Email: <span contentediable =\"true\">").concat(email, " </span></p>\n            <p>Phone:<span contentediable =\"true\"> ").concat(phone, " </span></p>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Education</h3>\n           <span contentediable =\"true\"> ").concat(educationHtml, " </sapn>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Work Experience</h3>\n           <span contentediable =\"true\"> ").concat(workExperienceHtml, " </span>\n        </div>\n        <div class=\"resume-section\">\n            <h3>Skills</h3>\n            <span contentediable =\"true\">").concat(skillsHtml, " </span>\n        </div>\n    ");
    // Display the resume in the resume-display div
    var resumeDisplay = document.getElementById("resume-display");
    resumeDisplay.innerHTML = resumeContent;
});
