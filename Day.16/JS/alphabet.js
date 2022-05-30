let alphabet = new Array(26);
let ch = "A"; //A == 아스키 코드 65
ch = ch.charCodeAt(0);


for(i=0;i<alphabet.length;i++){
    alphabet[i] = ch;
    ch++;
}
for(i=0;i<alphabet.length;i++){
    console.log(String.fromCharCode(alphabet[i]));
    document.write(String.fromCharCode(alphabet[i])+", ");
}


let arr = new Array(10)

for(i=0;i<10;i++){
    arr[i]= (i+1)*2;
    // if(i==8)break;
}
console.log(arr);
arr.push(11);