function playAudio() {
    var audio = new Audio('./Main.mp3');
    var video =document.getElementById('background-video');

    audio.play().catch(function(error) {
        console.error("Error playing audio:",error);
    });

    video.style.display = 'block';
    video.play().catch(function(error) {
        console.error("Error playing video:",error);
    });

    video.addEventListener('ended', function(){
        video.style.display = 'none';
    });
}