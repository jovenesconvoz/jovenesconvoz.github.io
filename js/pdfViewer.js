var pdfUrl1 = "assets/resources/manual.pdf";
var pdfUrl2 = "assets/resources/bitacora.pdf";

document.getElementById("viewbutton").addEventListener("click", function () {
  window.open(pdfUrl1, "_blank");
});

document.getElementById("viewbutton2").addEventListener("click", function () {
  window.open(pdfUrl2, "_blank");
});

var statusMessage = document.getElementById("status-message");

function checkDownloadCapability() {
  var isDownloadSupported = "download" in document.createElement("a");

  if (!isDownloadSupported) {
    statusMessage.textContent =
      "Il tuo browser non supporta il download diretto. Scegli l'opzione di visualizzazione.";
    document.getElementById("download-button").disabled = true;
    document.getElementById("download-button").classList.add("disabled");
    document.getElementById("download-button2").disabled = true;
    document.getElementById("download-button2").classList.add("disabled");
  }
}

document.addEventListener("DOMContentLoaded", checkDownloadCapability);

