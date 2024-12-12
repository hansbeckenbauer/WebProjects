// Email validation function
function validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Clear form function
function clearForm() {
    document.getElementById("titleForm").reset();
    document.getElementById("msg").innerHTML = "";
}

// Validation function
function validate(event) {
    event.preventDefault(); // Prevent form submission

    let errors = [];
    let title = document.getElementById("title").value.trim();
    let drink = document.getElementById("drink").value.trim();
    let pet = document.getElementById("pet").value.trim();
    let fictional = document.getElementById("fictional").value.trim();
    let real = document.getElementById("real").value.trim();
    let email = document.getElementById("email").value.trim();

    // Validate fields are non-empty
    if (!title || !drink || !pet || !fictional || !real || !email) {
        errors.push("All fields must be filled out.");
    }

    // Validate fictional and real places are not the same
    if (fictional === real) {
        errors.push("The fictional place and the real place cannot be the same.");
    }

    // Validate email format
    if (!validEmail(email)) {
        errors.push("Please enter a valid email address.");
    }

    // Display errors or submit the form
    if (errors.length > 0) {
        document.getElementById("msg").innerHTML = errors.join("<br>");
    } else {
        document.getElementById("titleForm").submit();
    }
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clearBtn").addEventListener("click", clearForm);
    document.getElementById("submitBtn").addEventListener("click", validate);
});
