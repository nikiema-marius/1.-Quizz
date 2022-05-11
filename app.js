const form = document.querySelector(".form-quizz");//selectionner le block form-quizz
let tableauRestults = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultats = document.querySelector('.resultat h2');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
const noteResultat = document.querySelector('.note');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for(i=1 ; i<6;i++){
         tableauRestults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
verifFunc(tableauRestults); 
tableauRestults=[];
})


function verifFunc(tabRestults){

    for(let a=0; a<5; a++){
        if(tabRestults[a] === reponses[a]){
            verifTableau.push(true)
        }else{
            verifTableau.push(false)
        }
    }

   // console.log(verifTableau);
   afficherResultats(verifTableau);
   couleursFonction(verifTableau);
    verifTableau = []; 
}

function afficherResultats(tabCheck) {
    const nbDefautes = tabCheck.filter(el => el !== true).length;
   // console.log(nbDefautes);
    switch(nbDefautes){
        case 0:
            titreResultats.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`//le innerText nous permet de d'ecrire du text dans un block 
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultats.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultats.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultats.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultats.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultats.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break; 

        default:
            'Wops, cas innatendu.'; 
    }

}





function couleursFonction(tabValBool){
    for(let j = 0; j< tabValBool.length; j++){
        if(tabValBool[j] === true ){
            toutesLesQuestions[j].style.background = 'lightgreen';//on applique un style au block correspondant 
        }else{
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');//on ajout une classe echec a notre block

            setTimeout(()=>{//au bout d'un 1ms on enlevera la classe echec au blocs la presonne pourra recliquer 
                toutesLesQuestions[j].classList.remove('echec');
            },500)
        }
    }
}

toutesLesQuestions.forEach(item =>{//on remet les block en blanc pour un autre essai
    item.addEventListener('click',()=>{
        item.style.background='white'
    })
})