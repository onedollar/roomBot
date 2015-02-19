var runBot = function() {
	function hello(hi) {
		API.sendChat('/em ArrwkeysOfficial Bot is now running...');
	}

	function userJoin(uJ) {
		API.sendChat('Hey there, ' + uJ.username);
	}

	API.on(API.USER_JOIN, userJoin);

	function userLeave(uL) {
		API.sendChat('Goodbye, ' + uL.username);
	}

	API.on(API.USER_LEAVE, userLeave);
};

$(document).ready(runBot);
