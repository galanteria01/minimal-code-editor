function compile() {

	var htmlCode = document.getElementById("html");
	var cssCode = document.getElementById("css");
	var jsCode = document.getElementById("js");
	var code = document.getElementById("code").contentWindow.document;
	
	 document.body.onkeyup = function(){
	    code.open();
		code.writeln(
			"<!DOCTYPE html> <html lang> <head></head>"+
			htmlCode.value+"<style>"+cssCode.value+"</style>"+"<script>" + jsCode.value + "</script>"
			+"</html>");
		code.close();
      };
    };


compile()
