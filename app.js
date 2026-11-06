// let user = {
//   name: "Yunusali",
//   lastname: "Yunusov",
//   age:20,
//   role: "Student",
//   tell:"930532288",
//   isMerried: false,
//   address:{
//     country: "Uzbekistan",
//     city:"Kokand",
//   },
//   money:22,
//   car: null,
//   prava:null,
// };
// let user1 = user;
// user1.money = 0,
// console.log(user);


// let product ={
//     model: "samsung",
//     price: 10000,
//     stock: 25,
//     category: "Telefon",
// }
//  product.allprice =product.price * product.stock,
//  product.chegirma = product.allprice - ((product.allprice/100)*15),
// console.log(product);


function charcont(str){
    let sanoq ={};
  for(let i of str){
    if (sanoq[i]) {
        sanoq[i]+=1

        
    }else{
        sanoq[i]=1


    }
  }
  return sanoq;
}
console.log(charcont("Yunusali"));





