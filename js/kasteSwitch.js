
var translations = {
  a1: {
    english: "Return to homepage",
    spanish: "Volver a la página principal",
  },
  span1: {
    english:
      "Traditional culture, folk music, handicrafts, cultural history, cultural relations, education",
    spanish:
      "Cultura tradicional, música folclórica, artesanía, historia cultural, relaciones culturales, educación",
  },
  p1: {
    english:
      'Tradicional culture inicaitive center "KasTe” is family NGO, founded in 2008. Organizations aims are',
    spanish:
      'El Centro Inicativo de Cultura Tradicional "KasTe" es una ONG familiar fundada en 2008. Los objetivos de la organización son',
  },
  p2: {
    english: "To explore, identify and promote the traditional cultur",
    spanish: "Explorar, identificar y promover la cultura tradicional",
  },
  p3: {
    english: "Educate the public on cultural matters",
    spanish: "Educar al público en materia cultural",
  },
  p4: {
    english:
      "Involve young people, families and other public in culture activities",
    spanish:
      "Implicar a jóvenes, familias y otros públicos en actividades culturales",
  },
  p5: {
    english: "Promote traditional and ecological life style",
    spanish: "Promover un estilo de vida tradicional y ecológico",
  },

  p6: {
    english: "Youth work, non-formal education",
    spanish: "Trabajo juvenil, educación no formal",
  },

  p7: {
    english:
      "NGO mainly work’s with different culture projects; organize traditional music, dance festivals, seminars, lectures, workshops, traditional culture camp, trainings, and educational programs for families, children and youth etc. Organization also has international project experience – youth exchange, cultural relations, international festivals, camps. Working area mainly is Cesis district district.",
    spanish:
      "La ONG trabaja principalmente con diferentes proyectos culturales; organiza festivales de música y danza tradicionales, seminarios, conferencias, talleres, campamentos de cultura tradicional, cursos de formación y programas educativos para familias, niños y jóvenes, etc. La organización también tiene experiencia en proyectos internacionales: intercambio de jóvenes, relaciones culturales, festivales internacionales y campamentos. Su área de trabajo es principalmente el distrito de Cesis.",
  },
  p8: {
    english:
      "Drabeši manor craft house, which is opened from 2011 and is public space for art and craft workshops, now there is 12 craftsmen - weaver, seamstress, glass painter, ceramic artist, musical instrument master, leather handler, knitter, ancient medicine wife, musicians, jewellery maker, story teller. Every year different workshops and master classes are organized and from September till May every week there are craft lessons held. Ģikši international dance night – traditional dance festival, which has been organized for more than 15 years. Every year it host’s dancers and musicians from Latvia, Estonia, Lituania, Belarus, Poland, France, Ukraine etc.",
    spanish:
      " La casa de artesanía de la mansión Drabeši, que abrió sus puertas en 2011 y es un espacio público para talleres de arte y artesanía, donde actualmente trabajan 12 artesanos: tejedores, costureras, pintores de vidrio, ceramistas, maestros en instrumentos musicales, marroquineros, tejedores, curanderos, músicos, joyeros y cuentacuentos. Cada año se organizan diferentes talleres y clases magistrales, y de septiembre a mayo todas las semanas se imparten clases de artesanía. Noche internacional de danza de Ģikši - festival de danza tradicional, que se organiza desde hace más de 15 años. Cada año acoge a bailarines y músicos de Letonia, Estonia, Lituania, Bielorrusia, Polonia, Francia, Ucrania, etc. ",
  },
  p9: {
    english:
      "Organization dosen’t have a specific target group – youngsters, aim of all projects is to involve all generations and give them possibility to create and work together. But some activities are especially for youngsters and children, to popularize traditional culture between youngsters and to continue the heritage of traditional culture, like Culture Saturdays, Culture mornings. In the last few years organization have created two very successful Youth exchange project’s “Emotion explosion” and “Valid Value”, had been partner organization in some youth exchanges in Spain, Germany and Turkey and made a local project “Creative industries possibility for youngsters in rural areas”. In 2019 and 2021 in cooperation with local schools and youth centers two projects were implemented, where youngsters could learn about history, how to play traditional music instruments do crafts and how to make animation’s.",
    spanish:
      'El objetivo de todos los proyectos es implicar a todas las generaciones y darles la posibilidad de crear y trabajar juntas. Pero algunas actividades son especialmente para jóvenes y niños, para popularizar la cultura tradicional entre los jóvenes y continuar el patrimonio de la cultura tradicional, como los Sábados Culturales, las Mañanas Culturales. En los últimos años, la organización ha creado dos proyectos de intercambio juvenil de gran éxito: "Emotion Explosion" y "Valid Value", ha sido organización asociada en algunos intercambios juveniles en España, Alemania y Turquía y ha realizado un proyecto local: "Creative industries possibility for youngsters in rural areas". En 2019 y 2021, en cooperación con escuelas y centros juveniles locales, se pusieron en marcha dos proyectos en los que los jóvenes podían aprender historia, a tocar instrumentos musicales tradicionales, a hacer manualidades y a crear animaciones.',
  },
  p10: {
    english:
      "This year togehther with E. Veidenbaums museum and local youth center we started a Solidarity project „Culture, participation, personality” – in this project around 20 youngsters had possibility to work together with profesional artists, actors, musicians, poets, culture profesionals to create their own festiwal of art, poetry, music and creative freedom",
    spanish:
      'Este año, junto con el museo E. Veidenbaums y el centro juvenil local, pusimos en marcha el proyecto solidario "Cultura, participación, personalidad", en el que unos 20 jóvenes tuvieron la oportunidad de trabajar con artistas profesionales, actores, músicos, poetas y profesionales de la cultura para crear su propio festival de arte, poesía, música y libertad creativa.',
  },
  h1: {
    english: "Biggest projects",
    spanish: "Proyectos más importantes",
  },

  btn1: {
    english: "Learn more",
    spanish: "Para saber más",
  },
};


function toggleLanguage(language) {
  var elementsToUpdate = document.querySelectorAll(".text-to-translate");

  elementsToUpdate.forEach(function (element) {
    var id = element.id;
    if (translations[id]) {
      element.innerHTML = translations[id][language];
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
  var elementsToSave = document.querySelectorAll(".text-to-translate");

  elementsToSave.forEach(function (element) {
    originalTexts[element.id] = element.innerHTML; 
  });
});
