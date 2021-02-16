// if (2 < 8 && 8 >= 4) { // Cette condition renvoie « true », le code est donc exécuté
//     alert('La condition est bien vérifiée.');
//     }

//EX1
function somme_suivis(num,s){
    num= document.getElementById("num").value;
    var i =0;
    s=0;
    while(i<=num){
        s=s+i;
        i++;
    }
    document.getElementById("para1").innerHTML =("la somme est : "+s);
}

//EX2
function population(){
    var years,Alpha,Beta;
    Alpha = 1000000;
    Beta = 500000;
    years =0;
    while (Beta<=Alpha){
        years++;
        Alpha=Alpha+50000;
        Beta =Beta*1.04;
    }
    document.getElementById("pop").innerHTML =("Il faut " +years+ " années pour que la population beta dépasse celle de Alpha.");
}

//EX3
function num_suivis(numdix){
    numdix= document.getElementById("numdix").value;
    // N=numdix;
    // for(i=0;i<=9;i++){
    //     numdix++;
    // }
    for(j=parseInt(numdix);j<=parseInt(numdix) +10;j++){
        console.log(j);
    }
    
}

//EX4
function paritediv(N,di){
   N= document.getElementById("paritediv").value;
   if(N%2 !=0){
       alert("Donner un entier pair");
   }
   else di =0;
   var NB=N;
   do {
       NB=NB/2;
       di++;
   }
   while(NB%2==0);
   document.getElementById("divp").innerHTML =(+N+ " est divisible par deux "+ di+" fois.");
}
function equation(dd) {

    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    var d=Math.pow(b, 2)-(4*a*c);
    
    if (d<0) {
    console.log(' Il n y a pas de solutions');
    
    }
    
    else if (d == 0) {
    console.log(' Il n y a une solution possible');
    
    }
    
    else
    console.log('S = { ' + ((-b-(Math.sqrt(d)))/(2*a)) + ' ; ' + ((-b+(Math.sqrt(d)))/(2*a)) + ' }');
    
    } 
// test imbrique 
// var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4):'));
// if (drawer == 1) {alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
// } else if (drawer == 2) {
// alert('Contient du matériel informatique : des câbles, descomposants, etc.');
// } else if (drawer == 3) {
// alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
// } else if (drawer == 4) {
// alert('Contient des vêtements : des chemises, des pantalons,etc.');
// } else {
// alert("Info du jour : le meuble ne contient que 4 tiroirs et,jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
// }

// var informatique = confirm("Aimes-tu l'informatique en général ? ");
// if (informatique== true){
//    var programmation = confirm("Et plus particulièrement la programmation ?");
//    if (programmation == true) {
//       var jascri = confirm("La programmation en JS aussi, je suppose ?");
//          if (jascri == true) {
//             var poursuite = confirm("Tu restes donc avec nous pour la suite du tutoriel ?");
//             if (poursuite == true) {
//                alert("Nous sommes heureux, nous continuerons donc notre travail.");
//             } else {
//                alert("Bon vent, nos chemins se quittent ici.");
//             }
//          } else {
//             alert("Dommage, JS te permettrait d'animer tes pages Web.");
//          }
//    } else {
//       alert("Il n'y a pas que FaceBook sur un ordinateur !");
//    }
// } else {
//    alert("Quel dommage !");
// }
// switch (day)
// var text;
// switch (new Date().getDay()) {
//   default:
//     text = "Looking forward to the Weekend";
//     break;
//   case 6:
//     text = "Today is Saturday";
//     break;
//   case 0:
//     text = "Today is Sunday";
// }
// document.getElementById("demo").innerHTML = text;

//switch case
var day = 3;
switch(day)
    {
        
        case 1:
            alert("Lundi");          
            break;
        case 2:
            document.write("Mardi");    
            break;
        case 3:
             document.writeln("Mercredi");    
            break;
        case 4:
             document.write("jeudi");
             break;
        case 5:
             document.write("Vendredi");    
            break;
        case 6:
             document.writeln("Samedi");    
             break;  
        case 7:
             document.writeln("Dimench");    
             break;           
    }

// function afficherjour(day){
//     var day = document.getElementById("daybox").value;
    
//      
// }

