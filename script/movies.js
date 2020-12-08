var Racine = document.getElementById("racine");
var preview=document.getElementById("allmovies");
var AllMovies=[];
var Upcoming=[];
var films=[];
generate();


function generate(){
    
    
    Upcoming=ajaxGet("https://api.themoviedb.org/3/movie/upcoming?api_key=d5547c6cdbe3cbaed33b74459d673b62&language=fr-fr&page=1&region=FR");
    AllMovies=Upcoming['results'];
    console.log(AllMovies);
    modal = new Modal();
    modal.content(); 
       for( var i=0; i<20; i++)
        {
        // console.log(i);
        films[i]= new Movie(i);
        films[i].preview();
        }
    return films;
    }



function Movie(index) {
    this.title=AllMovies[index].title;
    this.urlposter="'https://image.tmdb.org/t/p/w500"+AllMovies[index].poster_path+"'";
    this.Idmovie=AllMovies[index].id;
    this.overview=AllMovies[index].overview;
    // console.log(this.urlposter)
    this.preview=function(){
        
        var movie=document.createElement("div");
        movie.id='movie'+index;
       
        movie.classList="col-12 col-lg-4 carousel-tile";
        var inMovie=document.createElement("div");
        inMovie.classList="movie justify-content-center my-3 mx-1";
        // inMovie.innerHTML=`<h2>${this.title}</h2>`;
        // inMovie.innerHTML='<img src='+this.urlposter+' alt="affichefilm" style="width:auto; max-height:350px">'
        inMovie.style.backgroundImage='url('+this.urlposter+')';
        inMovie.style.backgroundSize="100% auto"
        preview.appendChild(movie);
        movie.appendChild(inMovie);
        // génération contenu Modal
        movie.onclick = makeOnClickCallback(this.title,this.overview)
        // movie.onclick=function(){
        //     var modal = document.getElementById("exampleModalLive");
        //     var span = document.getElementsByClassName("close")[0];
        //     var modalContent = document.getElementById("modalContent");
        //     var titre = document.getElementById("titre");
        //     modal.classList.toggle("show");
        //     modal.style.zIndex = "1";
        //     modalContent.textContent = 'WTF';
        //     titre.innerHTML = '<h2>BIG WTF</h2>';
        
        //     span.onclick = function () {
        //         modal.classList.toggle("show");
        //         modal.style.zIndex = "-1";}    
        // }
}
}

//Génération de la Modal
function Modal() {
    this.content = function () {
        //Génération de la modal
        var modal = document.createElement("div");
        Racine.append(modal);
        modal.id = "exampleModalLive";
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
        //Génération du paragraphe qui accueillera le cadeau
        var para = document.createElement("p");
        modalContent.append(para);
        para.id = "modalContent";
    }
}

function makeOnClickCallback(title,overview) 
{
    return function() 
    {
        console.log(title)
        console.log(overview)       
        var modal = document.getElementById("exampleModalLive");
        var span = document.getElementsByClassName("close")[0];
        var modalContent = document.getElementById("modalContent");
        var titre = document.getElementById("titre");
        modal.classList.toggle("show");
        modal.style.zIndex = "1";
        modalContent.innerHTML = '<p>'+overview+'</p>';
        titre.innerHTML = '<h2>'+title+'</h2>'
    
        span.onclick = function () 
        {
            modal.classList.toggle("show");
            modal.style.zIndex = "-1";
        }   
        return false;
    }
}

