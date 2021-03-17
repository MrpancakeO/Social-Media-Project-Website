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