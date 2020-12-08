var preview=document.getElementById("allmovies");
var AllMovies=[];
var toto=[];
var films=[];
generate();


function generate(){
    
    console.log(toto);
    ajaxGet("https://api.themoviedb.org/3/movie/upcoming?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr&page=1&region=FR", function(reponse)
            {
        var toto=JSON.parse(reponse);
        console.log(toto);
        return toto;
            });
       console.log (toto);
        AllMovies=toto['results'];
        console.log(AllMovies);
            // console.log(bbdFilms);
       
   
    for( var i=0; i<20; i++)
        {
        console.log(i);
        films[i]= new Movie(i);
        films[i].preview();
        }
    return films;
    }


function ajaxGet(url, callback) {
    // var data;
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // data=JSON.parse(req.responseText);
            // console.log(req.responseText);
            callback(req.responseText)
            
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send();
    // return data;
}

function Movie(index) {
    this.preview=function(){
        // console.log(bbdFilms)
        var movie=document.createElement("div");
        movie.id='movie'+index;
        // film=bbdFilms[index];
        // console.log(film);
        movie.classList="col-12 col-sm-6 col-lg-3";
        var inMovie=document.createElement("div");
        inMovie.classList="movie my-3 mx-1";
        // inMovie.innerHTML=`<h2>${bbdFilms[index].title}</h2>`;
        preview.appendChild(movie);
        movie.appendChild(inMovie);
        }
}





