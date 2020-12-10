var AdventCalendar = document.getElementById("calendar");
var cadeau = document.getElementById("cadeau");
var currentDate = new Date();

var adventBox = [{
    id : 1,
        title: "Quand on comprend que le commit du stagiaire vient de supprimer toutes les données de prod",
        content: "<video autoplay='' loop='' muted='' playsinline=''><source src='https://lesjoiesducode.fr/content/018/im5BAc0sgAIou.webm' type='video/webm'><source src='https://lesjoiesducode.fr/content/018/im5BAc0sgAIou.mp4' type='video/mp4'><object data='https://lesjoiesducode.fr/content/018/im5BAc0sgAIou.gif' type='image/gif'></object></video>",
      
    },
    {
        id : 2, 
        title: "Quand il y a une erreur ligne 237 mais que j’ai écrit que 45 lignes de code",
        content: '<video autoplay="" loop="" muted="" playsinline=""><source src="https://lesjoiesducode.fr/content/041/yGonyiy.webm" type="video/webm"><source src="https://lesjoiesducode.fr/content/041/yGonyiy.mp4" type="video/mp4"><object data="https://lesjoiesducode.fr/content/041/yGonyiy.gif" type="image/gif"></object></video>',
       
    },
    {
        id: 3,
        title: "Quand j’ouvre ma boîte mail après 2 semaines de vacances",
        content: '<video autoplay="" loop="" muted="" playsinline=""><source src="https://lesjoiesducode.fr/content/030/uLhzDfg.webm" type="video/webm"><source src="https://lesjoiesducode.fr/content/030/uLhzDfg.mp4" type="video/mp4"><object data="https://lesjoiesducode.fr/content/030/uLhzDfg.gif" type="image/gif"></object></video>'
    },
    {
        id: 4,
        title: "Quand on m’annonce qu’un projet doit être compatible ie6",
        content: '<video autoplay="" loop="" muted="" playsinline=""><source src="https://lesjoiesducode.fr/content/012/cQEBX.webm" type="video/webm"><source src="https://lesjoiesducode.fr/content/012/cQEBX.mp4" type="video/mp4"><object data="https://lesjoiesducode.fr/content/012/cQEBX.gif" type="image/gif"></object></video>'
    },
    {
        id: 5,
        title: "",
        content: '',
        img: 'img/5.png'
    },
    {
        id: 6,
        title: "",
        content: '',
        img: 'img/6.png'
    },
    {
        id: 7,
        title: "",
        content: '',
        img: 'img/7.png'
    },
    {
        id: 8,
        title: "",
        content: '',
        img: 'img/8.png'
    },
    {
        id: 9,
        title: "",
        content: '',
        img: 'img/9.png'
    },
    {
        id: 10,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 11,
        title: "",
        content: '',
        img: 'img/11.png'
    },
    {
        id: 12,
        title: "",
        content: '',
        img: 'img/12.png'
    },
    {
        id: 13,
        title: "",
        content: '',
        img: 'img/13.png'
    },
    {
        id: 14,
        title: "",
        content: '',
        img: 'img/14.png'
    },
    {
        id: 15,
        title: "",
        content: '',
        img: 'img/15.png'
    },
    {
        id: 16,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 17,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 18,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 19,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 20,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 21,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 22,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 23,
        title: "",
        content: '',
        img: 'img/10.png'
    },
    {
        id: 24,
        title: "",
        content: '',
        img: 'img/10.png'
    },

];

function Logo() {
    this.content = function () {
        var logo = document.createElement("div");
        AdventCalendar.append(logo);
        logo.id = 'logo';
        logo.classList = 'col-12 col-md-6 col-lg-6 justify-content-center door-container-title-inner';
        var logoh1 = document.createElement("h1");
        logo.append(logoh1);
        logoh1.innerHTML = 'Advent Calendar';
        var logopara = document.createElement("p");
        logo.append(logopara);
        logopara.classList = 'text-right';
        logopara.innerHTML = 'We wish you a merry Christmas';
    }
}

//Génération de la Modal
function Modal() {
    this.content = function () {
        //Génération de la modal
        var modal = document.createElement("div");
        AdventCalendar.append(modal);
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

//Je génère un objet Case
function Box2(AdventCalendar, day) {

    this.content = function () {
        //Génération des cases
        var box = document.createElement("div");
        AdventCalendar.appendChild(box);
        box.id = "box" + day;
        var dayNumber = document.createElement("div");
        box.append(dayNumber);
        dayNumber.classList = "daynumber";
        dayNumber.innerHTML = day;
        box.classList = "col-4 col-md-6 col-lg-2 justify-content-center box";

        box.onclick = function () {
            var modal = document.getElementById("exampleModalLive");
            var span = document.getElementsByClassName("close")[0];
            var modalContent = document.getElementById("modalContent");
            var titre = document.getElementById("titre");



            modal.classList.toggle("show");
            modal.style.zIndex = "1";



            span.onclick = function () {

                modal.classList.toggle("show");
                modal.style.zIndex = "-1";

            }

            modalContent.innerHTML = adventBox[day - 1].content;
            titre.innerHTML = "Jour " + day + " - " + adventBox[day - 1].title;

        }

    }
}


//Je génère un objet Case
function Box(AdventCalendar, day) {

    this.content = function () {
        //Génération des cases
        var box = document.createElement("div");
        AdventCalendar.appendChild(box);
        box.id = "box" + day;
        var dayNumber = document.createElement("div");
        box.append(dayNumber);
        dayNumber.classList = "daynumber";
        var boxSaved = localStorage.getItem(box.id);
        dayNumber.innerHTML = day;
        if (boxSaved != null) {
            box.classList = "col-4 col-md-6 col-lg-2 justify-content-center box opened";
        } else {
            box.classList = "col-4 col-md-6 col-lg-2 justify-content-center box";
        }



        box.onclick = function () {
            var modal = document.getElementById("exampleModalLive");
            var span = document.getElementsByClassName("close")[0];
            var modalContent = document.getElementById("modalContent");
            var titre = document.getElementById("titre");




            modal.classList.toggle("show");
            modal.style.zIndex = "1";



            span.onclick = function () {

                modal.classList.toggle("show");
                modal.style.zIndex = "-1";
                if ((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
                    box.classList = "col-4 col-md-6 col-lg-2 justify-content-center box";
                } else {
                    localStorage.setItem(box.id, "open");
                    box.classList = "col-4 col-md-6 col-lg-2 justify-content-center box opened";
                }

            }


            if ((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
                let dayslef = day - currentDate.getDate();
                    if(dayslef==1){
                        modalContent.innerHTML = "<p class='text-center m-0 dayleft'>Revenez demain</p>"
                    }
                    else{
                        modalContent.innerHTML = "<p class='text-center m-0 dayleft'>Revenez dans <span class='red'>"+dayslef+" jours</span></p>"
                    }
            }
            else{
                modalContent.innerHTML = adventBox[day - 1].content; 
            }



            if ((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
                titre.innerHTML = "";

            }
            else{
                titre.innerHTML = "Jour " + day + " - " + adventBox[day - 1].title;

            }

            
            
           
        }

    }
}

//Je crée une fonction qui va générer des cases autant de fois que souhaité
function generate() {
    logo = new Logo();
    logo.content();
    var savedArray = localStorage.getItem('array');
    console.log(savedArray)

    if (savedArray == null) {
        var box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        var newBox = []

        var i = box.length
        while (i != 1) {
            i--
            let randomNumber = Math.floor(Math.random() * i)
            box[i] = new Box(AdventCalendar, box[randomNumber]);
            box[i].content();
            newBox.splice(0, 0, box[randomNumber]);

            box.splice(randomNumber, 1);


        }
        newBox.reverse();
        localStorage.setItem("array", JSON.stringify(newBox));

    } else {

        boxArray = localStorage.getItem('array')
        newBox = JSON.parse(boxArray);


        for (var d = 0; d < 24; d++) {
            day = newBox[d];
            console.log(day);
            newBox[d] = new Box(AdventCalendar, day);
            newBox[d].content();

        }

    }




    modal = new Modal();
    modal.content();
    //Enregistrement des données dans le local storage
};

generate();