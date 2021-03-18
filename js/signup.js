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
    var elements=document.getElementsByTagName("input");
    var invalidChars=["<",">","#","-","{","}","(",")","`","~","&quot",];
    for(let i=0;i<elements.length;i++){
        for(let j=0;j<invalidChars.length;j++){
            if(elements[i].value.indexOf(invalidChars[j]) !=-1){
                elements[i].classList.add("hasError");
                formIsValid=false;
            }
        }
        
    }
    return formIsValid;
}