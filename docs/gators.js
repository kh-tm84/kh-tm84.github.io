'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function logEvent(event){
    console.log(event);
}

function butonClick(){
    const number2 = document.getElementById("number2");
    const gator = document.getElementById("gator");
    let value = "";

    for(let i=1; i <= number2.value; i++){
        if(i % 10 === 0){
            value += "🤓";
        }else{
            value += "🐊";
        }
    }
    gator.textContent = value;
}

//const tentacles = document.getElementById("number2");
//tentacles.addEventListener("click", logEvent);

const target = document.getElementById("button2");
target.addEventListener("click", butonClick);

