
function Client(){
	if(window.innerHeight !== undefined){
		return {
			"width": window.innerWidth,
			"height": window.innerHeight
		}
	}else if(document.compatMode === "CSS1Compat"){
		return {
			"width": document.documentElement.clientWidth,
			"height": document.documentElement.clientHeight
		}
	}else{
		return {
			"width": document.body.clientWidth,
			"height": document.body.clientHeight
		}
	}
}

export default Client