// ATTENTION!: Main JS script for project is linked on index2.html


// Ignore this code, trying to activate prior non-sibling element.. its hard.
// $('#splash-nav').hover(function() {
//   $('#target').addClass("hvr-bob");
// })

// Trying to disable sticky hover and click effects on touch screens!
function hasTouch() {
  return 'ontouchstart' in document.documentElement
         || navigator.maxTouchPoints > 0
         || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
  try { // prevent exception on browsers not supporting DOM styleSheets properly
      for (var si in document.styleSheets) {
          var styleSheet = document.styleSheets[si];
          if (!styleSheet.rules) continue;

          for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
              if (!styleSheet.rules[ri].selectorText) continue;

              if (styleSheet.rules[ri].selectorText.match(':hover')) {
                  styleSheet.deleteRule(ri);
              }
          }
      }
  } catch (ex) {}
}