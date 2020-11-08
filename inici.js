window.onload = function(){

    //Esperen canvis als botons
    document.getElementById('play').addEventListener('click',inici,true);
    document.getElementById('pause').addEventListener('click',pausar,true);
    document.getElementById('back').addEventListener('click',back,true);
    document.getElementById('forward').addEventListener('click',forward,true);

    var video = document.getElementById("video");

    //Play video
    function inici(){
        video.play();
    }

    //Pause video
    function pausar(){
        video.pause();
    }

    //Tirar enrrere 3s
    function back(){
        video.currentTime -= 3;
    }

    //Tirar endavant 3s
    function forward(){
        video.currentTime += 3;
    }

}