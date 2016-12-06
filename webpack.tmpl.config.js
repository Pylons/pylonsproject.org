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
      template: 'src/templates/community-participate.ejs',
      filename: 'community-participate.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-participate.json')),
      page: 'community-participate.html'
    }, {
      template: 'src/templates/code-of-conduct.ejs',
      filename: 'code-of-conduct.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'code-of-conduct.json')),
      page: 'code-of-conduct.html'
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
