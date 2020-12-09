var Racine = document.getElementById("racine");
var CorpsSite=document.getElementById("MyMovies")
var preview=document.getElementById("allmovies");
var AllMovies=[];
var Upcoming=[];
var films=[];
var Moviedetails=[];
var MovieGuest=[];
var MovieVideo=[];
generate();


function generate(){
    modal = new Modal();
    modal.content(); 
    var HeaderMovie=document.createElement("h1");
    HeaderMovie.textContent="A l'affiche prochainement";
    CorpsSite.append(HeaderMovie);
    var HeaderCarousel=document.createElement("div");
    HeaderCarousel.classList="carousel"
    CorpsSite.append(HeaderCarousel);
    var RowCarousel= document.createElement("div")
    RowCarousel.classList="carousel-row"
    RowCarousel.id="allmovies"
    HeaderCarousel.append(RowCarousel);
    
    Upcoming=ajaxGet("https://api.themoviedb.org/3/movie/upcoming?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr&page=1&region=FR");
    AllMovies=Upcoming['results'];
    console.log(AllMovies);
    
       for( var i=0; i<AllMovies.length; i++)
        {
        films[i]= new Movie(i);
        films[i].preview();
        }
    return films;
    }



function Movie(index) {
    // this.title=AllMovies[index].title;
    this.urlposter="'https://image.tmdb.org/t/p/w500"+AllMovies[index].poster_path+"'";
    this.Idmovie=AllMovies[index].id;
    // this.overview=AllMovies[index].overview;
    // console.log(this.urlposter)
    this.preview=function(){
        var preview=document.getElementById("allmovies");
        var movie=document.createElement("div");
        movie.id='movie'+index;
        movie.classList="col-12 col-lg-4 carousel-tile";
        var inMovie=document.createElement("div");
        inMovie.classList="movie justify-content-center my-3 mx-1";
        inMovie.style.backgroundImage='url('+this.urlposter+')';
        inMovie.style.backgroundSize="100% auto"
        preview.appendChild(movie);
        movie.appendChild(inMovie);
        // génération contenu Modal
        movie.onclick = GenerateModalDetails(this.Idmovie)
        }
}

//Génération de la Modal
function Modal() {
    this.content = function () {
        //Génération de la modal
        var modal = document.createElement("div");
        Racine.append(modal);
        modal.id = "Moviedetail";
        modal.classList = "modal faded";
        modal.style.display = "block";
        modal.style.zIndex = "-1";
        //Génération de la modal content
        var modalContent = document.createElement("div");
        modal.append(modalContent);
        modalContent.classList = "modal-content";
        //Génération du bouton close
        var close = document.createElement("span");
        modalContent.append(close);
        close.classList = "close";
        close.innerHTML = "&times;";
        //Génération du titre de la Modal
        var h1 = document.createElement("h2");
        modalContent.append(h1);
        h1.id = "titre";
        //Génération de la div qui accueille la présentation du film
        var para = document.createElement("div");
        modalContent.append(para);
        para.id = "modalContent";
    }
}

function GenerateModalDetails(id) 
{
    return function() 
    {
        Moviedetails=ajaxGet("https://api.themoviedb.org/3/movie/"+id+"?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr");
        MovieGuest=ajaxGet("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr");
        MovieVideo=ajaxGet("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr");    
        var para=document.getElementById("modalContent")
        var Guest=MovieGuest['cast'];
        var video=MovieVideo['results'];
        var modal = document.getElementById("Moviedetail");
        var span = document.getElementsByClassName("close")[0];
        var titre = document.getElementById("titre");
        modal.classList.toggle("show");
        modal.style.zIndex = "1";
        para.innerHTML="";
        titre.textContent = Moviedetails.title
        // création du synopsis : affiche + résumé + date de sortie
        var synopsis=document.createElement("div");
        synopsis.id="synopsis";
        synopsis.style.display="flex";
        synopsis.innerHTML='<img src="https://image.tmdb.org/t/p/w154/'+Moviedetails.poster_path+'"><div class="px-3"><h3>Synopsis</h3><p>'+Moviedetails.overview+'</p><h3>Date de sortie</h3><p>'+Moviedetails.release_date+'</p></div>';
        para.append(synopsis);
        // création de la liste des acteurs principaux
        var h3acteur=document.createElement("h3");
        h3acteur.textContent="Acteurs principaux";
        para.append(h3acteur);
        var actors=document.createElement("div");
        actors.id="actors"
        actors.style.display="flex";
        for(var i=0;i<5;i++)
        {
            var actor=document.createElement("div");
            actor.id="actor"+i;
            actor.classList="mx-2"
            actor.style="text-align: center";
            actor.innerHTML='<img src="https://image.tmdb.org/t/p/w92/'+Guest[i].profile_path+'"><p>'+Guest[i].name+'</p>'
            actors.append(actor);
        }
        para.append(actors);
        // création du trailer
        var trailer=document.createElement("div");
        trailer.style="text-align: center"
        trailer.innerHTML='<iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/'+video[0].key+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'    
        para.append(trailer);
        
        span.onclick = function () 
        {
            modal.classList.toggle("show");
            modal.style.zIndex = "-1";
            
        }   
        return false;
    }
}

