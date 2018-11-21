function validateForm() {
    if (validInput() && validEmail() && validPhone()) {
        alert("Success");
    }
}


function validInput() {
    let name = document.getElementById("studentname");
    let address = document.getElementById("address");
    let email = document.getElementById("email");
    let postcode = document.getElementById("postcode");
    let phone = document.getElementById("phone");


    if (name.value == "" || !name.value) {
        alert("You must enter your name");
        name.focus();
        return false;
    }
    else if (address.value == "" || !address.value) {
        address.focus();
        alert("You must enter your address");
        return false;
    }
    else if (email.value == "" || !email.value) {
        alert("You must enter your email address");
        email.focus();
        return false;

    }
    else if (email.value !== "" || email.value) {
        return validateEmail()
    }
    else if (postcode.value == "" || !postcode.value) {
        alert("You must enter your postcode");
        postcode.focus();
        return false;
    }
    else if (phone.value == "" || !phone.value) {
        alert("You must enter your phone number");
        phone.focus();
        return false;
    }
    else {
        return true;
    }
}

function validEmail() {
    let email = document.getElementById("email").value;
    let atLoc = email.indexOf("@", 1);
    let dotLoc = email.indexOf(".", atLoc + 2);
    let len = email.length;
    let emailfocus = document.getElementById("email").focus();

    if ((atLoc > 0) && (dotLoc > 0) && (len > dotLoc + 2)) {
        return true;
    } else {
        alert("Please enter your e-mail address properly.");
        emailfocus;
        return false;
    }
}
function validPhone() {
    let input = document.getElementById("phone").value;

    for (i = 0; i < input.length; i++) {
        theChar = input.substring(i, i + 1);
        if ((theChar >= "0") && (theChar <= "9")) {
            numbersOnly = numbersOnly + theChar;
        }
    }
}
