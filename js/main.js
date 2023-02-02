//UTENTE CLICK BUTTON
//BUTTON GENERA UNA GRIGLIA QUADRATA
//OGNI CELLA HA UN NUMERO DA 1 a 100 in maniera progressiva
//OGNI CELLA QUANDO VIENE CLICKATA EMETTE IL NUMERO DELLA CELLA IN CONSOLE
debugger;

//COLLEGO BUTTON ALL'HTML
const generateButton=document.getElementById("genera");
console.log(generateButton);
//COLLEGA JAVASCRIPT AL DIV HTML
const grid=document.getElementById("grid");
//console.log(grid);

//DIAMO FUNZIONE AL BUTTON
generateButton.addEventListener(
    'click',
    function (click) {
        //MOLTIPLICHIAMO PER 100
        for (let i = 0; i < 100; i++) {
            //CREO IL QUADRATO DA INSERIRE
            const square = document.createElement("div");
            //ASSEGNO IL NUMERO
            square.innerHTML = i + 1;
            //GLI DO LA CLASSE
            square.classList.add("size");
            // LO INTRODUCO NEL GRID
            grid.append(square);
            //FACCIO SI CHE EMETTA IL N IL CONSOLE QUANDO VIENE CLICKATO
            square.addEventListener(
                'click',
                function(click){
                    console.log(this.innerHTML);
                    this.classList.toggle("clickcolor");
                }
            )
        }
        return;
    }
    
     
)


