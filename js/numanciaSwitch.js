// Object containing translations for various text elements on the page.
var translations = {
  a1: {
    english: "Return to homepage",
    spanish: "Volver a la página principal",
  },
  h1: {
    english: "Youth Centre of Numancia de La Sagra",
    spanish: "Centro Juvenil de Numancia de La Sagra",
  },
  span1: {
    english:
      "Our main objective is to provide the young people of our town with the tools and support they need to reach their full potential.",
    spanish:
      "Nuestro principal objetivo es proporcionar a los jóvenes de nuestro pueblo las herramientas y el apoyo necesarios para alcanzar su máximo potencial",
  },
  p1: {
    english:
      "We are located in Numancia de la Sagra, a small town in the area of La Sagra between Toledo and Madrid. Our main goal is to provide the means necessary for the youngsters to accomplish great things. With our work we want to invite them to participate in the activities, encourage them to prepare their own ones to share with others and to gain the experience and knowledge they need in their lives. To  achieve this objective we organize projects and activities in different areas such as art, dance, sports or music. In addition to international projects with other countries such as exchanges.",
    spanish:
      "Estamos localizados en Numancia de La Sagra, un pequeño pueblo de la zona de La Sagra entre Toledo y Madrid. Nuestro principal objetivo es proporcionar los medios necesarios para los jóvenes y lograr grandes cosas. Con nuestro trabajo queremos invitarles a participar en las actividades, animarles a preparar las suyas propias para compartirlas con otros y ganar la experiencia y conocimiento necesarios en sus vidas. Para conseguir este objetivo organizamos proyectos y actividades de distintos ámbitos como el arte, el baile, el deporte o la música. Además de proyectos internacionales junto a otros países como intercambios.",
  },
  btn1: {
    english: "Learn more",
    spanish: "Para saber más",
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
