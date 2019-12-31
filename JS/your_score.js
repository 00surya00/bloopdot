const replay_button = _("#replay_button");
const main_page_button = _("#main_page_button");

replay_button.onclick = function(){
	score_page.style.display = "none";
	startPlaying();
}

main_page_button.onclick = function(){
	score_page.style.display = "none";
	config_page.style.display = "block";
	big_dot.setAttribute("r","25.0vmin");
}
