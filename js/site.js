/* ============================================================
   BOOKING EMAIL
   Change this string, and only this string, when the address
   is ready or needs to move. Then run:
     python3 scripts/build-press-kit.py
   so the downloadable press kit picks up the same address.
   ============================================================ */
const BOOKING_EMAIL = 'booking@djannemiek.com';

(function () {
  var subject = encodeURIComponent('Booking enquiry — DJ Annemiek');
  var href = 'mailto:' + BOOKING_EMAIL + '?subject=' + subject;
  var links = document.querySelectorAll('[data-booking]');
  for (var i = 0; i < links.length; i++) {
    links[i].href = href;
  }
  var labels = document.querySelectorAll('[data-booking-address]');
  for (var j = 0; j < labels.length; j++) {
    labels[j].textContent = BOOKING_EMAIL;
  }
})();

(function () {
  var dialog = document.getElementById('itinerary');
  var openBtn = document.getElementById('open-itinerary');
  if (!dialog || !openBtn) return;

  var lastFocus = null;

  function focusable() {
    return Array.prototype.slice.call(dialog.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])')).filter(function (el) {
      return !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true';
    });
  }

  function openDialog() {
    lastFocus = document.activeElement;
    dialog.hidden = false;
    document.body.classList.add('modal-open');
    var closeBtn = dialog.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeDialog() {
    if (dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  openBtn.addEventListener('click', openDialog);

  dialog.addEventListener('click', function (event) {
    if (event.target.closest('[data-close]')) closeDialog();
  });

  document.addEventListener('keydown', function (event) {
    if (dialog.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDialog();
      return;
    }
    if (event.key !== 'Tab') return;
    var items = focusable();
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
