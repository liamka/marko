var fs = require('fs');
var path = require('path');

exports.check = function(marko, markoCompiler, expect, helpers, done) {
    var compiler = require('marko/compiler');
    var templatePath = path.join(__dirname, 'template.marko');

    var templateSrc = fs.readFileSync(templatePath, { encoding: 'utf8' });
    var compiledTemplate = compiler.compileForBrowser(templateSrc, templatePath, {});

    helpers.compare(compiledTemplate.code, '.js');

    done();
};