
 //récuperer le contenu texte de le baslise h1//
 
 let titre = document.getElementsByTagName('h1');
 console.log("premier H1 -> contenu : ", titre[0].textContent);

 //Récuperer le HTML du premier <li>//

 var li = document.querySelector('#menu li');

 console.log("first Li",li.innerHTML);
 //recuperer le HTML du dernier <li>//

 var li = document.querySelector("#menu li:last-child");
console.log("last li",li.innerHTML);

//récuperer le HTML DE LA 3EME BALISE <LI>//

var li = document.querySelector("#menu li:nth-child(3)");
console.log( "recupere le HTML du troisieme li ",li.innerHTML)

// recuperer le HTML du parent de <ul>

var ul= document.querySelector('ul');
console.log("HTML du parent ul",ul.parentNode.innerHTML);

//recuperer le HTML du parent du quatrieme <li>//

var li=document.querySelector("li:nth-child(4)");
console.log("nbre total de LI 4")
console.log("HTML du parent du quatrième <li>",li.parentElement.innerHTML);

//Quand la souris survole <ul> tout le texte passe en rouge, sinon en noir.//

var survol= document.querySelector("ul");

survol.addEventListener("mouseover",function handleMouseOver(){
    survol.style.color="red";
});
survol.addEventListener("mouseout",function handleMouseOut(){
    survol.style.color="black"
});
