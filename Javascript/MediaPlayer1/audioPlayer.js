var jukeBox=document.querySelector(".player")
jukeBox.addEventListener("click",function (event){
	var songName=event.target.getAttribute("data-src")
	var audioPlayer=document.querySelector("#player");
	if(audioPlayer){
		if(songName === audioPlayer.getAttribute("src")){
			if(audioPlayer.paused){
				audioPlayer.play();
				event.target.id="playing"
			}else{
				audioPlayer.pause()
				event.target.id="paused"
			}
		}
		else{
			audioPlayer.src=songName;
			audioPlayer.play()
			if (document.querySelector('#playing')) {
                document.querySelector('#playing').id = '';
              }
            else {
                document.querySelector('#paused').id = '';
                
            }
            event.target.id = 'playing';

		}
	}
	else{
		var audioPlayer=document.createElement("audio");
		audioPlayer.id="player";
		document.body.appendChild(audioPlayer);
		audioPlayer.src=songName;
		audioPlayer.play()
		event.target.id = 'playing';
	}
})