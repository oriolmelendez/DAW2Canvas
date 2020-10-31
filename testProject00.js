window.onload = function eixos() {
    
    var canvas = document.getElementById('eixos');
    var context = canvas.getContext('2d');

    //Posicio(x),Posicio(y),(ample),(alt)
    context.strokeRect (500,50,500,300);
    context.beginPath();
    context.moveTo(750, 50);
    context.lineTo(750, 350);
    context.moveTo(500, 200);
    context.lineTo(1000, 200);
    context.stroke();
}


function calcular() {
    let operacio = document.getElementById("funcio").value;
    console.log(operacio);
    let checker = 0;
    let insertion = "Math.";
    // TODO hacer que cuando no sea una expresion matematica ponga un error por pantalla
    for (let i = 0; i < operacio.length; i++) {
        let x = operacio.charCodeAt(i);
        console.log(x);
        if (x >= 97 && x <= 122) {
            checker++;
        } else if (checker != 0) {
            operacio = [operacio.slice(0, i - checker), insertion, operacio.slice(i - checker)].join('');
            i += 5;
            checker = 0;
        }
        console.log(operacio);
    }
    console.log(operacio);
    
    var reBrackets = /\((.*?)\)/g;
    var listOfText = [];
    var found;
    while(found = reBrackets.exec(operacio)) {
      listOfText.push(found[1]);
    };
    

    let result = eval(operacio);

    if (isNaN(result)) {
        result = "Això no es una operacio matematica valida";
        alert(result);
    } else {    
        pintarf();
    }
}

function pintarf(){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.beginPath();
    //linea prova
    context.moveTo(550, 260);
    context.lineTo(950, 260);
    context.strokeStyle="black";
    context.stroke();
}

//####### Modificacions estetiques funcio #######

//Canvi color
function CanviColor(color){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.strokeStyle=color;
    context.stroke();
}

//Canvi gruix
function gruix(vgruix){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = vgruix;
    console.log(vgruix);
    context.stroke();
}

// Funcions canvi tipus linea
function tipus(tipusL){
    console.log(tipusL);

    switch(tipusL){

        case 'discontinua':
            funcioDis();
            break;

        case 'continua':
            funcioCont();
            break;

        case 'rallapunt':
            funcioRP();
            break;
        
        case 'punts':
            funcioP();
            break;

    }

}


function funcioDis(){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([4, 14]);
    context.beginPath();
    context.moveTo(550, 260);
    context.lineTo(950, 260);
    context.stroke();
}

function funcioCont(){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([]);
    context.beginPath();
    context.moveTo(550, 260);
    context.lineTo(950, 260);
    context.stroke();
}

function funcioRP(){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');


    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([4, 14, 18]);
    context.beginPath();
    context.moveTo(550, 260);
    context.lineTo(950, 260);
    context.stroke();
}

function funcioP(){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([1,1]);
    context.beginPath();
    context.moveTo(550, 260);
    context.lineTo(950, 260);
    context.stroke();

}

function neteja(){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
}

//Zoom

function zoom(z){
    var canvas = document.getElementById('eixos');
    var context = canvas.getContext('2d');

    console.log(z);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(z,z);
   
}