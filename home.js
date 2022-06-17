
let slideShow = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4939/1094939-h-cc9f80956931","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5002/1275002-h-7b4cfa813a62","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4510/1274510-h-36b2ba26b63d"];

let i = 0;

let image_div = document.getElementById("inner-slide");

let img = document.createElement("img");

setInterval(function(){

    if(i == 3){
        i = 0;
    }

    img.src = slideShow[i];
    img.setAttribute("class", "slide_img")

    image_div.append(img);

    i++;
},3000);

// Search-Box Functionality

let id;


let movies_div = document.getElementById("movies");

async function searchMovies(q){

    try {
        let url = `http://www.omdbapi.com/?s=${q}&apikey=f4fe5243`

        let res = await fetch(url);
    
        let data = await res.json();
    
        return data.Search;
    } catch (error) {
        console.log(error);
    }
}

async function main(){

    let query = document.getElementById("search").value;
    
    let response = searchMovies(query);

    let data = await response;
    
    appendMovies(data);
}

function appendMovies(movies){

    movies_div.innerText = null;

    if(movies === undefined){
        return false;
    }

   movies.forEach(function(el){

    let p = document.createElement("p");
    p.innerText = el.Title;

    movies_div.append(p);
   })
}

function debounceFunction(func, delay){

    if(id){
        clearTimeout(id);
    }

  id = setTimeout(function(){

       func();

   }, delay);  

}