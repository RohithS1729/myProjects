

//calling api
function callingClothing(){
    var homeURL='https://5d76bf96515d1a0014085cf9.mockapi.io/product';
    fetch(homeURL)
    .then(res=>res.json())
    .then(e=>getDetails(e))
}
callingClothing();
function createCard(a){
    //calling conatiner
    var conatinerClothing=document.getElementById("container-clothing");  
    //card and anchor tag
    var card=document.createElement('div');
    card.setAttribute('class','card')
    // conatinerClothing.appendChild(card);
    var anchorLink=document.createElement('a');
    anchorLink.setAttribute('class','anchorCard')
    conatinerClothing.appendChild(anchorLink)
    anchorLink.appendChild(card);
    
    //id
    var ids;
    
    
    anchorLink.href="product.html?product_id=" + `${a[i].id}`


    //image
    var url=a[i].preview
    var imageTag=document.createElement('img');
    imageTag.setAttribute('class','imageTag');
    imageTag.src=url;
    card.appendChild(imageTag);


    //writings
    var writingsDiv=document.createElement('div');
    writingsDiv.setAttribute('class','writings');
    card.appendChild(writingsDiv)

        //heading
        var headingWritings=document.createElement('div');
        headingWritings.setAttribute('class','headingWritings');
        writingsDiv.appendChild(headingWritings)
        headingWritings.innerHTML=a[i].name

        //brand
        var brandWritings=document.createElement('div');
        brandWritings.setAttribute('class','bandWritings');
        writingsDiv.appendChild(brandWritings)
        brandWritings.innerHTML=a[i].brand


        //price
        var brandPrice=document.createElement('div');
        brandPrice.setAttribute('class','brandPrice');
        writingsDiv.appendChild(brandPrice)
        brandPrice.innerHTML=a[i].price



}

function getDetails(e){
    // console.log('success')
    for(i=0;i<5;i++){
        createCard(e)
    }

    
}

function callingAccessories(){
    var homeURL='https://5d76bf96515d1a0014085cf9.mockapi.io/product';
    fetch(homeURL)
    .then(res=>res.json())
    .then(e=>getDetailsAccesories(e))

}
callingAccessories()

function createCardAccessories(a){
    //calling conatiner
    var conatinerClothing=document.getElementById("container-accessories");  
    //card and anchor tag
    var card=document.createElement('div');
    card.setAttribute('class','card')
    // conatinerClothing.appendChild(card);
    var anchorLink=document.createElement('a');
    anchorLink.setAttribute('class','anchorCard')
    conatinerClothing.appendChild(anchorLink)
    anchorLink.appendChild(card);


    //id
    var ids;
    
    
    anchorLink.href="product.html?product_id=" + `${a[i].id}`


    //image
    var url=a[i].preview
    var imageTag=document.createElement('img');
    imageTag.setAttribute('class','imageTag');
    imageTag.src=url;
    card.appendChild(imageTag);


    //writings
    var writingsDiv=document.createElement('div');
    writingsDiv.setAttribute('class','writings');
    card.appendChild(writingsDiv)

        //heading
        var headingWritings=document.createElement('div');
        headingWritings.setAttribute('class','headingWritings');
        writingsDiv.appendChild(headingWritings)
        headingWritings.innerHTML=a[i].name

        //brand
        var brandWritings=document.createElement('div');
        brandWritings.setAttribute('class','bandWritings');
        writingsDiv.appendChild(brandWritings)
        brandWritings.innerHTML=a[i].brand


        //price
        var brandPrice=document.createElement('div');
        brandPrice.setAttribute('class','brandPrice');
        writingsDiv.appendChild(brandPrice)
        brandPrice.innerHTML=a[i].price
    

}


function getDetailsAccesories(e){
    for(i=5;i<10;i++){
        createCardAccessories(e)
    }
}






//storage

// if( window.localStorage.getItem('product')!==undefined){

//     allCart=window.localStorage.getItem('product')
//     console.log(allCart)
    // var newParseObj=JSON.stringify(allCart)
// }else{
//     var allCart=[];
//     window.localStorage.setItem('product',allCart)
// }



// var newParseObj=JSON.stringify(allCart)
// window.localStorage.setItem('product',newParseObj)
// console.log(window.localStorage.getItem('product'))


allCart=window.localStorage.getItem('product')