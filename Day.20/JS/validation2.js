let id = document.getElementById("user-id");
let pw1 = document.getElementById("user-pw1");
let pw2 = document.getElementById("user-pw2");

id.addEventListener("change", function(){
    if(id.value.length < 4 || id.value.length > 15)
    alert("4~15 자리의 영문과 숫자로 입력해 주세요")
    id.select();
})

let pwPatt = /[A-Za-z0-9]/
let pwPatt2 = /[~!@#$%^&*]/;

pw1.addEventListener("change",function(){
        if(pw1.value.length < 8 || !pwPatt.test(pw1.value) || !pwpatt2.test(pw1.value))
        alert("숫자,영 대.소문자, 특수문자 포함 8자 이상") 
        pw1.select();    
})


pw2.addEventListener("change",function(){
    if(pw1.value !== pw2.value)
    alert("비밀번호가 일치하지 않습니다")
    pw2.value = "";
    pw2.focus();
})


