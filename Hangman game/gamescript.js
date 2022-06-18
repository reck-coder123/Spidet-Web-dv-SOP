const input=document.getElementById("words");
const wrong=document.getElementById("Wrong");
const buton=document.getElementById("buton");
const popup=document.getElementById("game-message");
const final=document.getElementById("won");
const parts=document.querySelectorAll(".draw");

const words=[
    "beautifull",
    "progress",
    "default",
    "decrement",
    "greed",
    "positive"
]

let selectword= words[Math.floor(Math.random()*words.length)]

const incrct=[];
const crct=[];

function display(){
    input.innerHTML=`
    ${selectword.split("").map((letter)=> `<span class="letter">${crct.includes(letter)
    ? letter: ""}</span>`)
    .join("")
}`;


const innerword=input.innerText.replace(/\n/g,"")

if(innerword==selectword){
    final.innerText="Congratulations!! You saved a life:)";
    popup.style.display="flex";
    
}

}

function update_wrong(){
    wrong.innerHTML=`${incrct.length>0? "<p>Wrong</p>": ""}
    ${incrct.map(letter=> `<span>${letter}</span>`)}`;

    parts.forEach((part,index)=>{
        const errors=incrct.length;
        if(index<errors){
            part.style.display="block";
        }
        else{
            part.style.display="none"
        }
    });
    if(incrct.length===parts.length){
        final.innerText="You are hanged";
        popup.style.display="flex";
    }
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode>=65 && e.keyCode<=90){
        const letter=e.key;
        if(selectword.includes(letter)){
            if(!crct.includes(letter)){
                crct.push(letter);
                display();
            }
            
        }
        else{
            if(!incrct.includes(letter)){
                incrct.push(letter);

            }
        }
    }
})
display();