var translations = {
  a1: {
    english: "Return to homepage",
    spanish: "Volver a la página principal",
  },
  h1: {
    english: "ERASMUS+ PROGRAMME",
    spanish: "PROGRAMA ERASMUS+",
  },

  h2: {
    english: "ERASMUS+ PROGRAMME",
    spanish: "PROGRAMA ERASMUS+",
  },

  s1: {
    english:
      "Erasmus+, the European Union s programme for education, training, youth and sport, offers a unique opportunity for students, teachers, young youth and sport, offers a unique opportunity for students, teachers, young people and professionals from all fields to explore new experiences and broaden their horizons. professionals from all backgrounds to explore new experiences and broaden their horizons.",
    spanish:
      "Erasmus+, el programa de la Unión Europea para la educación, la formación, la juventud y el deporte, ofrece una oportunidad única para que estudiantes, profesores, jóvenes y profesionales de todos los ámbitos exploren nuevas experiencias y amplíen sus horizontes",
  },

  p0: {
    english:
      "Since 2014, the Programme has been called Erasmus+, a very significant + as it marks the considerable enlargement, the extension - not only geographical and sectoral - which has allowed for more than 600,000 mobility activities in 2021. The programme s actions now cover all areas of Education - from primary school to university - Youth and Sport. The age range and profile of participants, the types of organisations involved and the projects that can be funded have been broadened. Learning continues to be central to all actions of the Programme, but with an increasing focus and balance between Formal, Non-formal and Vocational Education and Training.",
    spanish:
      "Desde 2014, el Programa se denomina Erasmus+, un + muy significativo ya que marca la considerable ampliación, la extensión -no solo geográfica y sectorial- que ha permitido superar las 600.000 actividades de movilidad en 2021. Las acciones del programa abarcan ahora todos los ámbitos de la Educación -desde la escuela primaria hasta la universidad-, la Juventud y el Deporte. Se ha ampliado el rango de edad y el perfil de los participantes, los tipos de organizaciones implicadas y los proyectos que pueden financiarse. El aprendizaje sigue siendo fundamental en todas las acciones del Programa, pero con un enfoque y un equilibrio cada vez mayores entre la Educación y Formación Formal, No Formal y Profesional",
  },
  p1: {
    english:
      "It has been said that the European Union is the greatest political project of the post-war period, and it is in all likelihood correct to say that it is the greatest project ever realised on our continent. Among the most interesting, longest-lived and numerically most important initiatives the EU has created is undoubtedly the Erasmus Programme. In its 37 years of existence (it was born in 1987) Erasmus has involved more than 13 mln people; about 5 mln young people and students have had opportunities for mobility and learning abroad, 31 countries have joined, practically all European universities are active in the Programme. It is a true success story, a phenomenon that perhaps represents the European spirit like no other and which, despite its 37 years of existence, sees a constant increase in the number of those who actively take part in the various actions proposed by the Programme (in 1987 there were only 3,000 participating students, whereas today there are over 600,000 Europeans, with a very varied profile, who benefit from it. Many changes have been made to the Programme over the years, all with the aim of turning challenges into opportunities, not least those of the COVID-19 Pandemic and the war in Ukraine to which the EU Commission responded by giving Erasmus great flexibility. The new challenges are called Digital Transition and Ecological Sustainability",
    spanish:
      "Se ha dicho que la Unión Europea es el mayor proyecto político de la posguerra, y con toda probabilidad es correcto afirmar que es el mayor proyecto jamás realizado en nuestro continente. Entre las iniciativas más interesantes, longevas y numéricamente más importantes que ha creado la UE se encuentra sin duda el Programa Erasmus. En sus 37 años de existencia (nació en 1987) Erasmus ha implicado a más de 13 millones de personas; unos 5 millones de jóvenes y estudiantes han tenido oportunidades de movilidad y aprendizaje en el extranjero, 31 países se han adherido, prácticamente todas las universidades europeas participan activamente en el Programa. Se trata de una verdadera historia de éxito, un fenómeno que tal vez represente como ningún otro el espíritu europeo y que, a pesar de sus 37 años de existencia, ve aumentar constantemente el número de quienes participan activamente en las diversas acciones propuestas por el Programa (en 1987 sólo había 3.000 estudiantes participantes, mientras que hoy son más de 600.000 los europeos, con un perfil muy variado, que se benefician de él. A lo largo de los años se han introducido numerosos cambios en el Programa, todos ellos con el objetivo de convertir los retos en oportunidades, sin olvidar los de la Pandemia COVID-19 y la guerra de Ucrania, a los que la Comisión de la UE respondió dotando a Erasmus de una gran flexibilidad. Los nuevos retos se denominan Transición Digital y Sostenibilidad Ecológica.",
  },
  p2: {
    english: "5 types of Action in the 2021 - 2027 edition:",
    spanish: "5 tipos de Acciones en la edición 2021 - 2027:",
  },
  p3: {
    english:
      "3 Key Actions (Ka1 Mobility; Ka2 Cooperation, Innovation, Good Practices; Ka3 Analysis and Innovative Policies)",
    spanish:
      "3 Acciones Clave (Ka1 Movilidad; Ka2 Cooperación, Innovación, Buenas Prácticas; Ka3 Análisis y Políticas Innovadoras)1",
  },
  p4: {
    english:
      " Jean Monnet (measures to support teaching, learning, research and debate about the EU) ",
    spanish:
      "Jean Monnet (medidas de apoyo a la enseñanza, el aprendizaje, la investigación y el debate sobre la UE) ",
  },
  p5: {
    english: "Erasmus Sport (learning/training mobility for sports staff)",
    spanish:
      "Erasmus Sport (movilidad de aprendizaje/formación para el personal deportivo)",
  },
  p6: {
    english:
      "Faced with these large numbers, with all the initiatives that Erasmus has supported since its birth, it is almost dizzying to think that even Jóvenes con Voz with its partnership, mobilities, actors involved, activities and its Intellectual Products is within this great process. Besides, as great as the Erasmus Movement as a whole is, it should not be forgotten that it is substantiated by many small initiatives at the centre of which is the person, the individual with his or her particular needs, qualities, skills.",
    spanish:
      "Ante estas grandes cifras, con todas las iniciativas que Erasmus ha apoyado desde su nacimiento, da casi vértigo pensar que incluso Jóvenes con Voz con su partenariado, movilidades, actores implicados, actividades y sus Productos Intelectuales está dentro de este gran proceso. Además, por grande que sea el Movimiento Erasmus en su conjunto, no hay que olvidar que se sustenta en muchas pequeñas iniciativas en cuyo centro está la persona, el individuo con sus necesidades, cualidades, habilidades particulares.",
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
