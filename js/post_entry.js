var componentsPath = './components/';

var jQuery = require(componentsPath + 'jquery.js');
var $ = jQuery;
var navJs = require(componentsPath + 'jquery.nav.js');
var articleJs = require(componentsPath + 'article.js');
$(document).ready(function() {
  navJs(this, $);
  var articleObj = articleJs(this, $);
  if (siteOptions.useAnchors) {
    articleObj.anchors.add(getH1ToH6Selector('.post-container '));
  }
  if (siteOptions.useSideNav) {
    articleObj.generateCatalog('.catalog-body', 'h1');
  }
});

function getH1ToH6Selector(prefix) {
  var selector = prefix + 'h1';
  for (var i = 2; i <= 6; ++i) {
    selector += ', ' + prefix + 'h' + i;
  }
  return selector;
}
