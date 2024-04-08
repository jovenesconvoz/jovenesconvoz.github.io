// Object to store key-value pairs of translation texts for each element
var translations = {
    'a1': {
        'english': 'Partner',
        'spanish': 'Socios'
    }, 
    'a2': {
        'english': 'Outcomes',
        'spanish': 'Resultados'
    },
    'a3': {
        'english': 'Select language',
        'spanish': 'Elegir idioma'
    },
    'span1': {
        'english': 'English translation for span1',
        'spanish': 'Spanish translation for span1'
    },
    'button1': {
        'english': 'Learn more',
        'spanish': 'Descubre más'
    },
    'button2': {
        'english': 'Learn more',
        'spanish': 'Descubre más'
    },
    'button3': {
        'english': 'Learn more',
        'spanish': 'Descubre más'
    },
    'button4': {
        'english': 'Learn more',
        'spanish': 'Descubre más'
    },
    'p0': {
        'english': 'Jóvenes con Voz: Youth Participation, Community, Active Citizenship Jóvenes con Voz is a two-year project approved and funded in 2022 by the Spanish National Agency Erasmus+ with funds from Key Action 2 YOUTH (KA220-YOU - Cooperation Partnerships in Youth).',
        'spanish': 'Jóvenes con Voz es un proyecto de dos años de duración, aprobado y financiado en 2022 por la Agencia Nacional Española Erasmus+ con fondos de la Acción Clave 2 YOUTH (KA220-YOU - Cooperation Partnerships in Youth)'
    },
    'p1': {
        'english': 'Themes of the project (closely related each other): Youth Participation thought of as a practical exercise of democracy in communities, in the living and learning contexts of young people, and Citizenship, understood as a process, i.e., all that needs to be done, prepared, implemented concretely and progressively (especially by &quot;adults&quot;) so that young people can fully achieve it. Particularly significant and explanatory is the title of the project, which emphasizes the need - strongly felt by the new generations - to have their voices heard, that is, to participate actively and to have an impact in decision-making processes, in the definition of youth policies, in promoting social renewal (young people as the architects of their own generational destiny). Ultimately, that is the Goal of Jóvenes con Voz: to raise the level of awareness of our young people, offer them support and the necessary tools to allow them to acquire a defined role, greater weight and consideration in civil society.',
        'spanish': 'Temas del proyecto (estrechamente interconectados entre sì): la Participación Juvenil concebida como un ejercicio práctico de democracia en las comunidades, en los contextos de vida y aprendizaje de los jóvenes, y la Ciudadanía, entendida como un proceso, es decir, todo lo que hay que hacer, preparar, implementar concreta y progresivamente (especialmente por parte de los &quot;adultos&quot;) para que los jóvenes puedan alcanzarla plenamente. Especialmente significativo y explicativo es el título del proyecto, que hace hincapié en la necesidad - fuertemente sentida por las nuevas generaciones - de hacer oír su  voz, es decir, de participar activamente e influir en los procesos de toma de decisiones, en la definición de las políticas de juventud, en la promoción de la renovación social (los jóvenes artífices de su propio destino generacional). En definitiva, ese es el objetivo de Jóvenes con Voz: elevar el nivel de sensibilización de los jóvenes, ofrecerles apoyo y las herramientas necesarias para que adquieran un rol definido, mayor peso y consideración ante la sociedad civil.'
    },
    'p2': {
        'english': '5 types of Action in the 2021 - 2027 edition:',
        'spanish': 'Jóvenes con Voz es el resultado de la cooperación de 5 socios de 4 paises europeos: la Asociación Adhara (organización líder del proyecto) y el Centro Jóven del Ayuntamiento de Numancia de la Sagra (España), Euro-Net (Italia), KasTe (Letonia), la red RPJA (Francia). En los dos años de su puesta en marcha, ha implicado activamente a responsables de Asociaciones y Centros Juveniles, Educadores/Animadores, Formadores y Expertos en Juventud, Políticos, jóvenes de las 5 organizaciones partner, entre ellos, algunos con fuertes competencias en ICT. Dimensión local y Animación Dos elementos constituyeron el terreno común sobre el que los socios establecieron una fructífera'
    },
    'p3': {
        'english': '3 Key Actions (Ka1 Mobility; Ka2 Cooperation, Innovation, Good Practices; Ka3 Analysis and Innovative Policies)',
        'spanish': '3 Acciones Clave (Ka1 Movilidad; Ka2 Cooperación, Innovación, Buenas Prácticas; Ka3 Análisis y Políticas Innovadoras)1'
    },
    'p4': {
        'english': ' Jean Monnet (measures to support teaching, learning, research and debate about the EU) ',
        'spanish': 'Jean Monnet (medidas de apoyo a la enseñanza, el aprendizaje, la investigación y el debate sobre la UE) '
    },
    'p5': {
        'english': 'Erasmus Sport (learning/training mobility for sports staff)',
        'spanish': 'Erasmus Sport (movilidad de aprendizaje/formación para el personal deportivo)'
    },
    'p6': {
        'english': 'Faced with these large numbers, with all the initiatives that Erasmus has supported since its birth, it is almost dizzying to think that even Jóvenes con Voz with its partnership, mobilities, actors involved, activities and its Intellectual Products is within this great process. Besides, as great as the Erasmus Movement as a whole is, it should not be forgotten that it is substantiated by many small initiatives at the centre of which is the person, the individual with his or her particular needs, qualities, skills.',
        'spanish': 'Ante estas grandes cifras, con todas las iniciativas que Erasmus ha apoyado desde su nacimiento, da casi vértigo pensar que incluso Jóvenes con Voz con su partenariado, movilidades, actores implicados, actividades y sus Productos Intelectuales está dentro de este gran proceso. Además, por grande que sea el Movimiento Erasmus en su conjunto, no hay que olvidar que se sustenta en muchas pequeñas iniciativas en cuyo centro está la persona, el individuo con sus necesidades, cualidades, habilidades particulares.'
    },
    
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
