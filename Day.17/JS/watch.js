  // function watch(){
        //     const DATE = new Date();
        //     let now = DATE.toLocaleTimeString();
        //     document.getElementById("display").innerHTML = now;
        // }
        setInterval(function(){
            const DATE = new Date();
            let now = DATE.toLocaleTimeString();
            document.getElementById("display").innerHTML = now;},
        1000);