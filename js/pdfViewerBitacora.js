var pdfUrl = "assets/resources/bitacora.pdf";

document.getElementById("viewbutton-bitacora").addEventListener("click", function () {
  window.open(pdfUrl, "_blank");
});

var statusMessage = document.getElementById("status-message");

function checkDownloadCapability() {
  var isDownloadSupported = "download" in document.createElement("a");

  if (!isDownloadSupported) {
    statusMessage.textContent =
      "Il tuo browser non supporta il download diretto. Scegli l'opzione di visualizzazione.";
    document.getElementById("download-button").disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", checkDownloadCapability);
