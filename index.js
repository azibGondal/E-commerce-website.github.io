let list = document.getElementById("list");
list.addEventListener("click",function(){
    let list1 = document.getElementById("nav-items");
    console.log(list1);
    list1.classList.toggle("visibility-class");
    // alert("helo");
    
})

let page = document.getElementById("page");

page.addEventListener("click",function(){

    let age = prompt("enter your domain password");
   if(age == 123){
       page.setAttribute("href","uploadProduct.html");

   }
   else{
       alert("Incorrect Password Try again");
   }
    
    
})


let search = document.getElementById("search");

search.addEventListener("click",function(){

let searchbar = document.getElementById("dod");
dod.classList.toggle("javaclass");

    
})

let thk = document.getElementById("shopsse");

thk.addEventListener("click",function(){

alert("click on shop");

    
})