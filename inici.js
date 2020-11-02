window.onload = function(){
    document.getElementById('play').addEventListener('click',inici,true);
    document.getElementById('pause').addEventListener('click',pausar,true);
    document.getElementById('back').addEventListener('click',back,true);
    document.getElementById('forward').addEventListener('click',forward,true);

    var video = document.getElementById("video");


    function inici(){
        video.play();
        //temps.innerHTML = video.duration;
    }

    function pausar(){
        video.pause();
    }

    function back(){
        video.currentTime -= 3;
    }

    function forward(){
        video.currentTime += 3;
    }

    //
    //setInterval(mostraTemps, 500);
    //
    //function mostraTemps(){
    //  temps.innerHTML=video.currentTime;
    //}
}