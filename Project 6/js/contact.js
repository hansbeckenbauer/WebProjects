$(document).ready(function () {
    // Clear Form
    $('#clearBtn').on('click', function () {
        $('#email-form')[0].reset();
        $('#msg').text('');
    });

    // Submit Form with Validation
    $('#sendBtn').on('click', function (event) {
        event.preventDefault(); // Prevent default form submission
        let errors = [];
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let emailConfirm = $('#email-confirm').val().trim();
        let subject = $('#subject').val().trim();
        let message = $('#message').val().trim();

        // Check required fields
        if (!name || !email || !emailConfirm || !subject || !message) {
            errors.push('All fields must be filled out.');
        }

        // Validate email
        if (!validEmail(email)) {
            errors.push('Please enter a valid email address.');
        }

        // Match emails
        if (email !== emailConfirm) {
            errors.push('Email addresses must match.');
        }

        // Show errors or submit form
        if (errors.length > 0) {
            $('#msg').html(errors.join('<br>'));
        } else {
            $('#email-form').submit();
        }
    });
});
