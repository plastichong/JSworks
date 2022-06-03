let check = document.getElementById("shippingInfo");

let  billingName = document.getElementById("billingName");
let  billingTel = document.getElementById("billingTel");
let  billingAddr = document.getElementById("billingAddr");

let  shippingName = document.getElementById("shippingName");
let  shippingTel = document.getElementById("shippingTel");
let  shippingAddr = document.getElementById("shippingAddr");

check.addEventListener("click",function(){
    if(check.checked == true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{
        shippingName.value = ""
        shippingTel.value = ""
        shippingAddr.value = ""
    }

})