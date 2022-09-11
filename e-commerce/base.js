if(window.localStorage.getItem('count')!==null){
    var curretNumber=document.getElementById('cart-count');
    var get=window.localStorage.getItem('count');
    curretNumber.innerHTML=get
}



// var button=document.getElementById('button-cart');
// var numberCount=document.getElementById('cart-count');
// var b;var sb;
// button.addEventListener('click',()=>{
//     if(window.localStorage.getItem('count')==null){
//         console.log(window.localStorage.getItem('count'))       
//         window.localStorage.setItem('count','1');
//         var a=window.localStorage.getItem('count');
//         numberCount.innerHTML=a;
//         console.log('null ran')
//     }else{
//         var res=window.localStorage.getItem('count');
//         b=Number(res);
//         b=b+1;
//         console.log(b)
//         sb=JSON.stringify(b)
//         window.localStorage.setItem('count',sb)
//         numberCount.innerHTML=sb;
//         console.log('else ran')
        
//     }
// })

// console.log();
// numberCount.innerHTML=window.localStorage.getItem('count')