var path = require('path');

var baseDir = __dirname + '/src/templates';

var config = {
  templates: [
    {
      template: 'src/templates/index.ejs',
      filename: 'index.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'index.json')),
      page: 'index.html'
    }, {
      template: 'src/templates/colors.ejs',
      filename: 'colors.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'colors.json')),
      page: 'colors.html'
    }, {
      template: 'src/templates/community-contribute.ejs',
      filename: 'community-contribute.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-contribute.json')),
      page: 'community-contribute.html'
    }
  ]
};

module.exports = config;
