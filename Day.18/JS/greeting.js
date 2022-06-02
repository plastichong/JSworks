let message = ["안녕하세요", "감사합니다", "오늘 좋은 하루!", "hello world"]

let msgIdx = 0;

myGreeting();

function myGreeting(){
    let greeting = document.getElementById("demo");
    greeting.innerHTML = message[msgIdx];

    
    msgIdx++;
    setTimeout(myGreeting,1000)
    if(msgIdx == message.length){
        msgIdx = 0;
    }

}



text.addEventListener