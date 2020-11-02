window.onload = function eixos() {

    var canvas = document.getElementById('eixos');

    document.getElementById("desar").addEventListener('click',desar,true);

    inici(canvas);
    pintarf();
}

function calcular() {
    let operacio = document.getElementById("funcio").value;
    console.log(operacio);
    let checker = 0;
    let insertion = "Math.";
    let isBetween = false;
    arrayX = []

    if (operacio.includes('=')) {
        let n = operacio.indexOf('=');
        //backup per si el necessitem
        let operacioOrg = operacio;
        operacio = operacio.substr(n + 1, operacio.length);
    }

    for (let i = 0; i < operacio.length; i++) {
        let x = operacio.charCodeAt(i);

        if (x == 40 || x == 41) {
            isBetween = isBetween ? false : true;
            checker++;
        }

        if (x == 120 || x == 121) {
            continue;
        }
        if (x >= 97 && x <= 122) {
            checker++;
        } else if (checker != 0 && !isBetween) {
            operacio = [operacio.slice(0, i - checker), insertion, operacio.slice(i - checker)].join('');
            i += insertion.length;
            checker = 0;
        }

        console.log(checker);

        console.log(isBetween);

        console.log(operacio);
    }


    for (let i = 0; i < operacio.length; i++) {

        let x = operacio.charCodeAt(i);

        if (x == 120 || x == 121) {
            arrayX.push(i);
        }

    }

    console.log("HOLA");
    console.log(operacio);
    console.log(arrayX);

    // este for recorrera los valores para la funcion y usara el array donde esta la X para sustituir los valores

    let totalValues = []
    let valorF = 5;

    console.log("HERE0");
    console.log(operacio);

    let reBrackets = / *\([[a-zA-Z-0.-9]+]*\) */g

    for (let ValorI = -5; ValorI < valorF;) {


        operacio = operacio.replace(reBrackets, "(" + ValorI.toString() + ")");


        console.log("HERE");
        console.log(operacio);
        console.log(ValorI);
        ValorI = (ValorI * 1) + 0.5;
        totalValues.push(eval(operacio));
    }

    let listOfText = [];

    listOfText = operacio.match(reBrackets);

    return totalValues;


    //document.getElementById("testeo").value = operacio;
    //document.getElementById("add").value = totalValues;
    //document.getElementById("entrepar").value = listOfText;
}

function pintarf(){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.beginPath();
    let punts = calcular();
    ////linea prova
    //for(let i = 0; i < punts[0].length; i++){
    //    if(i == 0){
    //        context.moveTo(punts[0][i],punts[1][i]);
    //    }else{
    //        context.lineTo(punts[0][i], punts[1][i]);
    //    }
    //}

    //context.moveTo(550, 260);
    //context.lineTo(950, 260);

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

//Guardar canvas
function desar(){
    var canvas = document.getElementById('pfuncio');

    inici(canvas);
    
    canvas.toBlob((blob) =>{
        const a = document.createElement('a');
        document.body.append(a);
        a.download = `export.png`;
        a.href = URL.createObjectURL(blob);
        a.click();
        a.remove();
    });
}

//Zoom

function zoom(z){
    var canvas = document.getElementById('eixos');
    var context = canvas.getContext('2d');

    console.log(z);

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.scale(z,z);
   
}

//Pintar canvas inicial
function inici(canvas){

    this.canvas = canvas;
    var context = canvas.getContext('2d');

    //Posicio(x),Posicio(y),(ample),(alt)
    context.beginPath();
    context.strokeRect (500,50,500,300);
    context.beginPath();
    context.moveTo(750, 50);
    context.lineTo(750, 350);
    context.moveTo(500, 200);
    context.lineTo(1000, 200);
    context.stroke();
}