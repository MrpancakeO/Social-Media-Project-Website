const mongoose = require("mongoose");

function validateForm() {
    var txtSearch = document.querySelector("#txtSearch");
    var txtErrorMessage = document.querySelector("#txtErrorMessage");
    var formIsValid = true;
    if (txtSearch.value == "") {
        txtErrorMessage.classList.remove("invisible");
        txtErrorMessage.innerHTML = "Keyword must be inputted";
        txtSearch.classList.add("hasError");
        formIsValid = false;
    }
    else {
        txtErrorMessage.classList.add("invisible");
        txtErrorMessage.innerHTML = "";
        txtSearch.classList.remove("hasError");
    }
    return formIsValid;
}

const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            indexCurr: 0,
            started: false,
            
            noFirst: false
        }
    },
    methods: {


        searchGoogleBooks() {
            //this.indexCurr=0;
            this.started = true;
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=0&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        },
        nextSearch() {
            this.indexCurr = this.indexCurr + 20;
           
            this.noFirst=true;
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex" + this.indexCurr + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)

        },
        previousSearch() {

            this.indexCurr = this.indexCurr - 20;
            if (this.indexCurr <= 0) {
              
                this.noFirst=false;
            }

            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startindexCurr" + this.indexCurr + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        },
        reset() {
            this.keyword = '';
            this.result = null;
            this.indexCurr = 0;
            this.notFirst = false;
            this.started = false;
        }


    }






});