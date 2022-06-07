let itemList = [];
let add = document.getElementById("add");
let item = document.getElementById("item");


add.addEventListener("click",function(){
    itemList.push(item.value);
    item.value = "";
    item.focus();
    console.log(itemList);
    
    showList();        
})

function showList(){
    let list = "<ul>";
    for (let i = 0; i < itemList.length; i++) {
        if(itemList[i]==""){
        }

    else{list += "<li>"+itemList[i]+"<span class = 'close' id ="+i+">x</span></li>"            
    }
    }
    list += "</ul>";

    document.getElementById("itemList").innerHTML = list;

    
    let removeList = document.querySelectorAll(".close");

    for (let i = 0; i < removeList.length; i++) {
        removeList[i].addEventListener("click",function(){
            console.log(this);
            let id = this.getAttribute("id");
            itemList.splice(id,1);
            showList();     
        })
    }
}