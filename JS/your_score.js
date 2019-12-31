const replay_button = _("#replay_button");
const main_page_button = _("#main_page_button");

replay_button.onclick = function(){
	toogleVisibility(score_page,"block");
	startPlaying();
}

main_page_button.onclick = function(){
	toogleVisibility(score_page,"block");
	toogleVisibility(config_page,"block");
	big_dot.setAttribute("r","25.0vmin");
}
