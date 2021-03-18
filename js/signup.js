function func() {  

    $(document).ready(function () {

        $('#question').on('change', function () {

            if (this.value == 'What is your mothers maiden name?') {

                $("#text").show();

            }

            else if (this.value == 'What is you oldest brother middle name??') {

                $("#text").show();

            }

            else if (this.value == "What is your hometown?") {

                $("#text").show();

            }

            else {

                $("#text").hide();

            }


        });

    });

}
function showQuestionText(){
    var selectQuestion=document.querySelector("#selectQuestion");
    var txtQuestion1=document.querySelector("#txtQuestion1");
    if(selectQuestion.value !="----Please choose an option----"){
        txtQuestion1.classList.remove("invisible");
    }
    else{
        txtQuestion1.classList.add("invisible");
    }
}

function validateForm(){

}