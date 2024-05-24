document.addEventListener("DOMContentLoaded",function(){
    let operation = '' ;
    let resultat = '';
    const buttons = document.querySelectorAll(".bouton");
    const operationDisplay = document.getElementById('operation');
    const resultDisplay = document.getElementById('result');

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            const idbtn = button.id;
            switch (idbtn){
                case ("addition"):
                    operation += '+';
                    break;
                case("racine"):
                    try{
                        resultat = math.sqrt(math.evaluate(operation));
                    }catch{
                        resultat = "Erreur Experssion incorecte";
                    }
                    break;
                case ("soustraction"):
                    operation += '-';
                    break;
                case ("multiplication"):
                    operation += '*';
                    break;
                case ("division"):
                    operation += '/';
                    break;
                case ("pourcentage"):
                    try{
                        resultat = math.evaluate(operation) / 100;
                    }catch{
                        resultat = "Erreur Experssion incorecte";
                    }
                    break;
                case("virgule"):
                    operation += '.';
                    break;
                case("egale"):
                    try{
                        resultat = math.evaluate(operation);
                    }catch{
                        resultat = "Erreur Experssion incorecte";
                    }
                    break;
                case("clear"):
                    operation = '' ;
                    resultat = '';
                    break;

                default:
                    operation += idbtn;
                    break;
                }
                operationDisplay.textContent = operation;
                resultDisplay.textContent = resultat;
        });
    });
});
