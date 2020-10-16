
function test(){
    let operacio = document.getElementById("funcio").value;
    console.log(operacio);
    let checker = 0;
    let insertion = "Math.";
    for(let i = 0; i < operacio.length; i++){
        let x = operacio.charCodeAt(i);
        console.log(x);
        if (x >= 97 && x <= 122){
            checker++;           
        }else if(checker != 0){
            operacio = [operacio.slice(0, i-checker), insertion, operacio.slice(i-checker)].join('');
            i+=5;
            checker = 0;
        }
        console.log(operacio);
    }
    console.log(operacio);

    let result = eval(operacio);
    document.getElementById("testeo").value = operacio;
    document.getElementById("add").value = result;
}