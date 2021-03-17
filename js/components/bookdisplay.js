function lister(list){
    var str="";

    for(var i=0;i<list.length;i++){
        str+=str+" " + list[i];
    }

return str;
}

app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        <!--<picture><img src="this.bookObj.volumeInfo.imageLinks.thumbnail" style="width:auto;"></picture>-->
        
            <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink"><b>{{ this.bookObj.volumeInfo.title }}</b>  </a>
            <a class="list-group-item list-group-item-action active" :href="this.bookObj.saleInfo.buyLink"> <img class="thumbnail" :src= "this.bookObj.volumeInfo.imageLinks.smallThumbnail" style="width:150px;height:200px;"><b v-if="this.bookObj.saleInfo.buyLink != undefined">(Click the Image to Buy)</b> </a>
            
            <li class="list-group-item" v-if="this.bookObj.volumeInfo.authors != undefined">By: {{this.bookObj.volumeInfo.authors.toString()}} </li>
            <li class="list-group-item" v-if="this.bookObj.saleInfo.listPrice != null"> Cost: $ {{this.bookObj.saleInfo.listPrice.amount}}</li>
            <li class="list-group-item" v-if="this.bookObj.volumeInfo.averageRating != null"> Average Rating: {{ this.bookObj.volumeInfo.averageRating }} /5</li>
            <li class="list-group-item" v-if="this.bookObj.volumeInfo.publisher != undefined">Publisher: {{ this.bookObj.volumeInfo.publisher }}, {{this.bookObj.volumeInfo.publishedDate}}</li>
            <li class="list-group-item" v-if="this.bookObj.volumeInfo.publishedDate != undefined">Date Published: {{this.bookObj.volumeInfo.publishedDate}}</li>
        </ul>`,
    computed:{
        bookObj(){
            if(this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        }
    }


})