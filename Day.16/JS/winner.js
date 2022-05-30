let member = 
parseInt(prompt("응모자 수 입력"));

let winner = new Array(5);
//당첨자 수 5명


// let pickedOne = Math.floor(Math.random()*member)+1;
// document.write("<p>전체 응모자 수 : "+member+"명</p>");
// document.write("<p>당첨차 "+pickedOne+"번</p>");

if(member == null){
    document.write("입력취소");
    }else{

        
        
        
        for(i=0;i<winner.length;i++){
            let pickedOne = Math.floor(Math.random()*member)+1;
            winner[i] = pickedOne;
            for(let j=0;j<i;j++){
                if(winner[j] == winner[i]){
                    i--;
                }
            }
            document.write(winner[i]+"번");
            
        }
    }
// console.log(winner);
