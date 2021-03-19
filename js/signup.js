function showQuestionText() {
    var selectQuestion = document.querySelector("#selectQuestion");
    var txtQuestion1 = document.querySelector("#txtQuestion1");
    if (selectQuestion.value != "") {
        txtQuestion1.classList.remove("invisible");
    }
    // if(selectQuestion.value =="----Please choose an option----"){
    //     txtQuestion1.classList.add("invisible");
    // }

    // if (selectQuestion == "What is your mother's maiden name?") {
    //     txtQuestion1.classList.remove("invisible");
    // }
    // if (selectQuestion == "What is your oldest brother middle name?") {
    //     txtQuestion1.classList.remove("invisible");
    // }
    // if (selectQuestion == "What is your hometown?") {
    //     txtQuestion1.classList.remove("invisible");
    // }
    // else {
    //     txtQuestion1.classList.add("invisible");
    // }

    // else{
    //     txtQuestion1.classList.add("invisible");
    // }

}

var myInput = document.getElementById("passcpassword");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var passwordError = document.querySelector("#passwordError");


// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        passwordError.classList.add("invisible")
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
        passwordError.classList.remove("invisible")
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        passwordError.classList.add("invisible")
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        passwordError.classList.remove("invisible")
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        passwordError.classList.add("invisible")
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
        passwordError.classList.remove("invisible")
    }

   

}

function validateForm() {
    var formIsValid = true;

    var passcpassword = document.querySelector("#passcpassword");
    var passcpasswordConfirm = document.querySelector("#passcpasswordConfirm");
    var passwordMismatch = document.querySelector("#passwordMismatch");
    if (passcpassword.value != passcpasswordConfirm.value) {
        passwordMismatch.classList.remove("invisible");
        formIsValid = false;
    }
  




    var Dob = document.querySelector("#txtDob");
    var divDobError = document.querySelector("#DobError");

    if (Dob.value == "") {
        //error
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The Date of Birth can not be empty.";
        Dob.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var DobDate = new Date(Dob.value);
        var todayDate = new Date();
        if (DobDate >= todayDate) {
            //error
            divDobError.classList.remove("invisible");
            divDobError.innerHTML = "The Date of Birth must be before today's date.";
            Dob.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divDobError.classList.add("invisible");
            divDobError.innerHTML = "";
            Dob.classList.remove("hasError");
        }
    }



    var elements = document.getElementsByTagName("input");
    var invalidMessage = document.querySelector("#invalidMessage");
    var testerror = document.querySelector("testerror");
    var invalidChars = ["<", ">", "#", "{", "}", "(", ")", "`", "~", "&quot",];
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {
                
                elements[i].classList.add("hasError");
                invalidMessage.classList.remove("invisible");
                formIsValid = false;
                
            }
           
        }

    }
    return formIsValid;
}