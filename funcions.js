window.onload = function eixos() {

    var canvas = document.getElementById('eixos');

    document.getElementById("desar").addEventListener('click',desar,true);

    inici(canvas);
}

//Calcula els punts de la funció
function calcular() {
    let operacio = document.getElementById("funcio").value.toString();
    
    let trigonometriques = ["sin", "cos", "tan","sqrt"];

    for(let t=0; t < trigonometriques.length; t++){
       
        if(operacio.includes(trigonometriques[t])){

            operacio = operacio.replace(trigonometriques[t],"Math." + trigonometriques[t]);
        }
        
    }

    let totalValues = []
   
    for (let x = -5; x < 5.01; x += 0.01) {
        totalValues.push(x);
        totalValues.push(eval(operacio));
        
    }

    return totalValues;
}

//Pintar la funció
function pintarf(){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.beginPath();
    var punts = calcular();
    console.log(punts);
    
    context.moveTo(punts[0]*50 + canvas.width/2, canvas.height/2 - punts[1]*50);
    
    for(let i = 2; i < punts.length; i+=2){
        
        context.lineTo(punts[i]*50 + canvas.width/2, canvas.height/2 - punts[i+1]*50); 
    }

    context.strokeStyle="black";
    context.stroke();
    bores(punts);
}

//Pintar bores
function bores(p){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');
    punts = p;
    let n = p.length;
    
    context.lineTo(punts[n-2]*50 + canvas.width/2,(canvas.height/2 - punts[n-1]*50)-5);
    
    for(let i = n-3; i > -1; i-=2){
        
        context.lineTo(punts[i-1]*50 + canvas.width/2, (canvas.height/2 - punts[i]*50)-5); 
    }
    context.closePath();
    context.fillStyle="red";
    context.fill();
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
            funcioDiscontinua();
            break;

        case 'continua':
            funcioContinua();
            break;

        case 'rallapunt':
            funcioRallaPunt();
            break;
        
        case 'punts':
            funcioPunts();
            break;

    }

}

//Pinta la funció discontinua
function funcioDiscontinua(){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([4, 14]);
    context.beginPath();
    let img = document.getElementById("fonsC").value;
    fons(img);
    pintarf();
    
}

//Pinta la funció continua
function funcioContinua(){

    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');
    let img = document.getElementById("fonsC").value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([]);
    context.beginPath();
    fons(img);
    pintarf();
}

//Pinta la funció pintada ralla punt
function funcioRallaPunt(){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');
    let img = document.getElementById("fonsC").value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([4, 14, 18]);
    context.beginPath();
    fons(img);
    pintarf();
}

//Pinta la funció puntuada
function funcioPunts(){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');
    let img = document.getElementById("fonsC").value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setLineDash([2,5]);
    context.beginPath();
    fons(img);
    pintarf();

}

//Neteja pantalla
function neteja(){
    var canvas = document.getElementById('pfuncio');
    var canvasE = document.getElementById('eixos');
    
    var context = canvas.getContext('2d');
    var contextE = canvasE.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    contextE.clearRect(0, 0, canvas.width, canvas.height);

    inici(canvasE);
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

//Pintar canvas inicial
function inici(canvas){

    this.canvas = canvas;
    var context = canvas.getContext('2d');
    //context.setLineDash([]);

    //Posicio(x),Posicio(y),(ample),(alt)
    context.beginPath();
    context.strokeRect (0,0,500,500);
    context.beginPath();
    context.moveTo(250, 0);
    context.lineTo(250, 500);
    context.moveTo(0, 250);
    context.lineTo(500, 250);
    context.stroke();
}

//Posar imatge de fons
function fons(img){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');

    let imatge = new Image();
    
    switch(img){

        case 'f1':
            console.log("foto1");
            imatge.src = "img/fons1.jpg";
            break;
        
        case 'f2':
            console.log("foto2");
            imatge.src = "img/fons2.jpg";
            break;
        
        case 'f3':
            console.log("foto3");
            imatge.src = "img/fons3.jpg";
            break;
        
        case 'nf':
            imatge.src = "img/sense_fons.jpg";
            break;
    }
    
    imatge.onload = function(){
        context.drawImage(imatge,0,0);
        pintarf();
        inici(canvas);
    }


}

// ####### Modificacions estètiques sobre l'imatge #######
function bitmap(modificacio){

    switch(modificacio){

        case 'negatiu':
            ferNegatiu();
            break;

        case 'blancnegre':
            BlancNegre();
            break;
        
        case 'color':
            Color();
            break;
    }

}

//Convertir a negatiu l'imatge de fons
function ferNegatiu() {
    
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');
    
    var imageData = context.getImageData(0, 0, canvas.width,canvas.height);
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
        pixels[i] = 255 - pixels[i]; // red
        pixels[i + 1] = 255 - pixels[i + 1]; // green
        pixels[i + 2] = 255 - pixels[i + 2]; // blue
        // i+3 es alpha (opacitat)

    }
    // modifiquem original
    context.putImageData(imageData, 0, 0);
}

//Convertir a blanc i negre
function BlancNegre(){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');
    
    var imageData = context.getImageData(0, 0, canvas.width,canvas.height);
    var pixels = imageData.data;

    for (var i = 0, n = pixels.length; i < n; i += 4) {
        var grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;

        pixels[i] = grayscale;
        pixels[i+1] = grayscale;
        pixels[i+2] = grayscale;
    }

    context.putImageData(imageData, 0, 0);
}

//Convertir a color rgb el fons
function Color(){
    var canvas = document.getElementById('pfuncio');
    var context = canvas.getContext('2d');
    
    var imageData = context.getImageData(0, 0, canvas.width,canvas.height);
    var pixels = imageData.data;

    for (var i = 0, n = pixels.length; i < n; i += 4) {
        
        pixels[i] = pixels[i];
        pixels[i+1] = pixels[i+1];
        pixels[i+2] = pixels[i+2];
    }
    context.putImageData(imageData, 0, 0);
}