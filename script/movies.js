var preview=document.getElementById("allmovies");
var AllMovies=[];
var toto=[];
var films=[];
generate();


function generate(){
    
    ajaxGet("https://api.themoviedb.org/3/movie/upcoming?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr&page=1&region=FR", function(reponse)
            {
        var toto=JSON.parse(reponse);
        AllMovies=toto['results'];
        console.log(AllMovies);
        for( var i=0; i<20; i++)
        {
        films[i]= new Movie(i);
        films[i].preview();
        }
        return films;
     
            });
}


function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText)
            
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send();
   
}

function Movie(index) {
    this.title = AllMovies[index].title
    this.urlaffiche=AllMovies[index].poster_path;
    this.preview=function(){
        // console.log(AllMovies)
        var movie=document.createElement("div");
        movie.id='movie'+index;
        movie.classList="col-12 col-sm-6 col-lg-3";
        var inMovie=document.createElement("div");
        inMovie.classList="movie my-3 mx-1";
        inMovie.innerHTML=`<h2>${this.title}</h2>`;
        preview.appendChild(movie);
        movie.appendChild(inMovie);
        }
}





