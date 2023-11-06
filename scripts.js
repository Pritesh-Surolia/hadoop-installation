// scripts.js

// Function to copy code to the clipboard
function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const textArea = document.createElement("textarea");
    textArea.value = codeBlock.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    button.textContent = "Copied!";
    setTimeout(function () {
        button.textContent = "Copy";
    }, 2000);
}

// Add click event listeners to all code copy buttons
const copyButtons = document.querySelectorAll(".code-copy");
copyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        copyCode(button);
    });
});
