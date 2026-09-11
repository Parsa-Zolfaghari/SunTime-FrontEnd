// Select all inputs used for the email verification code
const getInputsEl = document.querySelectorAll('.input-write__code');

// Select the error message element for invalid characters
const getErrorCharEl = document.querySelector('.container-error__character');

// Show the invalid character error message
const showErrorChar = () => {

    // Make the error message visible
    getErrorCharEl.style.display = 'flex';

    // Hide the error message after 3 seconds
    setTimeout(() => {
        getErrorCharEl.style.display = 'none';
    }, 3000);
};

// Add event listeners to each OTP input
getInputsEl.forEach((inputsEl, index) => {

    // Run this function whenever the input value changes
    inputsEl.addEventListener("input", (event) => {

        // Get the current input value
        const valueInput = event.target.value;

        // Stop if the input is empty
        if (valueInput === "") {
            return;
        }

        // Check if the value is exactly one digit
        if (!/^\d$/.test(valueInput)) {

            // Show an error for invalid characters
            showErrorChar();

            // Clear the invalid input value
            getInputsEl[index].value = '';

        } else {

            // Check if there is another input after the current one
            if (index + 1 < getInputsEl.length) {

                // Move the focus to the next input
                getInputsEl[index + 1].focus();
            }
        }
    });

    // Handle pasting a verification code
    inputsEl.addEventListener("paste", (pasteEvt) => {

        // Prevent the browser from inserting the pasted text automatically
        pasteEvt.preventDefault();

        // Get the text from the clipboard
        const pastedText = pasteEvt.clipboardData.getData("text");

        // Check if the pasted text is longer than the number of available inputs
        if (pastedText.length > getInputsEl.length) {

            // Show an error if the pasted code is too long
            showErrorChar();

        } else {

            // Loop through each character in the pasted text
            for (let index = 0; index < pastedText.length; index++) {

                // Check if the current pasted character is a digit
                if (!/^\d$/.test(pastedText[index])) {

                    // Show an error for invalid characters
                    showErrorChar();

                    // Stop processing the pasted text
                    return;

                } else {

                    // Put the current character into the corresponding input
                    getInputsEl[index].value = pastedText[index];

                    // Move the focus to the current input
                    getInputsEl[index].focus();
                }
            }
        }
    });

    // Handle keyboard actions for each OTP input
    inputsEl.addEventListener("keydown", (evt) => {

        // Check if the pressed key is Backspace
        if (evt.key === "Backspace") {

            // Check if the current input has a value
            if (getInputsEl[index].value) {

                // Clear the current input
                getInputsEl[index].value = '';

            } else {

                // Check if there is a previous input
                if (index > 0) {

                    // Move the focus to the previous input
                    getInputsEl[index - 1].focus();
                }
            }
        }
    });
});