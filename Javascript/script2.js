function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("saveIt").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var htmlCode = document.getElementById("html").value;
	var cssCode = document.getElementById("css").value;
    var jsCode = document.getElementById("js").value;
    var text = ("<!DOCTYPE html> <html lang> <head></head>"+
    htmlCode+"<style>"+cssCode+"</style>"+"<script>" + jsCode + "</script>"
    +"</html>");
    
    var filename = "code.txt";
    
    download(filename, text);
}, false);