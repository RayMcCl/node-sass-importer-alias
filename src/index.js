var path = require('path');
var fs = require('fs');

function aliasImporter (alias) {

	function runAlias (key, alias, url) {
		var index = url.indexOf(alias);
		
		if(index > -1) {
			url = url.substr(0, index) + key + url.substr(index + alias.length, url.length);
			runAlias(key, alias, url);
		}
 
		return url;
	}
 
	return function importer (url) {
		for(var k in alias) {
			url = runAlias(k, alias[k], url);
		}

		try {
			return {contents: fs.readFileSync(path.resolve(url)).toString()};
		} catch (e) {
			console.log('[node-sass-importer-alias] Error', e);
		}
	};
}

module.exports = aliasImporter;
