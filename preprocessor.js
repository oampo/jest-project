var babel = require('babel-core');

module.exports = {
    process: function(src, filename) {
        if (filename.match(/.css$/)) {
            return;
        }
        else if (filename.match(/.jsx$/)) {
            var code = babel.transform(src).code;
            return code;
        } else {
            return src;
        }
    }
};
