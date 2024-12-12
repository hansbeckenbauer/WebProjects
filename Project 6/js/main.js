// Email validation function
function validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Clear form function
function clearForm(formId, msgId) {
    document.getElementById(formId).reset();
    if (msgId) {
        document.getElementById(msgId).innerHTML = "";
    }
}

// Validation helper function
function showErrors(errors, msgId) {
    if (errors.length > 0 && msgId) {
        document.getElementById(msgId).innerHTML = errors.join("<br>");
    }
}

// Generic validation function (field presence and email checks)
function validateForm(fields, emailField, confirmEmailField, msgId) {
    let errors = [];

    // Check all required fields
    fields.forEach((field) => {
        let value = document.getElementById(field).value.trim();
        if (!value) {
            errors.push(`The ${field} field must be filled out.`);
        }
    });

    // Validate email format
    if (emailField && !validEmail(document.getElementById(emailField).value.trim())) {
        errors.push("Please enter a valid email address.");
    }

    // Match email confirmation
    if (
        emailField &&
        confirmEmailField &&
        document.getElementById(emailField).value.trim() !==
            document.getElementById(confirmEmailField).value.trim()
    ) {
        errors.push("The email addresses must match.");
    }

    // Show errors if any
    showErrors(errors, msgId);

    return errors.length === 0; // Return true if no errors
}
