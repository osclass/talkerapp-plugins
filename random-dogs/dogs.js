plugin.onCommand = function (event) {
    if (event.command == "dog") {
    	number = Math.floor((Math.random()*812)+1);
    	output = '';
    	if(number<10){
			output= '0'+number;
		}
		if(number<100){
			output= '0'+output;
		}
		if(number<1000){
			output= '0'+output;
		}
        Talker.getMessageBox().val('');
        Talker.sendMessage("https://github.com/osclass/talkerapp-plugins/raw/master/memes/"+output+".jpg");
        return false;
    }
};



plugin.onCommand = function (event) {
    if (event.command == "dog") {
    	number = Math.floor((Math.random()*812)+1);
    	output = number;
    	if(number<10){
			output= '0'+output;
		}
		if(number<100){
			output= '0'+output;
		}
		if(number<1000){
			output= '0'+output;
		}
        Talker.getMessageBox().val('');
        Talker.sendMessage("https://github.com/osclass/talkerapp-plugins/raw/master/random-dogs/img/"+output+".jpg");
        return false;
    }
};
