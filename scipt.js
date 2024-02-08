let boxes = document.querySelectorAll(".box");
let message = document.querySelector(".message")
let userscorepara = document.querySelector("#scoreofyou")
let compscorepara = document.querySelector("#scoreofpara")
let t= document.querySelector(".t")

let yourscore = 0;
let compscore = 0;

let score1 = boxes.forEach((box)=>{
   box.addEventListener("click", ()=>
   {
    let userchoice = box.getAttribute("id")
   playgame(userchoice)
   })
});

let playgame = ((userchoice) =>
{
    console.log("User's choice",userchoice);
     let compchoice = score2()
     console.log("comp's choice",compchoice);

     if(userchoice==compchoice)
     {
        console.log("gam is draw")
       t.innerText="Game is a Draw. Play again."
        t.style.backgroundColor="#465775"
        t.style.color="white"
     }
     else{
        let turn1 = true;
        if (userchoice=="stone")
        {
           turn1= compchoice=="paper" ? false :true
        }
        else if(userchoice=="paper")
        {
            turn1= compchoice=="scissors"? false: true
        }
        else{
            turn1=compchoice=="rock"? false:true
        }
        showwinner(turn1,compchoice,userchoice)
     }
    
});

let showwinner = (turn1,userchoice,compchoice)=>
{
    if(turn1)
    {
        console.log("you win")
        yourscore++;
        userscorepara.innerText=yourscore
        t.innerText=`Ah! you Won your choice ${userchoice} beats comp choice ${compchoice} ek or ho jaye.!`
         t.style.backgroundColor="#59C9A5"
          t.style.color="black"

    }
    else{
        console.log("you lost")
        compscore++
        compscorepara.innerText=compscore
        t.innerText=`Sorry.!  comp choice ${compchoice} beats your choice ${userchoice} ek or ho jaye.!`
        t.style.backgroundColor="#EF6F6C"
        t.style.color="black"
    }
}
let score2 = ()=>
{
 let choice=["stone","paper","scissor"]
 let random = Math.floor(Math.random()*3);
  return choice[random]
 
}