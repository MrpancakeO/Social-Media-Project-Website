function func() {  

    $(document).ready(function () {

        $('#question').on('change', function () {

            if (this.value == 'What is your mothers maiden name?') {

                $("#answer").show();

            }

            else if (this.value == 'What is you oldest brother middle name??') {

                $("#answer").show();

            }

            else if (this.value == "What is your hometown?") {

                $("#").show();

            }

            else {

                $("#answer").hide();

            }


        });

    });
    
}