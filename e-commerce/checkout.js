var totalItems=document.getElementById('added-items');
console.log(totalItems)
totalItems.innerHTML=window.localStorage.getItem('count')



function getFromStorage(){
    var storage=window.localStorage.getItem('product');
    var parseObj=JSON.parse(storage);
    console.log(parseObj[0])
    //get div
    var totalItems=document.getElementById('added-items');


    for(i=1;i<parseObj.length;i++){
        //create card
    var card=document.createElement('div')
    card.setAttribute('class','card');
    totalItems.appendChild(card);

        //create image div
        var imageDiv=document.createElement('div');
        var image1=document.createElement('img');
        image1.setAttribute('class','lastImage')
        image1.src=parseObj[i].preview;
        imageDiv.appendChild(image1)

        //create writings div
        var writings=document.createElement('div');
            //create name
            var name1=document.createElement('div');
            name1.setAttribute('class','heading');
            name1.innerHTML=parseObj[i].name
            writings.appendChild(name1);

            //create price
            var productPrice=document.createElement('div');
            productPrice.setAttribute('class','price1');
            productPrice.innerHTML='Amount:'+' '+parseObj[i].price
            writings.appendChild(productPrice);
    
    //append image and writings
    card.appendChild(imageDiv);
    card.appendChild(writings)

    }
    var priceDiv=document.getElementById('totalAmount');

   
    var price1=0;
    for(i=1;i<parseObj.length;i++){

        price1=parseObj[i].price+price1

    }
    priceDiv.innerHTML=price1
    
       
}
getFromStorage()

var placeOrder=document.getElementById('placeOrder');
placeOrder.addEventListener('click',()=>{
    window.localStorage.clear()
})

