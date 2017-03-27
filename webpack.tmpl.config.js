var path = require('path');

var baseDir = __dirname + '/src/templates';

var config = {
  templates: [
    {
      template: 'src/templates/index.ejs',
      filename: 'index.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'index.json')),
      projects: require(path.resolve(baseDir, 'projects.json')),
      page: 'index.html'
    }, {
      template: 'src/templates/projects.ejs',
      filename: 'projects.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'projects.json')),
      projects: require(path.resolve(baseDir, 'projects.json')),
      page: 'projects.html'
    }, {
      template: 'src/templates/community-support.ejs',
      filename: 'community-support.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-support.json')),
      page: 'community-support.html'
    }, {
      template: 'src/templates/community-how-to-participate.ejs',
      filename: 'community-how-to-participate.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-how-to-participate.json')),
      page: 'community-how-to-participate.html'
    }, {
      template: 'src/templates/community-how-to-contribute.ejs',
      filename: 'community-how-to-contribute.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-how-to-contribute.json')),
      page: 'community-how-to-contribute.html'
    }, {
      template: 'src/templates/community-coding-style-standards.ejs',
      filename: 'community-coding-style-standards.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-coding-style-standards.json')),
      page: 'community-coding-style-standards.html'
    }, {
      template: 'src/templates/community-unit-testing-guidelines.ejs',
      filename: 'community-unit-testing-guidelines.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-unit-testing-guidelines.json')),
      page: 'community-unit-testing-guidelines.html'
    }, {
      template: 'src/templates/community-code-of-conduct.ejs',
      filename: 'community-code-of-conduct.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-code-of-conduct.json')),
      page: 'community-code-of-conduct.html'
    }, {
      template: 'src/templates/community-sponsors.ejs',
      filename: 'community-sponsors.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'community-sponsors.json')),
      sponsors: require(path.resolve(baseDir, 'community-sponsors.json')),
      page: 'community-sponsors.html'
    }, {
      template: 'src/templates/about-pylons-project.ejs',
      filename: 'about-pylons-project.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'about-pylons-project.json')),
      page: 'about-pylons-project.html'
    }, {
      template: 'src/templates/about-pylons-framework.ejs',
      filename: 'about-pylons-framework.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'about-pylons-framework.json')),
      page: 'about-pylons-framework.html'
    }, {
      template: 'src/templates/about-contact.ejs',
      filename: 'about-contact.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'about-contact.json')),
      page: 'about-contact.html'
    }, {
      template: 'src/templates/about-artwork.ejs',
      filename: 'about-artwork.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'about-artwork.json')),
      page: 'about-artwork.html'
    }, {
      template: 'src/templates/license.ejs',
      filename: 'license.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'license.json')),
      page: 'license.html'
    }, {
      template: 'src/templates/colors.ejs',
      filename: 'colors.html',
      uglify: true,
      context: require(path.resolve(baseDir, 'colors.json')),
      page: 'colors.html'
    }
  ]
};

module.exports = config;
