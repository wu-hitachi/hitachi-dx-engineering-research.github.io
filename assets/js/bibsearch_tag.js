document.addEventListener("DOMContentLoaded", function () {

  function triggerInputEvent(el) {
    var event;
    try {
      event = new Event('input', { bubbles: true });
    } catch (e) {
      event = document.createEvent('Event');
      event.initEvent('input', true, true);
    }
    el.dispatchEvent(event);
  }

  function activateTag(input, tag) {
    input.value = tag;
    input.focus();
    triggerInputEvent(input);
  }

  var input = document.getElementById('bibsearch');
  if (!input) return;

  // Click delegation
  document.addEventListener('click', function(e){
    var el = e.target;
    while (el && el !== document) {
      if (el.classList && el.classList.contains('tag-badge')) break;
      el = el.parentNode;
    }
    if (!el || el === document) return;
    var tag = el.getAttribute('data-tag') || el.textContent || '';
    tag = tag.trim();
    if (!tag) return;
    activateTag(input, tag);
  });

});
