  // function watch(){
        //     const DATE = new Date();
        //     let now = DATE.toLocaleTimeString();
        //     document.getElementById("display").innerHTML = now;
        // }
        let timer = setInterval(function(){
            const DATE = new Date();
            let now = DATE.toLocaleTimeString();
            document.getElementById("display").innerHTML = now;},
        1000);


        // function stop(){
        //   clearInterval(timer);
        // }
        let stop = document.getElementById("stop");

        stop.onclick = function(){
          sw = true;
          if(sw == true){
            clearInterval(timer);
            sw = false;
          }else if(sw == false){
           
              document.getElementById("display").innerHTML = timer;
   
          sw = true;
          }
        }