function validateInputs() {
    // Declaration of variables
    var SubmitForm;
    var FormErrors;

    // Initially set SubmitForm to true.
    SubmitForm = true;

    // Retrieve variables to be validated and sanitized.
    // Assume they are dangerous for now.
    var fullname = new String(document.MyForm.fullname.value);
    var email = new String(document.MyForm.email.value);
    var phoneNumber = new String(document.MyForm.phoneNumber.value);

    // Check that the user inputs are not blank.
    // JavaScript logical operator for OR: ||
    if (fullname.length < 1 || email.length < 1 || phoneNumber.length < 1) {
        FormErrors = "All fields are mandatory. Please complete the form.";
        SubmitForm = false;
    } else {
        // Set up a filter for the pattern of an email.
        var emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        // Use test() method to check user email against the filter.
        if (!emailFilter.test(email)) {
            FormErrors = "Your form contains invalid email. Please correct your form before submitting.";
            SubmitForm = false;
        }

        // Check that the phone number contains only numbers and dashes.
        var phoneFilter = /^[\d-]+$/;
        if (!phoneFilter.test(phoneNumber)) {
            FormErrors = "Your form contains invalid phone number. Please use only numbers and dashes.";
            SubmitForm = false;
        }
    }

    if (SubmitForm == false) {
        // The form cannot be submitted.
        alert(FormErrors);
        return false;
    } else {
        // Sanitize user inputs by allowing only [a-z 0-9 _ - . @].
        fullname = fullname.replace(/[^a-z0-9\s\-]/gim, "");
        fullname = fullname.trim();
        email = email.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gim, "");
        email = email.trim();
        phoneNumber = phoneNumber.replace(/[^0-9-]/g, "");
        phoneNumber = phoneNumber.trim();

        alert("Form successfully submitted!");

        document.MyForm.submit();
    }
}