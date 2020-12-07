var preview=document.getElementById("allmovies");
var bbdFilms=[];
var film=[];

function Movie(index) {
    this.preview=function(){
        var movie=document.createElement("div");
        movie.id='movie'+index;
        film=bbdFilms[index];
        console.log(film);
        movie.classList="col-12 col-sm-6 col-lg-3";
        var inMovie=document.createElement("div");
        inMovie.classList="movie my-3 mx-1";
        inMovie.innerHTML=`<h2>${film[title]}</h2>`;
        preview.appendChild(movie);
        movie.appendChild(inMovie);
        }
}



function generate(){

ajaxGet("https://api.themoviedb.org/3/movie/upcoming?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr&page=1&region=FR",
    function (reponse) {
        var allmovies = JSON.parse(reponse);
        console.log(allmovies);
        bbdFilms=allmovies.results;
        console.log(bbdFilms);
        })

var films=[];
for( var i=0; i<20; i++){
    // console.log(i);
    films[i]= new Movie(i);
    films[i].preview();

}
return films;
}

generate();