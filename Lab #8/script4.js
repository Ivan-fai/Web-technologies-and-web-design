function validateForm() {

    document.getElementById("err-surname").innerHTML = "";
    document.getElementById("err-name").innerHTML = "";
    document.getElementById("err-email").innerHTML = "";
    document.getElementById("err-password").innerHTML = "";

    let surname = document.getElementById("reg-surname").value.trim();
    let name = document.getElementById("reg-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let isValid = true;

    if (surname == "") {
        document.getElementById("err-surname").innerHTML = " *поле прізвища повинно бути заповнене";
        isValid = false;
    }

    if (name == "") {
        document.getElementById("err-name").innerHTML = " *поле імені повинно бути заповнене";
        isValid = false;
    }

    if (email == "") {
        document.getElementById("err-email").innerHTML = " *поле з електронною поштою повинно бути заповнене";
        isValid = false;
    } else if (!email.match(emailRegex)) {
        document.getElementById("err-email").innerHTML = " *впишіть правильний формат електронної пошти";
        isValid = false;
    }

    if (password == "") {
        document.getElementById("err-password").innerHTML = " *поле паролю повинно бути заповнене";
        isValid = false;
    }
    return isValid;
}