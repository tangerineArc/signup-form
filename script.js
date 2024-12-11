const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

const confirmPasswordInstructions = document.querySelectorAll(".confirm-password-instruction");

confirmPasswordInput.addEventListener("input", event => {
    if (event.target.value !== passwordInput.value) {
        confirmPasswordInstructions.forEach(instruction => {
            instruction.style.display = "block";
        });
    } else {
        confirmPasswordInstructions.forEach(instruction => {
            instruction.style.display = "none";
        });
    }
});