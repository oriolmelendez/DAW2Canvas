
function test(){
    let hola = document.getElementById("funcio").value;
    console.log(hola);

    let insertion = "Math.";
    for(let i = 0; i < hola.length; i++){
        let x = hola.charAt(i);
        let ascii = x.charCodeAt(i);
        if (ascii >= 97 && ascii <= 122){
            hola = [hola.slice(0, i), insertion, hola.slice(i)].join('');
        }
        console.log(hola);
    }
    console.log(hola);

    let result = eval(hola);
    document.getElementById("testeo").value = hola;
    document.getElementById("add").value = result;
}