let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small")

for(i=0;i<smallPics.length;i++){

    // smallPics[i].onclick = showBig;
    smallPics[i].addEventListener("click",function(){
        let newPic = this.src;
    bigPic.setAttribute("src", newPic);
    })
}

// function showBig(){
//     let newPic = this.src;
//     bigPic.setAttribute("src", newPic);
// }