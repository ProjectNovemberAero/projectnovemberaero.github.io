window.dataLayer = window.dataLayer || [];

function loadGalleryModalElements() {
  var modal = document.getElementById("gallery-modal");
  var modalClose = document.getElementById("gallery-modal-close");
  modalClose.onclick = function() { 
    modal.style.display = "none";
  }

  Array.from(document.getElementsByClassName('modal-image')).forEach((element) => {
    element.onclick = function() {
      var img = document.getElementById("gallery-modal-content");
      img.src = element.src;
      modal.style.display = "block";
    }
  });
}

function gtag() {
  dataLayer.push(arguments);
}


loadGalleryModalElements();

var analyticstag = document.createElement('script');
analyticstag.setAttribute('src','https://www.googletagmanager.com/gtag/js?id=G-PRTWKXXMGP');
document.head.appendChild(analyticstag);

gtag('js', new Date());
gtag('config', 'G-PRTWKXXMGP');

var footerYearTag = window.document.getElementById('year');
if (footerYearTag) {
  footerYearTag.innerHTML = (new Date()).getFullYear();
}