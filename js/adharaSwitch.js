
var translations = {
  a1_text_adhara: {
    english: "Return to homepage",
    spanish: "Volver a la página principal",
  },
  a2_text_adhara: {
    english: "Select language",
    spanish: "Elegir la idioma",
  },
  span1_text_adhara: {
    english: "English translation for span1",
    spanish: "Spanish translation for span1",
  },
  p1_text_adhara: {
    english: "English translation for p1",
    spanish: "Spanish translation for p1",
  },
};

function toggleLanguage(language) {
  var elementsToUpdate = document.querySelectorAll(".text-to-translate");

  elementsToUpdate.forEach(function (element) {
    element.style.opacity = 0;

    setTimeout(function () {
      if (translations[element.id]) {
        element.innerHTML = translations[element.id][language];
      }

      element.style.opacity = 1;
    }, 500);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var elementsToSave = document.querySelectorAll(".text-to-translate");

  elementsToSave.forEach(function (element) {
    originalTexts[element.id] = element.innerHTML;
  });
});
