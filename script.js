function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById("code").contentWindow.document;
	
	 document.body.onkeyup = function(){
	    code.open();
		code.writeln(
			"<!DOCTYPE html> <html lang> <head></head>"+
			html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>"
			+"</html>");
		code.close();
      };
    };

compile();
