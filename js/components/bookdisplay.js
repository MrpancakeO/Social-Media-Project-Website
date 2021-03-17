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
        
            <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink"> {{ this.bookObj.volumeInfo.title }} </a>
            <a class="list-group-item list-group-item-action active" :href="this.bookObj.saleInfo.buyLink"> <img class="thumbnail" :src= "this.bookObj.volumeInfo.imageLinks.smallThumbnail" style="align-items:center"> </a>
            
            <li class="list-group-item">  </li>
            
            <li class="list-group-item">By: {{this.bookObj.volumeInfo.authors.toString()}} </li>
            <li class="list-group-item"> Page count: {{ this.bookObj.volumeInfo.pageCount }}</li>
            <li class="list-group-item">{{ this.bookObj.volumeInfo.publisher }},{{this.bookObj.volumeInfo.publishedDate}}</li>
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