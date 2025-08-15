const boxes=document.querySelectorAll(".btn")


let Userchoice;
let Compchoice

const choose=()=>{
    Array.from(boxes).forEach(box=>{
        box.addEventListener("click",()=>{
            if((box.className).includes("rock")){
                Userchoice="Rock"
            }else if((box.className).includes("paper")){
                Userchoice="Paper"
            }else{
                Userchoice="Scissor"
            }
            console.log(`User chose : ${Userchoice}`)
            compchoose();
            Winner(Userchoice,Compchoice);
        })
    })
}

console.log(choose())

function compchoose(){
    let comp=Math.floor(Math.random()*3);
    if(comp==0){
        Compchoice="Rock"
    }else if(comp==1){
        Compchoice="Paper"
    }else{
        Compchoice="Scissor"
    }
    console.log(`Computer chose :${Compchoice}`)
}

let UserCount=0 
let CompCount=0 

function Winner(User,Comp){
    if(User == Comp){
        document.querySelector(".Winner h1").innerHTML=`It's a Draw!! 
        User:${User}
        Comp:${Comp}`
    }else if((User=="Paper" && Comp=="Rock") || (User=="Rock" && Comp=="Scissor") || (User=="Scissor" && Comp=="Paper")){
        document.querySelector(".Winner h1").innerHTML=`User Wins!!!
        User:${User}
        Comp:${Comp}`
        UserCount++
    }else if((User=="Scissor" && Comp=="Rock") || (User=="Rock" && Comp=="Paper") || (User=="Paper" && Comp=="Scissor")){
        document.querySelector(".Winner h1").innerHTML=`Computer Wins!!!
    User:${User}
        Comp:${Comp}`
        CompCount++
    }else{
        console.log("Sab Mzama")
    }
    document.querySelector(".you h1").innerHTML=`${UserCount}`
    document.querySelector(".comp h1").innerHTML=`${CompCount}`
}