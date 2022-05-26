let cart = new Array(5);

cart = ["생수", "라면", "커피", "계란", "쌀"];

console.log("cart.length = "+cart.length);

cart[3] = "사과";

delete cart[1];

document.write(cart[2]+"<br><br>");

for(i=0;i<cart.length;i++){
    document.write(cart[i]+" ");
}
console.log(cart);











