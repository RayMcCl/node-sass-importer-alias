function aliasImporter (alias) {

    function runAlias (key, alias, url) {
        var index = url.indexOf(alias);
        
        if(index > -1){
            url = url.substr(0, index) + key + url.substr(index + alias.length, url.length);
            runAlias(key, alias, url);
        }
 
        return url;
    }
 
    return function importer (url, prev) {
        for(var k in alias){
            url = runAlias(k, alias[k], url);
        }

        return {contents: fs.readFileSync(url).toString()};
    }
}

exports.default = aliasImporter;