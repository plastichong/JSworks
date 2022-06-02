let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small")

for(i=0;i<smallPics.length;i++){
    smallPics[i].addEventListener("click",function(){
        let newPic = this.src;
    bigPic.setAttribute("src", newPic);
    })
}


let view = document.getElementById("view");
let detail = document.getElementById("detail");
let sw = true;

view.addEventListener("click",function(){
    if(sw == true){
        detail.style.display = "block"
        view.innerText = "상세 성멸 닫기"
        sw = false;
    }else if(sw == false){
        detail.style.display = "none"
        view.innerText = "상세 성멸 보기"
        sw = true;
    }
})