function showQuestionText() {
    var selectQuestion = document.querySelector("#selectQuestion");
    var txtQuestion1 = document.querySelector("#txtQuestion1");
    if(selectQuestion.value !="----Please choose an option----"){
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

}