function addToCart(quentity,ProductName="elma") {
    console.log("sepete eklendi ürün :  "+ ProductName +" adet :" + quentity)
} 

addToCart()
addToCart(20)

addToCart(15,"yumurta")

//fonksiyon tanımlama şekli
let sayHello = ()=> {

    console.log("Hello World !");

}
 
sayHello();

let sayHello2 = function  () { 
    console.log("Hello World2");
    
}

sayHello2();

function addToCart2 (productName, quentity, unitPrice) {
    
}

addToCart2("elma",5,10);
addToCart2("armut",2,20);

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("adet : " + product.quentity)
    console.log("Fiyat : " + product.unitPrice)

}
let product1 ={productName:"Elma", unitPrice:10, quentity:5}

addToCart3(product1);

let product2 ={productName:"Elma", unitPrice:10, quentity:5}
let product3 ={productName:"Elma", unitPrice:10, quentity:5} 
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);
/*let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)*/


function addToCart4(x) {
    console.log(x)
   
   }
   let  products = [
     {productName:"Elma", unitPrice:10, quentity:5},
     {productName:"armut ", unitPrice:50, quentity:5},
     {productName:"karpuz", unitPrice:15, quentity:18},
   ]
    addToCart4(products)

     // rest operatörü toparlamaya yarar bir array haline getirir
    function add(bisey,...numbers) {  
       let total = 0;
        for (let i=0; i < numbers.length; i++){
        total = total + numbers[i];
        //console.log(numbers[i])
        }
        console.log(total);
        console.log(bisey);
    }
    
    
   //add(20,30)
    add(20,30,40)
   // add(20,30,40,50)

//spreat ayrıştırır diziyi ayırır
   let numbers = [30,10,100,20,50]
   console.log(... numbers)
   console.log(Math.max(...numbers))
//Destructuring
   let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,KaradenizSehirleri]] = [
       {name:"iç anadaolu", population: "20M"},
       {name:"marmara", population :"30M"},
       {name: "Karadeniz", population :"10M"},
       [
           ["Ankara","konya"],
           ["İstanbul","Bursa"],
           ["Trabzon","Sinop"]

       ]
    ];
    console.log(icAnadolu.name)
    console.log(icAnadolu.population)

    console.log(karadeniz.name)
    console.log(karadeniz.population)

    console.log(icAnadoluSehirleri)


    let {productName:newproductName, unitPrice:newUnitPrice,quentity:newQuentity} = {productName:"şeftali", unitPrice:1, quentity:50}
    console.log(newproductName)
    console.log(newUnitPrice)
    console.log(newQuentity) 