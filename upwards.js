
if(this["document"] === undefined) {
	module.exports = upwards;
} else {
	var upwardsUrl = upwards(document.location.href);
	window.location.replace(upwardsUrl);
}

function upwards(url) {
	
	// we need to skip forward slashes in protocol
	var searchProtocol = "://";
	var protocolIndex = url.indexOf(searchProtocol);	
	
	var offset = protocolIndex + searchProtocol.length;
	var urlShort = url.substr(protocolIndex + searchProtocol.length);
	var lastSlashIndex = urlShort.lastIndexOf("/");
	var endsWithSlash = lastSlashIndex === urlShort.length - 1;
	
	var temp, domainSplit;
	
	var ipAddressRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	
	// only one "/"
	if(urlShort.split("/").length === 2 
		&& endsWithSlash) {
		
		// remove "/"
		temp = urlShort.substr(0, urlShort.length - 1);
		
		if(ipAddressRegex.test(temp)) {
			return url;
		}
			
		domainSplit = urlShort.split(".");
		
		// check if there is any subdomain
		if(domainSplit < 3) {
			return url;
		}		
		
		return url.replace(domainSplit[0] + ".", '');
	}
	
	if(!endsWithSlash) {
		// 'lastSlashIndex' was calculated against urlShort, so add offset + 1 for end slash.
		return url.substr(0, lastSlashIndex + offset + 1);
	}	
	
	if(endsWithSlash) {
		temp = urlShort.substr(0, lastSlashIndex - 1).lastIndexOf("/");
		return url.substr(0, temp + offset + 1);
	}
	
	return url;
}