// URL of your PDF file
var pdfUrl = "assets/resources/MANUAL V7.pdf";

// JavaScript code for the download button
document.getElementById("view-button").addEventListener("click", function () {
  // Create a temporary anchor element, set its properties and trigger a click
  var downloadLink = document.createElement("a");
  downloadLink.href = pdfUrl;
  downloadLink.download = "MANUAL V7.pdf";
  downloadLink.click();

  // Remove the anchor element after the download is complete
  downloadLink.remove();
});

// JavaScript code for the preview button
document.getElementById("view-button").addEventListener("click", function () {
  // Open the PDF in a new tab or window
  window.open(pdfUrl, "_blank");
});

// Element used to display status or feedback messages to the user
var statusMessage = document.getElementById("status-message");

// Check if the browser supports forced download
function checkDownloadCapability() {
  var isDownloadSupported = "download" in document.createElement("a");

  if (!isDownloadSupported) {
    // Display an informative message to the user
    statusMessage.textContent =
      "Il tuo browser non supporta il download diretto. Scegli l'opzione di visualizzazione.";
    document.getElementById("download-button").disabled = true;
  }
}

// Call the check function once the page is loaded
document.addEventListener("DOMContentLoaded", checkDownloadCapability);
