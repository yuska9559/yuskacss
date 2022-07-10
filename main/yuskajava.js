 <script>var descGaugeInfo = {descST:(new Date()).getTime()};
        </script>
<script type="text/javascript"> 
		window.onerror = function(message, url, line) {
			return true;
		};
	</script>
	<script type="text/javascript">
	try{
		var jsonObj = {};
		var hashParam = document.location.hash;
		if(hashParam && hashParam.length > 0){
			hashParam = decodeURI(hashParam.replace('#', ''));
		}
		if(hashParam && typeof(hashParam) === 'string'){
			jsonObj = JSON.parse(hashParam);
		}
		if(jsonObj && jsonObj.jsUrl){
			var jsUrl = jsonObj.jsUrl;
			var script = document.createElement('script');
			if(jsUrl.indexOf('//') != -1){
				script.src = jsUrl;	
			}else{
				script.src = '//ir.ebaystatic.com/rs/v/'+jsUrl+'.js';
			}
			script.defer = true;
			document.head.appendChild(script); 
		}
		if(jsonObj && jsonObj.title){
			var title = jsonObj.title;
			document.title = title;
		}
	}catch(e){
		
	}
	</script>
