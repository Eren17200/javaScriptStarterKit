console.log("Merhaba Kodlama.io")

/*let dolarDun =9.21

let dolarBugun =9.30

console.log(dolarBugun)

const euroDun = 11
console.log(euroDun)

//array
//camelCasing
//PascalCasign

let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Krediler"]

console.log("<ul>")
for(let i= 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri [i]+"</li>")
    
}
console.log("</ul>")*/

/*let students = ["alp","eren","zeynep","ebrar"]
let students2 = [students, {id:1, name:"eren Sönmez"}, "ankara", {city:"bursa"}];
console.log(students2)*/

//rest
let showProduct = function (id,...product){
    console.log(id)
    console.log(product[2])

}

//console.log(typeof showProduct)
//showProduct(10,"Elma","Armut","Karpuz");
//let points = [15,25,36,85,45,65];
//spread oparetoru
/*console.log(...points)
console.log(Math.max(...points));
console.log(..."abc","d",..."efg","h")*/

//Destructuring
let populations =[10000,20000,30000,[50000,100000]]
let [small,medium,high,[veryHigh,maximum]]= populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction ([small1],number){
console.log(small1)

}

someFunction(populations)
 let category = {id:1, name:"içecek"}
 console.log(category.id)
 console.log(category["name"])
 
 let {id,name} = category

 console.log(id)
 console.log(name)


