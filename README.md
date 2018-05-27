# Node-sass Importer Alias

A node-sass importer which supports simple path aliasing.

Find it on NPM: https://www.npmjs.com/package/node-sass-importer-alias

## Install

The package can be installed from NPM by running either of the below:

```
npm install --save-dev postcss-importer-alias

OR

yarn add postcss-importer-alias
```

## Usage 

```javascript
var sass = require('node-sass');
var importAlias = require('node-sass-importer-alias');

sass.render({
    file: '/path/to/myFile.scss',
    data: 'body{background:blue; a{color:black;}}',
    importer: [

        // Initialize the importer and define the key value pairs to alias        
        importAlias({
            'RESOURCES': './src/resources'
        })
    ]
});
```
By defining "RESOURCES" as above, it will enable you to import files relative to the alias, meaning the below:

```
@import 'RESOURCES/variables.scss';
```

Will resolve to:

```
@import './src/resources/variables.scss';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details