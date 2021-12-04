window.onload = function () {

  var saniye = 00;
  var dakika = 00;
  var appendDakika = document.getElementById("dakika")
  var appendSaniye = document.getElementById("saniye")
  var butonBasla = document.getElementById('butonBasla');
  var butonDur = document.getElementById('butonDur');
  var butonYenile = document.getElementById('butonYenile');
  var aralik;

  butonBasla.onclick = function () {
    clearInterval(aralik);
    aralik = setInterval(kronometreBaslat, 10);
  }

  butonDur.onclick = function () {
    clearInterval(aralik);
  }

  butonYenile.onclick = function () {
    clearInterval(aralik);
    dakika = "00";
    saniye = "00";
    appendDakika.innerHTML = dakika;
    appendSaniye.innerHTML = saniye;
  }

  function kronometreBaslat() {
    dakika++;

    if (dakika <= 9) {
      appendDakika.innerHTML = "0" + dakika;
    }

    if (dakika > 9) {
      appendDakika.innerHTML = dakika;
    }

    if (dakika > 99) {
      console.log("saniye");
      saniye++;
      appendSaniye.innerHTML = "0" + saniye;
      dakika = 0;
      appendDakika.innerHTML = "0" + 0;
    }

    if (saniye > 9) {
      appendSaniye.innerHTML = saniye;
    }
  }
}