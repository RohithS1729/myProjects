function callingProductAPI(){
    var url='https://5d76bf96515d1a0014085cf9.mockapi.io/product';
    fetch(url)
    .then(res=>res.json())
    .then(e=>createProduct(e))

}
callingProductAPI()

function createProduct(a){
    var searchId = window.location.search.split("=")[1];
    var numberId=parseInt(searchId)-1
    
    //get section
    var section=document.getElementById('section')
    var preview=document.createElement('img');
    preview.setAttribute('class','preview');
    preview.src=a[numberId].preview
    section.appendChild(preview)

    
    //heading
    var heading=document.getElementById('nameProduct');
    heading.innerHTML=a[numberId].name

    //brand
    var brand=document.getElementById('name');
    brand.innerHTML=a[numberId].brand

    //price
    var price=document.getElementById('price');
    price.innerHTML=a[numberId].price
    
    //description
    var descriptionProduct=document.getElementById('description')
    descriptionProduct.innerHTML=a[numberId].description


    //product images
    var productPreview=document.getElementById('product-preview')
        //create card
        

        for(i=0;i<a[numberId].photos.length;i++){

            var cardPreview=document.createElement('div')
            cardPreview.setAttribute('class','cardPreview')
            productPreview.appendChild(cardPreview)

            var urlPreview=a[numberId].photos[i]
            var imageCard=document.createElement('img');
            imageCard.setAttribute('class','imagePreviewSmall')
            imageCard.src=urlPreview
            cardPreview.appendChild(imageCard)

            //adding function
            // imageCard.setAttribute('onClick','changeImage()')
            
            imageCard.setAttribute('id',`${i}`)
            imageCard.setAttribute('onClick','getId(this)')
            // imageCard.setAttribute('onClick','changeBorder(this)')
            
          
        }
        

}

//add to cart

 //declare arrray
 
function addToCartEvent(){
    urlCart='https://5d76bf96515d1a0014085cf9.mockapi.io/product';
    fetch(urlCart)
    .then(res=>res.json())
    .then(e=>adding(e))

    
}

function adding(a){

    if(window.localStorage.getItem('product')==null){
        var cardData=[{placeholder:'placeholder'}];
        var cS=JSON.stringify(cardData);
        window.localStorage.setItem('product',cS)
        var res=window.localStorage.getItem('product');
        
    }else{
        var res=window.localStorage.getItem('product');
        
        
    }






    var searchId = window.location.search.split("=")[1];
    var numberId=parseInt(searchId)-1;

    var id=a[numberId].id
    var preview=a[numberId].preview
    var name=a[numberId].name
    var count;
    var amount=a[numberId].price

  


    //object declaration
        // declare object
    Data=new Object;
    Data['id']=id;
    Data['preview']=preview;
    Data['name']=name;
    Data['price']=amount
    

    //convert res
    
    convRes=JSON.parse(res)
    convRes.push(Data);
    

    //convert back
    backRes=JSON.stringify(convRes);
    
    window.localStorage.setItem('product',backRes)


    
 
}

var addToCart=document.getElementById('button-cart');
addToCart.addEventListener('click',()=>{
    
    addToCartEvent()
})



var button=document.getElementById('button-cart');
var numberCount=document.getElementById('cart-count');
var b;var sb;
button.addEventListener('click',()=>{
    if(window.localStorage.getItem('count')==null){
        console.log(window.localStorage.getItem('count'))       
        window.localStorage.setItem('count','1');
        var a=window.localStorage.getItem('count');
        numberCount.innerHTML=a;
        console.log('null ran')
    }else{
        var res=window.localStorage.getItem('count');
        b=Number(res);
        b=b+1;
        console.log(b)
        sb=JSON.stringify(b)
        window.localStorage.setItem('count',sb)
        numberCount.innerHTML=sb;
        console.log('else ran')
        
    }
})

console.log();
numberCount.innerHTML=window.localStorage.getItem('count')

function getId(a){
   
    var number
    var clickImage=document.getElementsByClassName('preview')
    var clickPreviewSmall=document.getElementsByClassName('imagePreviewSmall')
    // var ids=document.getElementById(`${number}`)
    number=(a.id)
    
    
    clickImage[0].src=clickPreviewSmall[number].src 

}


