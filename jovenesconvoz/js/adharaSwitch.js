// Object to store key-value pairs of translation texts for each element
var translations = {
    'a1_text_adhara': {
        'english': 'Return to homepage',
        'spanish': 'Volver a la página principal'
    }, 
    'a2_text_adhara': {
        'english': 'Select language',
        'spanish': 'Elegir la idioma'
    },
    'span1_text_adhara': {
        'english': 'English translation for span1',
        'spanish': 'Spanish translation for span1'
    },
    'p1_text_adhara': {
        'english': 'English translation for p1',
        'spanish': 'Spanish translation for p1'
    }
};

// Function to change the language
function toggleLanguage(language) {
    var elementsToUpdate = document.querySelectorAll('.text-to-translate');
    
    elementsToUpdate.forEach(function(element) {
        var id = element.id;
        if (translations[id]) {
            element.innerHTML = translations[id][language];
        }
    });
}

// When the document is ready, store the original text of each element
document.addEventListener('DOMContentLoaded', function() {
    var elementsToSave = document.querySelectorAll('.text-to-translate');
    
    elementsToSave.forEach(function(element) {
        originalTexts[element.id] = element.innerHTML; // <-- questa riga è stata commentata
    });
});
