const body = _("body")[0];
const big_dot = _("#big_dot");
const difficulty = _("#difficulty");
const start_button = _("#start_button");
const config_page =  _("#config_page");
const score_page = _("#score_page");
const play_page = _("#play_page");
let speed;

function inflate_big_dot(){
	big_dot.setAttribute("r","30vmin");
}

function deflate_big_dot(){
	big_dot.setAttribute("r","25vmin");
}

if(navigator.maxTouchPoints > 0){
	big_dot.ontouchstart = inflate_big_dot;
	big_dot.ontouchend = deflate_big_dot;
	big_dot.ontouchcancel = deflate_big_dot;
}
else{
	big_dot.onmousedown = inflate_big_dot;
	big_dot.onmouseup = deflate_big_dot;
}

start_button.onclick = function(){
	if(difficulty.value == "easy"){ speed=700;}
	else if(difficulty.value == "hard"){ speed=300;}
	else{ speed=200;}
	config_page.style.display = "none";
	startPlaying();
}

score_page.style.display = "none";
play_page.style.display = "none";
