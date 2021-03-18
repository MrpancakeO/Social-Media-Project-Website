function showQuestionText() {
    var selectQuestion = document.querySelector("#selectQuestion");
    var txtQuestion1 = document.querySelector("#txtQuestion1");
    if(selectQuestion.value !=""){
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

function validateForm() {
    var formIsValid=true;


    var Dob = document.querySelector("#txtDob");
    var divDobError = document.querySelector("#DobError");
    
    if (Dob.value == "") {
        //error
        divDobError.classList.remove("invisible");
        divDobError.innerHTML = "The Date of Birth can not be empty.";
        Dob.classList.add("hasError");
        formIsValid=false;
    }
    else {
        var DobDate = new Date(Dob.value);
        var todayDate = new Date();
        if (DobDate >= todayDate) {
            //error
            divDobError.classList.remove("invisible");
            divDobError.innerHTML = "The Date of Birth must be before today's date.";
            Dob.classList.add("hasError");
            formIsValid=false;
        }
        else{
            divDobError.classList.add("invisible");
        divDobError.innerHTML= "";
        Dob.classList.remove("hasError");
        }
    }


   
    var elements=document.getElementsByTagName("input");
    var invalidMessage=document.querySelector("#invalidMessage");
    var invalidChars=["<",">","#","{","}","(",")","`","~","&quot",];
    for(let i=0;i<elements.length;i++){
        for(let j=0;j<invalidChars.length;j++){
            if(elements[i].value.indexOf(invalidChars[j]) !=-1){
                elements[i].classList.add("hasError");
                formIsValid=false;
                invalidMessage.classList.remove("invisible");
            }
            else if(formIsValid){
                invalidMessage.classList.add("invisible");

            }
        }
        
    }
    return formIsValid;
}