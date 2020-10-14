function write(){
    var html = document.getElementById("html");
	var css = document.getElementById("css");
    var js = document.getElementById("js");
    var writable = document.getElementById("save").contentWindow.document
    document.body.onkeyup = function(){
	    writable.open();
		writable.writeln(
			"<!DOCTYPE html> <html lang> <head></head>"+
			htmlCode.value+"<style>"+cssCode.value+"</style>"+"<script>" + jsCode.value + "</script>"
			+"</html>");
		writable.close();
      };
	
}