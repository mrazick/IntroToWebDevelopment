function validateForm() {
    var form = document.forms["contactForm"];
    var contactName = form.contactName.value;
    var contactEmail = form.contactEmail.value;
    var contactTel = form.contactTel.value;
    var contactReason = form.contactReason.value;
    var addlInfo = form.addlInfo.value;
    var hasVisited = form.hasVisited;
    var contactDays = form.contactDays;
    var validInput = true;


    if (contactName.length == 0) {
        validInput = false;
    }
    if (contactEmail.length == 0) {
        validInput = false;
    }
    if (contactTel.length == 0) {
        validInput = false;
    }
    if (contactReason.length == 0) {
        validInput = false;
    }
    if (addlInfo.length == 0) {
        validInput = false;
    }
    if (hasVisited.value == null) {
        validInput = false;
    }
    if (validateContactDays(contactDays) == false) {
        validInput = false;
    }

    if (validInput == true) {
        alert("Input is valid! Thank you for submitting your query, we will return your message within 24 hours.");
    }
    else {
        alert("Input is invalid! Please resolve, and resubmit.");
    }

    return false;
}

function validateContactDays(contactDays) {
    var checked = false;

    for (let i in contactDays) {
        if (contactDays[i].checked) {
            checked = true;
            break;
        }
    }
    return checked;
}