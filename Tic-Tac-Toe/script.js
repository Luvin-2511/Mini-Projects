
let boxes=document.querySelectorAll(".btn")
let playO=true;

Try.hidden=true

document.querySelector(".tick button").addEventListener("click",()=>{
    Try.hidden=true;
    boxes.forEach(box=> {
        box.innerHTML=''  ;
        box.disabled=false;
    });
    Winner = false;
    playO = true;
})


const possSol=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playO==true){
            box.innerHTML='O';
            playO=false;
        }else{
             box.innerHTML='X';
             playO=true;
        }
        box.disabled=true;

        checkWinner();
        buttondisable();
    })
})
let Winner=false;
const checkWinner=()=>{
    for (let pos of possSol) {
        const pos1 = boxes[pos[0]].innerHTML;
        const pos2 = boxes[pos[1]].innerHTML;
        const pos3 = boxes[pos[2]].innerHTML;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                if(playO === true){
                document.querySelector(".tick >h1").innerHTML="Winner - X"
                Winner=true
            }else{
                document.querySelector(".tick >h1").innerHTML="Winner - O"
                Winner=true
            }
        }
        }
        
    }
};
const buttondisable=()=>{
    if(Winner){
        Try.hidden=false;
    boxes.forEach(box => {
        box.disabled=true;
    });
}
}