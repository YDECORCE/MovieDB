// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible
function ajaxGet(url) 
{
    var data;
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            data=JSON.parse(req.responseText);
            // console.log(req.responseText);
                        
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send();
    return data;
}

