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
