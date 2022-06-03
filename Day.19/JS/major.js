window.onload = function(){

    let select = document.testform.major;
    
    select.addEventListener("change",function(){
        let value = select.options[select.selectedIndex].innerText;
        // let value = document.getElementById("major").value;
        alert(value+"가 선택되었습니다.")
    })
}