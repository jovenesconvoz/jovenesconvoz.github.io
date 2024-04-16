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
