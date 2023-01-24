'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//import API_KEY from './my-setting';
API_KEY["acc"] = "OEuNTh4xAe9sJOv6fo0X-tGNpPPZqBLW_k4jCndU9aQ";
API_KEY["sec"] = "SeKCQg0kJCrmw5cNy4E_648jIrxxhiSdqAqyVWMp-WQ";

function logEvent(event){
    console.log(event);
}

function butonClickGator(){
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

// const targetGator = document.getElementById("button2");
// targetGator.addEventListener("click", butonClickGator);

const resOfAPI = [];

function getPhotoData(){
    let word = "cat"; //検索ワード
    let requestURL = "https://api.unsplash.com/search/photos?query="+word+"&client_id="+API_KEY["acc"];
    
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        resOfAPI = request.response;
        console.log(resOfAPI);
        //return resOfAPI;
    }

    return request;
}

function butonClickSearch(){
    // const resOfAPI = getPhotoData();
    getPhotoData();

    const urlRandom1 = 'https://source.unsplash.com/random';
    const urlRandom2 = 'https://source.unsplash.com/random';
    // const urlKeyword = 'https://source.unsplash.com/featured/?food,yellow';
    const urlKeyword = 'https://source.unsplash.com/featured/900x700/?food,yellow';
    
    const imgNum = document.getElementById("number2");
    const unsplash = document.getElementById("unsplash");

    //表示画像のリセット
    for(let i=unsplash.childNodes.length-1; i >=0; i--){
        unsplash.removeChild(unsplash.childNodes[i]);
    }

    // //画像表示(回数指定)
    // for(let i=0; i <= imgNum.value-1; i++){
    //     let child = document.createElement('img');
    //     child.src = urlKeyword;
    //     // if(i%2===0){
    //     //     child.src = urlKeyword;
    //     // }else{
    //     //     child.src = urlRandom2;
    //     // }
    //     unsplash.append(child);
    // }

    //画像表示（10枚表示：API最大数
    let child = document.createElement('img');
    //console.log(resOfAPI.response.results);
    // for(const element of resOfAPI.response.results){
    //     child.src = element.urls.regular;
    //     unsplash.append(child);
    // }
    for(let i=0; i<4; i++){
        child.src = resOfAPI[i].urls.regular;
        unsplash.append(child);
    }

}

const target = document.getElementById("buttonSearch");
target.addEventListener("click", butonClickSearch);
