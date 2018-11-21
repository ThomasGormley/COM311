function validateForm() {
    if (validInput() && validEmail() && validPhone()) {
        printFields();
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

    let theInput = document.getElementById("phone").value;
    let theNumbersOnly = "";
    for (i = 0; i < theInput.length; i++) {
        theChar = theInput.substring(i, i + 1);
        if ((theChar >= "0") && (theChar <= "9")) {
            theNumbersOnly = theNumbersOnly + theChar;
        }
    }
    debugger
    if (theNumbersOnly.length < 11) {
        alert("Please enter a valid phone number \n11 digits long")
        return false;
    }
    else {
        return true;
    }
}

function printFields() {
    let studentname = document.getElementById("studentname").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let postcode = document.getElementById("postcode").value;
    let phoneno = document.getElementById("phone").value;
    let courseinfo = document.input.cinfo.value;
    let checkbox = document.input.cinfo.value;

    document.getElementById("textbox").innerHTML = studentname + ", welcome to my homepage! \n" +
        "The information you input is \n" +
        "Address: " + address + "\n" +
        "Email: " + email + "\n" +
        "Post code: " + postcode + "\n" +
        "Phone Number: " + phoneno + "\n" +
        "Course: " + courseinfo + "\n" +
        "All contact Methods are: " + checkbox;
}
