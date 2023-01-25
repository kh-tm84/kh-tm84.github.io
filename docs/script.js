'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function getPhotoData(){
    let word = document.getElementById("form2").value;
    let requestURL;

    const defaultKeyword = [
        'flower',
        'animal',
        'photo',
        'house',
        'restaurant',
        'food'
      ];
    
    if(word === ""){
        word = defaultKeyword[Math.floor(Math.random()*defaultKeyword.length)];
    }else{
        word = word.toLowerCase();
        word = word.replaceAll(/\s+/g, '');
    }
    requestURL = "https://api.unsplash.com/search/photos?query="+word+"&client_id="+API_KEY;　//検索ワード

    console.log("Form input word: " + word);
    console.log("requestURL: " + requestURL);
    
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const resOfAPI = request.response;
        showResponseImage(resOfAPI);
        console.log(resOfAPI);
    }
}

function showResponseImage(obj) {
    const resultObj = obj['results'];
    const imgNum = document.getElementById("number2");

    // console.log(resultObj[0].urls.regular);
    // console.log(imgNum.value);

    console.log(resultObj.length);

    if(imgNum.value > 0){
        for(let i=0; i<imgNum.value; i++){
            let child1 = document.createElement('a');
            child1.href = resultObj[i].links.html;
            unsplash.append(child1);

            let child = document.createElement('img');
            child.alt = resultObj[i].alt_description;
            child.src = resultObj[i].urls.regular;
            child1.append(child);
        }
    }else{
        for(const element of resultObj){
            let child1 = document.createElement('a');
            child1.href = element.links.html;
            unsplash.append(child1);

            let child = document.createElement('img');
            child.alt = element.alt_description;
            child.src = element.urls.regular;
            child1.append(child);
        }
    }
}


function butonClickSearch(){
    //表示画像のリセット
    const unsplash = document.getElementById("unsplash");
    for(let i=unsplash.childNodes.length-1; i >=0; i--){
        unsplash.removeChild(unsplash.childNodes[i]);
    }

    //画像検索/表示
    getPhotoData();
}

const target = document.getElementById("buttonSearch");
target.addEventListener("click", butonClickSearch);
