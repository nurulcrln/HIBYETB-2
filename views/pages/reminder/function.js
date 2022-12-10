/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
const daysofwek = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
const month = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'];

function clock() {
  const today = new Date();
  const j = today.getHours();
  const m = today.getMinutes();
  const d = today.getSeconds();
  let day = 'AM';
  if (j > 12) {
    day = 'PM';
  }

  const daytoday = today.getDay();
  const date = today.getDate();
  const mon = today.getMonth();
  const year = today.getFullYear();

  document.getElementById('jam').innerHTML = j;
  document.getElementById('menit').innerHTML = m;
  document.getElementById('detik').innerHTML = d;
  document.getElementById('waktu').innerHTML = day;
  document.getElementById('' + daysofwek[daytoday] + '').style.color = '#fff';
  document.getElementById('hari').innerHTML = date;
  document.getElementById('bulan').innerHTML = month[mon];
  document.getElementById('tahun').innerHTML = year;
}

setInterval(clock, 400);
