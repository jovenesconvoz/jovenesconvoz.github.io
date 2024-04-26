// Object containing translations for various text elements on the page.
var translations = {
  a1: {
    english: "Return to homepage",
    spanish: "Volver a la página principal",
  },
  a2: {
    english: "Select language",
    spanish: "Elegir la idioma",
  },
  span1_text_handbook: {
    english: "English translation for span1",
    spanish: "Spanish translation for span1",
  },
  p1_text_handbook: {
    english: "English translation for p1",
    spanish: "Spanish translation for p1",
  },
};

// Function to toggle the language displayed on the webpage.
function toggleLanguage(language) {
  // Select all elements that need language updates using the class 'text-to-translate'.
  var elementsToUpdate = document.querySelectorAll(".text-to-translate");

  // Loop through each element to update its content based on the selected language.
  elementsToUpdate.forEach(function (element) {
    // Initially set the opacity to 0 to create a fading effect.
    element.style.opacity = 0;

    // Set a timeout to delay the update, allowing the fade effect to show.
    setTimeout(function () {
      // Check if there is a translation available for the element's ID and the selected language.
      if (translations[element.id]) {
        // Update the innerHTML of the element to the new language text.
        element.innerHTML = translations[element.id][language];
      }

      // Set opacity back to 1 to make the element fully visible again.
      element.style.opacity = 1;
    }, 500); // Delay time of 500 milliseconds.
  });
}

// Event listener that triggers when the DOM content is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements that need to have their original texts saved.
  var elementsToSave = document.querySelectorAll(".text-to-translate");

  // Initialize an object to store original texts if it doesn't exist.
  originalTexts = originalTexts || {};

  // Loop through each element to save its original innerHTML.
  elementsToSave.forEach(function (element) {
    // Save the original innerHTML of each element by its ID.
    originalTexts[element.id] = element.innerHTML;
  });
});