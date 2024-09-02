

function afficheInscription(){

    const content = document.getElementById('form')
    const connexion = document.getElementById('connexion')
    const inscription = document.getElementById('inscription')

    connexion.style.opacity = 0;
    setTimeout(function(){
        connexion.style.display = "none";
        inscription.style.display = "block";
        setTimeout(function(){
            inscription.style.opacity = 1;

        },10);

    },2000)
    

}
function afficheConnexion(){

    const content = document.getElementById('form')
    const connexion = document.getElementById('connexion')
    const inscription = document.getElementById('inscription')

    inscription.style.opacity = 0;
    setTimeout(function(){
        inscription.style.display = "none";
        connexion.style.opacity = 1;

       
        setTimeout(function(){
            connexion.style.display = "block";
         
        },10);

    },1000)
    

}