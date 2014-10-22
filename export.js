
function printEntry(page, intern, keywords){
	
	
	document.writeln(" {\"page\":\" " +  page + "  \", \"intern\":\" " + intern + "  \", \"keywords\":\" " + keywords + " \"}, ");	
}

function printLastEntry(page, intern, keywords){
	
	
	document.writeln(" {\"page\":\" " +  page + "  \", \"intern\":\" " + intern + "  \", \"keywords\":\" " + keywords + " \"} ");	
}
function printStart(){
	document.writeln("\"pages\":[");
}

function printEnd(){
	document.writeln("]");
}

 