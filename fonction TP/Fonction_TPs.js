// exercice 6 
// function somme(){
//     var nb1 = parseInt(document.getElementById("nb1").value);
//     var nb2 = parseInt(document.getElementById("nb2").value);
//     var nb3 = parseInt(document.getElementById("nb3").value);
//     var nb4 = parseInt(document.getElementById("nb4").value);
//     var nb5 = parseInt(document.getElementById("nb5").value);
//     var  total = nb1+nb2+nb3+nb4+nb5;
//     document.getElementById("rst").innerHTML=total;
// }

// exercice 7
// function surface(){
        
//         var nb1 = parseInt(document.getElementById("nb1").value);
//         var nb2 = parseInt(document.getElementById("nb2").value);
//         if(isNaN(nb1) || isNaN(nb2))
//         {
//             alert("Remplaire les champs");
//         }else{
//             var  total = nb1*nb2;
//         document.getElementById("rst").innerHTML="La surface est "+total;}

//         }
        
// exercice 8    

function sommeDiviseursStricts(N){
    // N = parseInt(document.getElementById("nb1").value);
    var test = 0;

    for (let i = 0; i < N; i++) {
                if (N%i==0) {
                    test =  test+i;
                }
            }
        N = test;    
        return N;
        }


    function Parfait (N) {
        if (N==sommeDiviseursStricts(N) ) {
            return 1;
                }
                else{
                    return 0;
                }       
    }


    function sontAmis (A,B) {
        A = parseInt(document.getElementById("nb1").value);
        B = parseInt(document.getElementById("nb2").value);

        if (sommeDiviseursStricts(A) == sommeDiviseursStricts(B)) {
            // return 1;
            alert("Sont Amis");
        }else{
            // return 0;
            alert("pas Amis");
        }
    }
    

        

















