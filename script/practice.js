let newButton = document.createElement("button");
newButton.innerText= "Click Me";

newButton.style.color = "white";
newButton.style.backgroundColor= "red";

document.querySelector("body").prepend(newButton);


// let para = document.getElementsByClassName("para");


let para=document.querySelector("p");


para.classList.add("newcls");


const btn = document.querySelector("#btn1"); 

btn.onclick = ()=>{
    console.log("button clicked");
    let a=25;
    console.log(++a);
};

let div2=document.getElementById("div2");

div2.onmouseover = ()=>{
    console.log("you are inside the div");
};



let changemode = document.querySelector("#change-mode");

let mode="light";

let body=document.querySelector("body");

changemode.addEventListener("click",()=>{ 
    if(mode==="light"){
        mode="dark";
        body.style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        mode="light";
        body.style.backgroundColor="white";

        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);

})
