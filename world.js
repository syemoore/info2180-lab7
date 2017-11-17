window.onload = function(){
    var button =document.getElementById('lookup');
	var result =document.getElementById('result');
	var country =document.getElementsByTagName('input')[0];
	var all =document.getElementsByTagName('input')[1];
	
	button.onclick = function(){
	    
	    if (window.XMLHttpRequest) {
		    httprequest =new XMLHttpRequest();
	    } else {
	        httprequest =new ActiveXObject('Microsoft.XMLHTTP');
	    }
	    
	    if(all.checked) {
    		all.setAttribute('value','true');
	    }
        var url = "world.php?country="+country.value+"&all="+all.value;
        
    	httprequest.onreadystatechange = Results;
    	httprequest.open("GET", url);
    	httprequest.send();
	    
	};
	
	function Results (){
	    var output =document.getElementById('result');

    	if (httprequest.readyState === XMLHttpRequest.DONE) {
    		if (httprequest.status === 200) {
    		 	info =httprequest.responseText;
    
    		 	if (info[8]!=='<') {
    		 		output.innerHTML +='<h2> Result </h2>' + info;
    			} else {
    				info ='no result found';
    				output.innerHTML ='<h2> Result </h2>' + info;
    			}
    		}
    	}
	}
};