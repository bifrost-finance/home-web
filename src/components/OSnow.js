function OSnow() {
	let agent = navigator.userAgent.toLowerCase();
	let isMac = /macintosh|mac os x/i.test(navigator.userAgent);
	if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
		//your code
		console.log ("这是windows32位系统");
	}
	if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
		//your code
		console.log ("这是windows64位系统");
	}
	if (isMac) {
		//your code
		console.log ("这是mac系统");
	}
}
export default OSnow
