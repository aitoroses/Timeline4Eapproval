export function p(val) {
  return (val / 100) * size.width + 'px';
}

export function p_rel(val, relativeTo) {
  return (val / 100) * size.width * (relativeTo / 100) + 'px';
}

export function ph(val) {
  return (val / 100) * size.height + 'px';
}

export function ph_rel(val, relativeTo) {
  return (val / 100) * size.height * (relativeTo / size.height) + 'px';
}

export var size = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight
}

// Make it responsive
function init(doc, win) {
  var docEl = doc.documentElement,
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          var clientHeight = docEl.clientHeight;

          if (!clientWidth) return;
          docEl.clientWidth; // Force relayout - important to new Android devices

          size.width = clientWidth;
          size.height = clientHeight;
      };

  // Abort if browser does not support addEventListener
  if (!doc.addEventListener) return;

  win.addEventListener('resize', recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}

init(document, window);
