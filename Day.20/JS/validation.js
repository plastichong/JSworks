let id = document.getElementById("user-id");
let pw1 = document.getElementById("user-pw1");
let pw2 = document.getElementById("user-pw2");

id.addEventListener("change", function(){
    if(id.value.length < 4 || id.value.length > 15)
    alert("4~15 자리의 영문과 숫자로 입력해 주세요")
    id.select();
})

pw1.addEventListener("change",function(){
        if(pw1.value.length < 8)
        alert("비밀번호는 8자 이상 입력하세요") 
        pw1.select();    
})


pw2.addEventListener("change",function(){
    if(pw1.value !== pw2.value)
    alert("비밀번호가 일치하지 않습니다")
    pw2.value = "";
    pw2.focus();
})
