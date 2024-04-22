var translations = {
  a1: {
    english: "Return to homepage",
    spanish: "Volver a la página principal",
  },
  a2: {
    english: "Select language",
    spanish: "Elegir la idioma",
  },
  span1: {
    english: "The topics we deal with are varied: sports, culture, commitment, secularism, civic participation... These debates take place in different neighbourhoods of Clermont-Ferrand Clermont-Ferrand and are of growing interest to local professionals.",
    spanish: "Los temas que abordamos son variados: deportes, cultura, compromiso, laicidad, participación cívica... Estos debates tienen lugar en diferentes barrios de Clermont-Ferrand y son de interés creciente para los profesionales locales.",
  },
  p1: {
    english: "The Youth Professionnals in Auvergne’s Network (in French Réseau Professionnel de la Jeunesse en Auvergne, RPJA) is an association created in 2012, with the aim of exchanging best practices and capitalizing on experiences in the youth field. We bring together youth workers from different types of organizations: youth services of local authorities, associations, youth centers, social workers, national education, municipalities, etc. Our main members work daily with young people: it has been their profession for 2 to 30 years. We organize seminars where social workers, specialized prevention educators, elected officials, youth leaders, volunteers, and teachers from our local networks come together to discuss and share friendly moments around topics always related to youth.",
    spanish: "La Red Profesional Juvenil de Auvernia (en francés Réseau Professionnel de la Jeunesse en Auvergne, RPJA) es una asociación creada en 2012, cuyo objetivo es el intercambio de buenas prácticas y la capitalización de experiencias en el ámbito de la juventud. Agrupamos a trabajadores juveniles de diferentes tipos de organizaciones: servicios juveniles de entidades locales, asociaciones, centros juveniles, trabajadores sociales, educación nacional, municipios, etc. Nuestros principales miembros trabajan diariamente con jóvenes: ha sido su profesión durante 2 a 30 años. Organizamos seminarios donde trabajadores sociales, educadores especializados en prevención, funcionarios electos, líderes juveniles, voluntarios y profesores de nuestras redes locales se reúnen para discutir y compartir momentos amistosos en torno a temas siempre relacionados con la juventud.",
  },
  p2: {
    english: "We are used to facilitating meetings, advising, accompanying and encouraging the emergence of projects; and we believe in the strength and power of networking and mutual help. The diversity and experience of the members of our association provide us with a very good knowledge of the territorial network. We encourage local dynamics by linking professionals from the associative, institutional, national education, state services and local administration sectors... We are particularly committed to the fight against inequalities and we have a thorough understanding of the mechanisms and actions within the Security Priority Zones (QPV). Our premises, located on Rue des Jacobins, are at the heart of the new QPV Centre.",
    spanish: "Estamos acostumbrados a facilitar reuniones, asesorar, acompañar y fomentar la aparición de proyectos; y creemos en la fuerza y el poder del networking y la ayuda mutua. La diversidad y experiencia de los miembros de nuestra asociación nos proporcionan un conocimiento muy bueno de la red territorial. Animamos las dinámicas locales vinculando a profesionales de los sectores asociativo, institucional, de la Educación Nacional, de los servicios estatales y de la administración local... Estamos particularmente comprometidos en la lucha contra las desigualdades y tenemos una comprensión exhaustiva de los dispositivos y acciones dentro de las Zonas de Prioridad de Seguridad (QPV). Nuestras instalaciones, ubicadas en la Rue des Jacobins, están en el corazón del nuevo Centro QPV.",
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
