 let cart = [
     {id:1, productName:"telefon", quentity:3, unitPrice: 4000},
     {id:2, productName:"Bardak", quentity:2, unitPrice:30},
     {id:3, productName:"kalem", quentity:1, unitPrice: 20},
     {id:4, productName:"Şarj Cihazı", quentity:2, unitPrice: 100},
     {id:5, productName:"Kitap", quentity:3, unitPrice: 30},
     {id:1, productName:"Pot", quentity:5, unitPrice: 150}

 ]; 

 cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice * product.quentity)
 })
 


/*function addToCart(sepet) {
    cart.push({ id:7, productName:"Ruhsat", quentity:1, unitPrice: 20})
}

addToCart(cart)
 console.log(cart)

 let sayi = 10

 function sayiTopla(number) {
    number +=1
     
 }
//referans tip olmadığı için değer değişmez 
 sayiTopla(sayi)
 console.log(sayi)*/