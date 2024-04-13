document.addEventListener("DOMContentLoaded", function() {
    var consentGiven = localStorage.getItem('cookieConsentGiven');
    if (consentGiven === null) {
        // Definizione dell'oggetto _iub se non esiste
        var _iub = _iub || [];

        // Configurazione di iubenda con i dettagli specifici forniti
        _iub.csConfiguration = {
            "askConsentAtCookiePolicyUpdate": true,
            "enableFadp": true,
            "enableLgpd": true,
            "enableUspr": true,
            "fadpApplies": true,
            "floatingPreferencesButtonDisplay": "anchored-center-left",
            "lang": "es",
            "perPurposeConsent": true,
            "siteId": 3592554,
            "usprApplies": true,
            "whitelabel": false,
            "cookiePolicyId": 81824246,
            "banner": {
                "acceptButtonDisplay": true,
                "closeButtonDisplay": false,
                "customizeButtonDisplay": true,
                "explicitWithdrawal": true,
                "listPurposes": true,
                "position": "float-bottom-center",
                "rejectButtonDisplay": true,
                "showPurposesToggles": true,
                "showTitle": false
            }
        };

        // Caricamento degli script di iubenda
        loadCookieManagementScripts();
    } else {
        console.log("Il sistema di gestione dei cookie non viene ricaricato perché il consenso è già stato gestito.");
    }
});

function loadCookieManagementScripts() {
    // Script di iubenda e altri necessari per il funzionamento
    var script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = "https://cs.iubenda.com/autoblocking/3592554.js";
    document.head.appendChild(script1);

    var script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = "//cdn.iubenda.com/cs/gpp/stub.js";
    document.head.appendChild(script2);

    var script3 = document.createElement('script');
    script3.type = 'text/javascript';
    script3.src = "//cdn.iubenda.com/cs/iubenda_cs.js";
    script3.charset = 'UTF-8';
    script3.async = true;
    document.head.appendChild(script3);
}
