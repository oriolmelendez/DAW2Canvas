window.onload = function(){
    document.getElementById('play').addEventListener('click',inici,true);
    document.getElementById('pause').addEventListener('click',pausar,true);

    var video = document.getElementById("video");


    function inici(){
        video.play();
        temps.innerHTML = video.duration;
    }

    function pausar(){
        video.pause();
    }

    setInterval(mostraTemps, 500);

    function mostraTemps(){
      temps.innerHTML=video.currentTime;
    }
}