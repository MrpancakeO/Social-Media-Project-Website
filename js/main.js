function validateForm(){
    var txtSearch=document.querySelector("#txtSearch");
    var txtErrorMessage=document.querySelector("#txtErrorMessage");
    var formIsValid=true;
    if(txtSearch.value==""){
        txtErrorMessage.classList.remove("invisible");
        txtErrorMessage.innerHTML = "Keyword must be inputted";
        txtSearch.classList.add("hasError");
        formIsValid=false;
    }
    else{
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
            index:0,
            total:null
        }
    },
    methods: {

        
        searchGoogleBooks() {
            this.index=0;
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex"+ this.index + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
                .then(json => this.total = json)
        },
        nextSearch(){

            this.index=this.index+20;
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex"+ this.index + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
                
        },
        previousSearch(){

            this.index = this.index - 20;
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex" + this.index + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        },
        reset() {
            this.keyword = ''
            this.result = null
        }
    }






});