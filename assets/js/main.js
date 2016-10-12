function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}

$(function(){



	fetchJSONFile('http://silvanicus.github.io/assets/json/app.json', function(data){
	    var myData = data;
	});


	//Preload images + spinner
    $(window).load(function(){
        $('.cover').fadeOut(5000);
    })

}); 