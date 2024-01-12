"use strict";
// Declaring needed variables.
const companyNameEl = document.getElementById('companyName'), generateBtn = document.getElementById('generateBtn'), resultWrapper = document.getElementById('result');
let companyName = companyNameEl === null || companyNameEl === void 0 ? void 0 : companyNameEl.value;
const letter1 = ["Subject: Enthusiastic Intern Frontend Developer Eager to Contribute%Dear ",
    " Hiring Team, I trust this message finds you well. My name is Moutaz, and I am writing to express my sincere interest in securing an internship or junior frontend developer role at ",
    ". %As a dedicated software engineering learner with a strong focus on frontend technologies such as Elm, HTML, CSS, and JavaScript, I am eager to contribute my skills to your innovative team.%I am reaching out proactively to explore the possibility of joining ",
    " as an unpaid intern, driven by my eagerness to gain hands-on experience in a professional setting. I am impressed by ",
    "'s commitment to excellence and cutting-edge solutions and believe that my passion for frontend development aligns seamlessly with your team's objectives. %While I understand the constraints of an unpaid internship, I am enthusiastic about the opportunity to contribute to ",
    "'s success and learn from experienced professionals. %I am open to discussing potential roles that align with my skills and your team's needs. %Thank you for considering my application. I am keen to discuss how my skills can contribute to the dynamic environment at ",
    ". %Best regards,"], letter = letter1;
// Function to create a div element for a given string
function createDivElement(value) {
    const divElement = document.createElement('div');
    divElement.textContent = value;
    divElement.classList.add("textEl");
    return divElement;
}
// Map an array of strings to an array of div elements
function mapStringsToDivs(strings) {
    return strings.map(createDivElement);
}
// to update the text with current name input
const generateLetter = () => {
    let coverLetter = letter.join(companyName).toString(), coverLetterFormatted = coverLetter.split('%');
    const divElements = mapStringsToDivs(coverLetterFormatted);
    companyName = companyNameEl === null || companyNameEl === void 0 ? void 0 : companyNameEl.value;
    divElements.forEach((divElement) => resultWrapper.appendChild(divElement));
};
// calling the function when clicking the button.
generateBtn.addEventListener("click", generateLetter);
// Listening to input event...
companyNameEl === null || companyNameEl === void 0 ? void 0 : companyNameEl.addEventListener('input', function (event) {
    const target = event.target;
    companyName = target.value;
});
