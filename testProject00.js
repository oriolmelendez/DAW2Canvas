
function test(){
    let hola = document.getElementById("funcio").value;
    console.log(hola);
    let checker = 0;
    let insertion = "Math.";
    for(let i = 0; i < hola.length; i++){
        let x = hola.charCodeAt(i);
        console.log(x);
        if (x >= 97 && x <= 122){
            checker++;           
        }else if(checker != 0){
            hola = [hola.slice(0, i-checker), insertion, hola.slice(i-checker)].join('');
            i+=5;
            checker = 0;
        }
        console.log(hola);
    }
    console.log(hola);

    let result = eval(hola);
    document.getElementById("testeo").value = hola;
    document.getElementById("add").value = result;
}