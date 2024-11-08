const requestURL ="json/documentaries.json";

window.onload = function() {
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 2000);
  };


async function fetchMoviesJson(){
    const response= await fetch(requestURL);
    const movies= await response.json();
    return movies;
}

 fetchMoviesJson().then(movies =>{
     for(let i=0;i<movies.documentaries.length;i++){
         const moviesSection= document.getElementById("movieSection");

         let id= movies.documentaries[i].id;
         let poster= movies.documentaries[i].poster;
         let title= movies.documentaries[i].title;
         let year= movies.documentaries[i].year;
         let length= movies.documentaries[i].length;
         let director= movies.documentaries[i].director;
         let season = movies.documentaries[i].season;
         let url=movies.documentaries[i].url;
         let synopsis= movies.documentaries[i].synopsis;

         moviesSection.innerHTML +=`
             <div class="card mx-auto mb-4 ${season}" style="width: 18rem;" >
                 <a href="${url}" target="_blank"><img src="${poster}" class="card-img-top mt-2  " alt="..." ></a>
                 <div class="card-body">
                 <h5 class="card-title">${title} - ${year}</h5>
                 <p class="card-text text-start">${synopsis}</p>
                 </div>
             </div>
         `
    }
 })

 function zFilter(){
    const superFilms=document.getElementsByClassName("Z");
    const zImage = document.getElementById("zLogo");
    const superImage = document.getElementById("superLogo");

    if(zImage.getAttribute("src") === "./images/Z-color.png"){
        zImage.setAttribute("src", "./images/Z-blanco-y-negro.png");
        
        for(let superFilm of superFilms){
            superFilm.style.display="none";
        }
        if((superImage.getAttribute("src") === "./images/super-blanco-y-negro.png")){
        
            const gokuThinking = document.querySelector("#goku-thinking-container");
            gokuThinking.style.display="block";
            
    
        }
    }else if(zImage.getAttribute("src") === "./images/Z-blanco-y-negro.png"){   
        zImage.setAttribute("src", "./images/Z-color.png");

        for(let superFilm of superFilms){
            superFilm.style.display="block";
        }
        
        const gokuThinking = document.querySelector("#goku-thinking-container");
        gokuThinking.style.display="none";
    }

 }

function superFilter(){
    const zFilms=document.getElementsByClassName("Super");
    const superImage = document.getElementById("superLogo");
    const zImage = document.getElementById("zLogo");

    if(superImage.getAttribute("src") === "./images/super-color.png"){
        superImage.setAttribute("src", "./images/super-blanco-y-negro.png");

        for(let zFilm of zFilms){
            zFilm.style.display="none";
        }
        if((zImage.getAttribute("src") === "./images/Z-blanco-y-negro.png")){
        
            const gokuThinking = document.querySelector("#goku-thinking-container");
            gokuThinking.style.display="block";
            
    
        }
    }else if(superImage.getAttribute("src") === "./images/super-blanco-y-negro.png"){   
        superImage.setAttribute("src", "./images/super-color.png");

        for(let zFilm of zFilms){
            zFilm.style.display="block";
        }

        const gokuThinking = document.querySelector("#goku-thinking-container");
        gokuThinking.style.display="none";
    } 
}

