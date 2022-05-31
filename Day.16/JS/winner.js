let member = parseInt(prompt("응모자 수 입력"));
let winner = new Array(5);


if(member == null){
    document.write("입력취소");
}else{
        for(let i=0;i<winner.length;i++){
            let pickedOne = Math.floor(Math.random()*member)+1;
            winner[i] = pickedOne;
            for(let j=0;j<i;j++){
                if(winner[j] == winner[i]){
                    i--;
                }
            }
            
        }
    }
    
    document.write(winner+"<br>");

    const date = new Date();



