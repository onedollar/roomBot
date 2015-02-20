var runBot = function() {
	function hello() {
		API.sendChat('Pure Noise bot is now running...');
	}
	
	$(document).ready(hello);

	function userJoin(uJ) {
		API.sendChat('Welcome, @' + uJ.username);
	}

	API.on(API.USER_JOIN, userJoin);

	function userLeave(uL) {
		API.sendChat('Goodbye, @' + uL.username);
	}

	API.on(API.USER_LEAVE, userLeave);
};

$(document).ready(runBot);
