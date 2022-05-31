let encodestr = "자바스크립트"
console.log(encodeURIComponent(encodestr));

let decodestr = encodeURIComponent(encodestr)
console.log(decodeURIComponent(decodestr));

let num1 = "32";
if(!isNaN(num1)){
    console.log("숫자");
}else{
    console.log("숫자 아님");
}

let str1 = "var num7 = 10"
let str2 = "var num8 = 20"

eval(str1);
eval(str2);

console.log(num7+num8);

console.log(eval("3-2"));
