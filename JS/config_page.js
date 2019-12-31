const body = _("body")[0];
const big_dot = _("#big_dot");
const difficulty = _("#difficulty");
const start_button = _("#start_button");
const config_page =  _("#config_page");
const score_page = _("#score_page");
const play_page = _("#play_page");
var speed;

score_page.style.display = "none";
play_page.style.display = "none";

big_dot.onclick = function (){
	big_dot.setAttribute("r","30vh");
	setTimeout(function(){
		big_dot.setAttribute("r","20vh");
	},100);
}

start_button.onclick = function(){
	if(difficulty.value == "easy"){ speed=700;}
	else if(difficulty.value == "hard"){ speed=300;}
	else{ speed=200;}
	toogleVisibility(config_page,"block");
	startPlaying();
}
