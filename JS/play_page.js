const dot =_("#dot");
const score = _("#score");
const play_pause_button = _("#play_pause_button");
const restart_button = _("#restart_button");
const colors = ["violet","indigo","blue","green","yellow","orange","red"];
var random_dot_interval;
var random_dot_timeout;
var score_value = 0;
var time_elapsed = 0;
var play_flag =false;
var unt_p_width;//untouchable_place_width
var t_p_width;//touchable_place_width

function startPlaying(){
	if(body.requestFullscreen){
		body.requestFullscreen();
	}
	else if(body.mozRequestFullScreen){
		body.mozRequestFullScreen();
	}
	else if(body.webkitrequestFullscreen){
		body.webkitrequestFullscreen();
	}
	else if(body.msrequestFullscreen){
		body.msrequestFullscreen();
	}
	unt_p_width = Math.round(window.innerHeight/20);
	t_p_width = Math.round(window.innerWidth - 2* unt_p_width);
	score_value = 0;
	time_elapsed = -speed;
	play_flag = true;
	play_pause_button.innerHTML = "Pause";
	show_random_dots();
	random_dot_timeout = setTimeout(stopPlaying,30000);
	toogleVisibility(play_page,"block");
	toogleVisibility(dot,"inline");
	random_dot_interval = setInterval(show_random_dots,speed);
}

function stopPlaying(){
	clearInterval(random_dot_interval);
	toogleVisibility(dot,"inline");
	toogleVisibility(play_page,"block");
	toogleVisibility(score_page,"block");
	score.innerHTML = score_value;
}

function show_random_dots(){
	time_elapsed+=speed;
	dot.setAttribute("fill",colors[Math.round(Math.random()*6)]);
	dot.setAttribute("cx", Math.round(unt_p_width + Math.random()*t_p_width)+"px");
	dot.setAttribute("cy", (5 + Math.round(Math.random()*83)) + "vh");
	dot.setAttribute("r","3vh");
}

function dot_inflate_score_increment(){
	score_value++;
	dot.setAttribute("r","5vh");
}

function dot_deflate(){
	dot.setAttribute("r","3vh");
}

if(navigator.maxTouchPoints > 0){
	dot.ontouchend = dot_deflate;
	dot.ontouchstart = dot_inflate_score_increment;
	dot.ontouchcancel = dot_deflate;
}
else{
	dot.onmousedown = dot_inflate_score_increment;
	dot.onmouseup = dot_deflate;
}

dot.style.display = "none";

restart_button.onclick = function(){
	clearInterval(random_dot_interval);
	clearTimeout(random_dot_timeout);
	toogleVisibility(dot,"inline");
	toogleVisibility(play_page,"block");
	toogleVisibility(config_page,"block");
	big_dot.setAttribute("r","25.0vmin");
}

play_pause_button.onclick  = function(){
	if(play_flag){
		clearTimeout(random_dot_timeout);
		clearInterval(random_dot_interval);
		toogleVisibility(dot,"inline");
		play_pause_button.innerHTML = "Resume";
		play_flag = false;
	}
	else{
		random_dot_timeout = setTimeout(stopPlaying, 30000-time_elapsed);
		time_elapsed -= speed;
		toogleVisibility(dot,"inline");
		random_dot_interval = setInterval(show_random_dots, speed);
		play_pause_button.innerHTML = "Pause";
		play_flag = true;
		show_random_dots();
	}
}

window.onresize = function(){
	unt_p_width = Math.round(window.innerHeight/20);
	t_p_width = Math.round(window.innerWidth - 2* unt_p_width);
	dot.setAttribute("cx", Math.round(unt_p_width + Math.random()*t_p_width)+"px");
}

