// client/assets/fonts.js

// TODO Speed this up later with https://github.com/typekit/webfontloader

WebFontConfig = {
  google: { families: [ 'Fondamento:400,400italic:latin,latin-ext' ] }
};

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
  '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
