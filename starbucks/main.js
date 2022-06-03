let mainText = document.querySelector("h1")

window.addEventListener("scroll",function(){
    let value = this.window.scrollY
    console.log(value);

    if(value > 300){
        mainText.style.animation = "slideOut 1.2s ease-out forwards";
    }else{
        mainText.style.animation = "slideIn 1.2s ease-out";
    }
})