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
        squarebox(square);
        return;
    }

     
)


//PC GENERA 16 NUMERI NEL RANGE DELLA DIFFICOLTA SCELTA(nell'array non possono esserci numeri uguali)
let bomb=[];
//function squarebox(square){
for (let i=0;i<16;i++){
    const randomNumber=parseInt(Math.floor(Math.random()*100));
    console.log(randomNumber[i]);
    bomb.push(randomNumber);
    
    if(!bomb.includes(randomNumber)){
        bomb.push(randomNumber);
    }

}

console.log(bomb);

//INSERIRE QUESTI NUMERI ALL'INTERNO DELLE CELLE


//FAR SI CHE SE VIENE CLICCATA UNA CELLA CON UNO DI QUESTI NUMERI SI COLORA DI ROSSO E LA PARTITA TERMINA
//ALTRIMENTI DI AZZURRO E LA PARTITA CONTINUA
//COMUNICARE QUANTE CELLE SONO STATE CLICCATE PRIMA DEL TERMINE DELLA PARTITA

