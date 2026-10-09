const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const levelButtons = document.querySelectorAll('.level-btn');
const levelPanels = document.querySelectorAll('.level-panel');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

levelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetLevel = button.dataset.level;

    levelButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn === button);
    });

    levelPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.panel === targetLevel);
    });
  });
});
/* --- Fichas de contenido --- */

const FICHAS = {
  genetica: {
    icon: '🧬',
    iconClass: 'icon-green',
    eyebrow: 'Tema destacado · Genética',
    title: 'Genética y herencia',
    lead: 'La genética estudia cómo se transmiten los caracteres de una generación a otra mediante el ADN.',
    sections: [
      {
        heading: '¿Qué es el ADN?',
        items: [
          'Ácido desoxirribonucleico: la molécula que guarda la información hereditaria.',
          'Está formado por dos cadenas en forma de doble hélice.',
          'Sus bases son adenina (A), timina (T), citosina (C) y guanina (G).',
          'El orden de esas bases forma los genes.',
        ],
      },
      {
        heading: 'Genes y genoma',
        items: [
          'Un gen es un segmento de ADN que codifica una proteína.',
          'El conjunto completo de genes de un organismo es su genoma.',
          'El ser humano tiene unos 20.000–25.000 genes.',
          'La genómica es la disciplina que estudia los genomas completos.',
        ],
      },
      {
        heading: 'Cómo se hereda',
        items: [
          'Los cromosomas se heredan: 23 de la madre y 23 del padre.',
          'Las células reproductoras (gametos) tienen la mitad, 23 cromosomas.',
          'La recombinación genética genera nuevas combinaciones de alelos.',
          'Los alelos dominante y recesivo determinan cómo se expresa un rasgo.',
        ],
      },
      {
        heading: 'ARN y síntesis de proteínas',
        items: [
          'El ARN mensajero (ARNm) copia la información del ADN.',
          'El ARN de transferencia (ARNt) lleva los aminoácidos.',
          'Los ribosomas arman las proteínas en el proceso de traducción.',
          'La genética es clave para entender el funcionamiento celular.',
        ],
      },
    ],
    source: 'Nivel secundario · 3.º y 5.º de secundaria',
  },

  celulas: {
    icon: '🧫',
    iconClass: 'icon-blue',
    eyebrow: 'Tema destacado · Célula',
    title: 'Células y funciones',
    lead: 'La célula es la unidad mínima de vida: todo ser vivo está formado por una o varias células.',
    sections: [
      {
        heading: 'Teoría celular',
        items: [
          'Todo ser vivo está formado por una o más células.',
          'La célula es la unidad estructural, funcional y genética de la vida.',
          'Las células nacen de otras células preexistentes.',
        ],
      },
      {
        heading: 'Célula procariota y eucariota',
        items: [
          'Procariotas: sin núcleo definido, como las bacterias.',
          'Eucariotas: con núcleo delimitado, como animales, plantas y hongos.',
          'Las eucariotas también poseen organelos membranosos.',
        ],
      },
      {
        heading: 'Núcle y material genético',
        items: [
          'El núcleo protege y organiza el ADN en cromosomas.',
          'El nucleolo interviene en la fabricación de ribosomas.',
          'Los cromosomas se condensan durante la división celular.',
        ],
      },
      {
        heading: 'Organelos y funciones',
        items: [
          'Mitocondrias: producen ATP, la energía de la célula.',
          'Ribosomas: fabrican proteínas.',
          'Aparato de Golgi: modifica y envasa proteínas y lípidos.',
          'Lisosomas: digieren residuos y estructuras desgastadas.',
          'Retículo endoplásmico: fabrica y transporta proteínas y lípidos.',
          'Citoesqueleto: da forma, soporte y movimiento a la célula.',
        ],
      },
      {
        heading: 'Membrana plasmática',
        items: [
          'Es semipermeable: deja pasar sustancias selectivamente.',
          'Está formada por una capa doble de fosfolípidos con proteínas.',
          'Participa en el transporte, la señalización y la división celular.',
        ],
      },
      {
        heading: 'Niveles de organización',
        items: [
          'Célula → tejido → órgano → sistema → organismo.',
          'Los tejidos se organizan para formar órganos con funciones concretas.',
          'Un sistema del cuerpo funciona de forma coordinada con otros.',
        ],
      },
    ],
    source: 'Nivel secundario · 1.º y 2.º de secundaria',
  },

  ecosistemas: {
    icon: '🌿',
    iconClass: 'icon-orange',
    eyebrow: 'Tema destacado · Ecología',
    title: 'Ecosistemas',
    lead: 'Un ecosistema es el conjunto de seres vivos y factores abióticos que interactúan en un lugar.',
    sections: [
      {
        heading: 'Componentes del ecosistema',
        items: [
          'Factores bióticos: plantas, animales, hongos y microorganismos.',
          'Factores abióticos: agua, luz, temperatura, suelo y aire.',
          'Productores, consumidores y descomponedores cumplen funciones distintas.',
        ],
      },
      {
        heading: 'Cadenas y redes alimentarias',
        items: [
          'Cadena alimentaria: productor → consumidor primario → consumidor secundario.',
          'Red alimentaria: un organismo puede tener varias fuentes de alimento.',
          'El flujo de energía va siempre en un solo sentido.',
          'La energía se pierde en forma de calor en cada nivel trófico.',
        ],
      },
      {
        heading: 'Relaciones entre seres vivos',
        items: [
          'Competencia: ambos organismos se ven afectados negativamente.',
          'Depredación: uno se beneficia y el otro es consumido.',
          'Mutualismo: ambos se ven beneficiados.',
          'Comensalismo: uno se beneficia y el otro no resulta afectado.',
          'Parasitismo: uno se beneficia y el otro resulta perjudicado.',
        ],
      },
      {
        heading: 'Biodiversidad',
        items: [
          'Es la variedad de formas de vida de un lugar.',
          'Incluye diversidad genética, de especies y de ecosistemas.',
          'Bolivia es uno de los países megadiversos del mundo.',
          'Su pérdida altera el equilibrio ecológico y la salud de los ecosistemas.',
        ],
      },
      {
        heading: 'Equilibrio y amenazas',
        items: [
          'Cambio climático, contaminación y sobreuso de recursos.',
          'Deforestación, erosión y pérdida de biodiversidad.',
          'Prácticas de conservación: áreas protegidas y uso responsable de los recursos.',
        ],
      },
    ],
    source: 'Nivel secundario · 2.º y 6.º de secundaria',
  },

  salud: {
    icon: '🧠',
    iconClass: 'icon-pink',
    eyebrow: 'Tema destacado · Salud',
    title: 'Salud y bienestar',
    lead: 'La salud es el estado de completo bienestar físico, mental y social, no solo la ausencia de enfermedad.',
    sections: [
      {
        heading: 'Dimensiones de la salud',
        items: [
          'Salud física: funcionamiento correcto del organismo.',
          'Salud mental: emociones y pensamientos bien gestionados.',
          'Salud social: relaciones armónicas con la comunidad.',
        ],
      },
      {
        heading: 'Sistemas del cuerpo humano',
        items: [
          'Digestivo: transforma los alimentos en nutrientes absorbibles.',
          'Respiratorio: intercambia oxígeno y dióxido de carbono.',
          'Circulatorio: distribuye oxígeno y nutrientes por el cuerpo.',
          'Excretor: elimina sustancias de desecho.',
          'Nervioso: coordina y transmite información.',
          'Endocrino: regula funciones mediante hormonas.',
          'Inmunológico: defiende al organismo de los patógenos.',
          'Reproductor: permite la continuidad de la especie.',
        ],
      },
      {
        heading: 'Enfermedades y prevención',
        items: [
          'Las enfermedades infecciosas se transmiten por patógenos.',
          'Vacunas, lavado de manos y ventilación reducen el riesgo.',
          'La dieta equilibrada y el ejercicio aportan resistencia al cuerpo.',
          'El uso correcto de antibióticos evita la resistencia bacteriana.',
        ],
      },
      {
        heading: 'Salud sexual',
        items: [
          'Se basa en el respeto, el consentimiento y la responsabilidad.',
          'Conocer el cuerpo ayuda a prevenir riesgos innecesarios.',
          'La puberty es una etapa normal de desarrollo.',
          'La menstruación es una fase natural del ciclo menstrual.',
        ],
      },
      {
        heading: 'Estilos de vida saludables',
        items: [
          'Alimentación variada, descanso y actividad física regular.',
          'Hidratación adecuada y gestión del estrés.',
          'Decisiones informadas sobre el consumo de sustancias.',
          'Chequeos médicos y consultas regulares de salud.',
        ],
      },
    ],
    source: 'Nivel secundario · 4.º y 6.º de secundaria',
  },
};

const fichaCards = document.querySelectorAll('[data-ficha]');
const fichaModal = document.getElementById('ficha-modal');
const fichaTitle = document.getElementById('ficha-title');
const fichaLead = document.getElementById('ficha-lead');
const fichaBody = document.getElementById('ficha-body');
const fichaIcon = document.getElementById('ficha-icon');
const fichaEyebrow = document.getElementById('ficha-eyebrow');
const fichaSource = document.getElementById('ficha-source');
const fichaCloseBtn = fichaModal.querySelector('.ficha-close');
let lastFocused = null;

function buildFichaBody(ficha) {
  fichaBody.innerHTML = '';

  ficha.sections.forEach((section) => {
    const wrap = document.createElement('section');
    wrap.className = 'ficha-section';

    const heading = document.createElement('h4');
    heading.textContent = section.heading;
    wrap.appendChild(heading);

    const list = document.createElement('ul');
    section.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });

    wrap.appendChild(list);
    fichaBody.appendChild(wrap);
  });
}

function openFicha(key) {
  const ficha = FICHAS[key];
  if (!ficha || !fichaModal) return;

  lastFocused = document.activeElement;

  fichaIcon.textContent = ficha.icon;
  fichaIcon.className = 'ficha-icon ' + (ficha.iconClass || '');
  fichaEyebrow.textContent = ficha.eyebrow;
  fichaTitle.textContent = ficha.title;
  fichaLead.textContent = ficha.lead;
  fichaSource.textContent = ficha.source;

  buildFichaBody(ficha);

  fichaModal.hidden = false;
  document.body.style.overflow = 'hidden';
  fichaCloseBtn.focus();
}

function closeFicha() {
  if (!fichaModal || fichaModal.hidden) return;

  fichaModal.hidden = true;
  document.body.style.overflow = '';

  if (lastFocused) lastFocused.focus();
}

fichaCards.forEach((card) => {
  card.addEventListener('click', () => openFicha(card.dataset.ficha));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openFicha(card.dataset.ficha);
    }
  });
});

if (fichaModal) {
  fichaModal.querySelectorAll('[data-ficha-close]').forEach((el) => {
    el.addEventListener('click', closeFicha);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeFicha();
  });
}
/* --- Notas --- */

const NOTAS_KEY = 'biomundo:notas';

const notasTriggers = document.querySelectorAll('[data-abrir-notas]');
const notasModal = document.getElementById('notas-modal');
const notasInput = document.getElementById('notas-input');
const notasStatus = document.getElementById('notas-status');
const notasBorrar = document.getElementById('notas-borrar');
const notasDescargar = document.getElementById('notas-descargar');
const notasCerrar = notasModal && notasModal.querySelector('.ficha-close');
let notasLastFocused = null;
let notasTimer = null;

function leerNotas() {
  try {
    return window.localStorage.getItem(NOTAS_KEY) || '';
  } catch (error) {
    return '';
  }
}

function mostrarEstadoNotas(texto) {
  if (notasStatus) notasStatus.textContent = texto;
}

function guardarNotas() {
  try {
    window.localStorage.setItem(NOTAS_KEY, notasInput.value);
    mostrarEstadoNotas('Guardado automático');
  } catch (error) {
    mostrarEstadoNotas('No se pudo guardar en este navegador');
  }
}

function abrirNotas() {
  if (!notasModal) return;

  notasLastFocused = document.activeElement;
  notasInput.value = leerNotas();

  notasModal.hidden = false;
  document.body.style.overflow = 'hidden';
  notasInput.focus();
  mostrarEstadoNotas('Guardado automático');
}

function cerrarNotas() {
  if (!notasModal || notasModal.hidden) return;

  notasModal.hidden = true;
  document.body.style.overflow = '';

  if (notasLastFocused) notasLastFocused.focus();
}

notasTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    abrirNotas();
  });
});

if (notasModal && notasInput) {
  notasInput.addEventListener('input', () => {
    mostrarEstadoNotas('Guardando…');
    window.clearTimeout(notasTimer);
    notasTimer = window.setTimeout(guardarNotas, 400);
  });

  notasModal.querySelectorAll('[data-notas-close]').forEach((el) => {
    el.addEventListener('click', cerrarNotas);
  });

  if (notasBorrar) {
    notasBorrar.addEventListener('click', () => {
      if (
        !notasInput.value ||
        window.confirm('¿Seguro que quieres borrar todas tus notas?')
      ) {
        notasInput.value = '';
        guardarNotas();
        notasInput.focus();
      }
    });
  }

  if (notasDescargar) {
    notasDescargar.addEventListener('click', () => {
      const blob = new Blob([notasInput.value], {
        type: 'text/plain;charset=utf-8',
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'mis-notas-biologia.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      mostrarEstadoNotas('Archivo descargado');
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !notasModal.hidden) {
      cerrarNotas();
    }
  });
}
/* --- Contenidos completos por nivel --- */
const TEMA_INFO = {
  'Introducción a la Biología': ['La Biología es la ciencia que estudia a los seres vivos, sus características, organización, funcionamiento y relación con el ambiente.', ['Estudia organismos desde las células hasta los ecosistemas.', 'Utiliza observación, experimentación y análisis de evidencias.', 'Se relaciona con la salud, el ambiente, la alimentación y la tecnología.'], 'Permite comprender cómo funciona la vida y valorar su diversidad.', 'Observar una planta y registrar sus cambios durante varios días.'],
  'La célula: estructura y funciones': ['La célula es la unidad estructural y funcional básica de los seres vivos.', ['Tiene membrana, citoplasma y material genético.', 'Las células eucariotas poseen núcleo definido.', 'Los organelos realizan funciones específicas para mantener la vida.'], 'Ayuda a comprender cómo están formados y cómo funcionan los organismos.', 'Las células musculares producen energía para permitir el movimiento.'],
  'Célula animal y vegetal': ['Las células animales y vegetales son eucariotas, pero presentan algunas diferencias en sus estructuras.', ['La vegetal posee pared celular, cloroplastos y una gran vacuola.', 'La animal no tiene pared celular ni cloroplastos.', 'Ambas poseen núcleo, membrana, citoplasma y otros organelos.'], 'Permite reconocer cómo la estructura celular se relaciona con la función.', 'Los cloroplastos permiten que las células vegetales realicen fotosíntesis.'],
  'Composición química de la célula': ['Las células están formadas por sustancias inorgánicas y orgánicas necesarias para sus funciones.', ['El agua es uno de sus componentes principales.', 'Las biomoléculas incluyen carbohidratos, lípidos, proteínas y ácidos nucleicos.', 'Los minerales participan en diferentes procesos celulares.'], 'Explica de qué materiales está construida y cómo funciona una célula.', 'Las proteínas participan en estructuras y reacciones del organismo.'],
  'Niveles de organización biológica': ['La vida se organiza en diferentes niveles, desde estructuras pequeñas hasta sistemas complejos.', ['Átomo y molécula forman parte de estructuras celulares.', 'Célula, tejido, órgano y sistema se integran en un organismo.', 'Los organismos forman poblaciones, comunidades y ecosistemas.'], 'Permite comprender cómo se relacionan las diferentes partes de la vida.', 'Las células musculares forman tejido muscular y este participa en órganos y sistemas.'],
  'Sistemas del cuerpo humano': ['Los sistemas del cuerpo humano son conjuntos de órganos que trabajan coordinadamente para realizar funciones vitales.', ['El digestivo procesa los alimentos.', 'El respiratorio intercambia gases.', 'El circulatorio transporta sustancias y el nervioso coordina respuestas.'], 'Ayuda a comprender el funcionamiento integrado del organismo.', 'El sistema respiratorio y el circulatorio trabajan juntos para llevar oxígeno a las células.'],
  'Nutrición, respiración y circulación': ['Son procesos esenciales mediante los cuales el organismo obtiene materia y energía y distribuye sustancias.', ['La nutrición aporta nutrientes y energía.', 'La respiración permite obtener energía y realizar intercambio de gases.', 'La circulación transporta oxígeno, nutrientes y desechos.'], 'Son indispensables para mantener las funciones vitales.', 'Después de comer, los nutrientes pasan al sistema circulatorio para ser distribuidos.'],
  'Reproducción y salud sexual': ['La reproducción permite la continuidad de las especies y la salud sexual comprende el cuidado responsable del cuerpo y las relaciones.', ['Puede existir reproducción sexual y asexual.', 'La salud sexual incluye información, respeto, consentimiento y responsabilidad.', 'El conocimiento del cuerpo ayuda a tomar decisiones saludables.'], 'Favorece una comprensión responsable de la reproducción y del cuidado personal.', 'Conocer los cambios de la pubertad ayuda a comprender el desarrollo humano.'],
  'Materia y energía': ['La materia es todo aquello que tiene masa y ocupa un lugar; la energía permite producir cambios y realizar trabajo.', ['La materia puede presentarse como sólido, líquido o gas.', 'La energía puede transformarse de una forma a otra.', 'Los seres vivos necesitan energía para realizar sus funciones.'], 'Relaciona los procesos biológicos con los cambios de materia y energía.', 'Las plantas transforman energía luminosa en energía química mediante la fotosíntesis.'],
  'Ecosistemas y equilibrio de la naturaleza': ['Un ecosistema está formado por seres vivos y factores físicos que interactúan en un lugar.', ['Los factores bióticos son los seres vivos.', 'Los factores abióticos incluyen agua, luz, suelo y temperatura.', 'El equilibrio depende de las relaciones entre los componentes.'], 'Ayuda a comprender la importancia de cuidar los ambientes naturales.', 'Una cadena alimentaria conecta plantas, herbívoros y depredadores.'],

  'Biodiversidad': ['La biodiversidad es la variedad de seres vivos, genes y ecosistemas presentes en una región.', ['Incluye diversidad genética, de especies y de ecosistemas.', 'Bolivia posee una gran variedad de ambientes y especies.', 'La conservación evita la pérdida de especies y funciones ecológicas.'], 'Permite valorar y proteger la riqueza natural.', 'Un bosque puede contener numerosas especies de plantas, animales y microorganismos.'],
  'Clasificación de los seres vivos': ['La clasificación organiza a los seres vivos según características compartidas y relaciones evolutivas.', ['Utiliza categorías como reino, filo, clase, orden, familia, género y especie.', 'La especie es una unidad fundamental de clasificación.', 'La clasificación científica facilita la identificación y el estudio.'], 'Permite ordenar la diversidad de organismos de manera comprensible.', 'El nombre científico ayuda a identificar una especie sin depender de nombres locales.'],
  'Reinos de la naturaleza': ['Los reinos son grandes grupos utilizados para organizar a los seres vivos según sus características.', ['Se consideran grupos como animales, plantas, hongos, protistas y bacterias en clasificaciones escolares.', 'Se analizan tipo de célula, nutrición y organización.', 'Las clasificaciones pueden cambiar con nuevos conocimientos científicos.'], 'Facilita el estudio de la diversidad de la vida.', 'Los hongos obtienen nutrientes de materia orgánica y no realizan fotosíntesis.'],
  'Plantas y animales': ['Las plantas y los animales son organismos eucariotas multicelulares con características y funciones diferentes.', ['Las plantas producen materia orgánica mediante fotosíntesis.', 'Los animales obtienen alimento de otros organismos.', 'Ambos poseen sistemas para crecer, responder y reproducirse.'], 'Permite comparar formas de vida y sus adaptaciones.', 'Una planta necesita luz para realizar fotosíntesis, mientras un animal obtiene alimento de su entorno.'],
  'Ecosistemas': ['Un ecosistema integra organismos vivos y factores no vivos que interactúan continuamente.', ['Incluye productores, consumidores y descomponedores.', 'La energía circula mediante cadenas y redes alimentarias.', 'Los cambios en un componente pueden afectar a los demás.'], 'Ayuda a comprender el funcionamiento de los ambientes naturales.', 'Un lago reúne agua, microorganismos, peces, plantas, luz y temperatura.'],
  'Cadenas y redes alimentarias': ['Una cadena alimentaria muestra el paso de materia y energía entre organismos; una red reúne varias cadenas relacionadas.', ['Los productores forman la base de muchas cadenas.', 'Los consumidores obtienen energía al alimentarse.', 'Los descomponedores reciclan materia.'], 'Permite entender las relaciones alimentarias de un ecosistema.', 'Hierba → saltamontes → rana → serpiente representa una cadena alimentaria.'],
  'Recursos naturales': ['Son elementos de la naturaleza que las personas utilizan para satisfacer necesidades.', ['Pueden ser renovables o no renovables.', 'Agua, suelo, bosques y minerales son recursos importantes.', 'Su uso responsable ayuda a evitar su agotamiento.'], 'Son fundamentales para la vida y el desarrollo de las comunidades.', 'El agua puede utilizarse para consumo, agricultura y producción de energía.'],
  'Medio ambiente y contaminación': ['El medio ambiente comprende las condiciones naturales y sociales que rodean a los seres vivos; la contaminación altera esas condiciones.', ['Puede afectar aire, agua y suelo.', 'Sus fuentes pueden ser residuos, humo, sustancias químicas y actividades humanas.', 'La prevención y el manejo adecuado de residuos reducen impactos.'], 'Ayuda a reconocer problemas ambientales y promover soluciones.', 'Separar residuos y evitar arrojar basura a los ríos reduce la contaminación.'],
  'Cambio climático': ['Es la modificación prolongada de los patrones climáticos, actualmente acelerada principalmente por actividades humanas que aumentan gases de efecto invernadero.', ['La quema de combustibles fósiles aumenta emisiones.', 'Puede modificar temperaturas, lluvias y ecosistemas.', 'La adaptación y la reducción de emisiones ayudan a enfrentar sus efectos.'], 'Permite comprender uno de los principales desafíos ambientales actuales.', 'La pérdida de hielo y los cambios de temperatura afectan a numerosos ecosistemas.'],
  'Salud comunitaria': ['Es el conjunto de acciones orientadas a proteger y mejorar la salud de las personas de una comunidad.', ['Incluye prevención de enfermedades y promoción de hábitos saludables.', 'Agua segura, saneamiento y vacunación son importantes.', 'La participación comunitaria fortalece la prevención.'], 'Favorece el bienestar colectivo y la prevención de problemas de salud.', 'Una campaña de vacunación protege a muchas personas de una comunidad.'],

  'Genética y herencia': ['La genética estudia la herencia y la variación de las características de los organismos.', ['Los genes son segmentos de ADN.', 'Los alelos son formas alternativas de un gen.', 'La reproducción transmite información genética a la descendencia.'], 'Explica por qué los seres vivos se parecen a sus progenitores y también presentan diferencias.', 'El grupo sanguíneo es una característica relacionada con la información genética.'],
  'ADN y ARN': ['El ADN y el ARN son ácidos nucleicos relacionados con el almacenamiento y uso de la información genética.', ['El ADN almacena información hereditaria.', 'El ARN participa en la expresión de esa información.', 'Ambos están formados por nucleótidos.'], 'Son fundamentales para comprender la herencia y la producción de proteínas.', 'El ARN mensajero lleva información del ADN hacia los ribosomas.'],
  'División celular': ['Es el proceso mediante el cual una célula origina nuevas células.', ['Permite crecimiento, reparación y reproducción celular.', 'La división requiere duplicación y distribución del material genético.', 'En organismos eucariotas se distinguen mitosis y meiosis.'], 'Es esencial para el crecimiento y la continuidad de la vida.', 'Las células de la piel se reemplazan mediante división celular.'],
  'Mitosis y meiosis': ['Son procesos de división celular con funciones diferentes.', ['La mitosis produce células semejantes y participa en crecimiento y reparación.', 'La meiosis produce células sexuales con la mitad del número de cromosomas.', 'La meiosis contribuye a la variabilidad genética.'], 'Permite entender crecimiento, reproducción y diversidad genética.', 'Los gametos se forman mediante meiosis.'],
  'Reproducción de los seres vivos': ['Es el proceso mediante el cual los organismos producen nuevos individuos.', ['Puede ser sexual o asexual.', 'La reproducción sexual combina información genética de progenitores.', 'La asexual puede producir descendientes muy semejantes al organismo original.'], 'Permite la continuidad de las especies.', 'Las bacterias pueden reproducirse por división celular.'],
  'Evolución': ['La evolución es el cambio de las poblaciones de seres vivos a lo largo de generaciones.', ['La variación heredable es importante para la evolución.', 'La selección natural puede favorecer características que aumentan la supervivencia y reproducción.', 'La evolución explica la diversidad de los organismos.'], 'Permite comprender el origen y la transformación de la diversidad biológica.', 'Una población puede cambiar cuando ciertas características heredables ofrecen ventajas en un ambiente.'],
  'Ecología': ['La ecología estudia las relaciones de los seres vivos entre sí y con su ambiente.', ['Analiza organismos, poblaciones, comunidades y ecosistemas.', 'Estudia factores bióticos y abióticos.', 'Ayuda a comprender el equilibrio y los cambios ambientales.'], 'Es fundamental para conservar ecosistemas y recursos naturales.', 'Analizar una laguna permite estudiar sus organismos y condiciones ambientales.'],
  'Relaciones entre los seres vivos': ['Son interacciones que ocurren entre organismos de una misma especie o de especies diferentes.', ['Pueden incluir competencia, depredación, mutualismo, comensalismo y parasitismo.', 'Estas relaciones influyen en el tamaño y distribución de las poblaciones.', 'Forman parte del equilibrio de los ecosistemas.'], 'Explican cómo los organismos dependen e influyen unos sobre otros.', 'Las abejas y las flores presentan una relación de beneficio mutuo.'],

  'Anatomía y fisiología humana': ['La anatomía estudia la estructura del cuerpo y la fisiología estudia cómo funcionan sus partes.', ['El cuerpo se organiza en células, tejidos, órganos y sistemas.', 'Los sistemas trabajan de manera coordinada.', 'Mantener el equilibrio interno es esencial para la vida.'], 'Permite comprender el cuerpo humano y sus necesidades.', 'El corazón tiene una estructura especializada para impulsar la sangre.'],
  'Sistema nervioso': ['Es el sistema que recibe información, la procesa y coordina respuestas del organismo.', ['Está formado por encéfalo, médula espinal y nervios.', 'Las neuronas transmiten señales.', 'Participa en movimiento, sentidos, memoria y respuestas.'], 'Coordina muchas funciones del organismo y su relación con el entorno.', 'Retirar la mano ante un estímulo doloroso es una respuesta nerviosa.'],
  'Sistema endocrino': ['Está formado por glándulas que producen hormonas y regulan diferentes funciones del organismo.', ['Las hormonas son mensajeros químicos.', 'Participa en crecimiento, metabolismo y reproducción.', 'Trabaja coordinadamente con el sistema nervioso.'], 'Ayuda a mantener la regulación interna del organismo.', 'La insulina participa en el control de la glucosa en la sangre.'],
  'Sistema inmunológico': ['Es el conjunto de células, tejidos y órganos que ayudan a defender al organismo frente a agentes extraños y patógenos.', ['Reconoce sustancias y organismos potencialmente dañinos.', 'Incluye defensas innatas y adaptativas.', 'Las vacunas preparan al sistema inmunitario para responder a determinados agentes.'], 'Protege al organismo frente a infecciones.', 'Los glóbulos blancos participan en la defensa del cuerpo.'],
  'Sistema reproductor': ['Es el conjunto de órganos relacionados con la reproducción humana.', ['Produce gametos y hormonas sexuales.', 'En la pubertad ocurren cambios físicos y hormonales.', 'Su cuidado forma parte de la salud integral.'], 'Permite comprender la reproducción y el desarrollo humano.', 'Los ovarios producen óvulos y hormonas sexuales.'],
  'Salud integral': ['La salud integral considera el bienestar físico, mental y social de la persona.', ['Incluye alimentación, descanso, actividad física e higiene.', 'También considera relaciones sociales y bienestar emocional.', 'La prevención ayuda a mantener una buena salud.'], 'Promueve una visión completa del cuidado personal.', 'Dormir adecuadamente y mantener hábitos saludables favorece el bienestar.'],
  'Enfermedades y prevención': ['Las enfermedades son alteraciones que afectan el funcionamiento normal del organismo; prevenirlas busca reducir sus riesgos.', ['Algunas son infecciosas y otras no transmisibles.', 'La higiene, vacunación y alimentación saludable ayudan a prevenir diversos problemas.', 'La detección temprana facilita la atención.'], 'Ayuda a reducir riesgos y cuidar la salud.', 'Lavarse las manos correctamente disminuye la transmisión de algunos microorganismos.'],
  'Sexualidad responsable': ['Comprende el conocimiento del cuerpo, el respeto, el consentimiento, el cuidado y la toma responsable de decisiones.', ['Requiere información confiable.', 'El consentimiento debe ser libre, claro y respetado.', 'La prevención y el acceso a orientación de salud son importantes.'], 'Favorece decisiones informadas y relaciones basadas en respeto.', 'Buscar información de fuentes educativas y profesionales ayuda a resolver dudas sobre salud sexual.'],
  'Medicina tradicional y saberes comunitarios': ['Son conocimientos y prácticas de las comunidades relacionados con el cuidado de la salud y el uso de recursos naturales.', ['Forman parte del patrimonio cultural de muchas comunidades.', 'Deben practicarse con responsabilidad y conocimiento de sus límites.', 'Pueden dialogar con la medicina científica sin reemplazar atención profesional cuando sea necesaria.'], 'Valora conocimientos comunitarios y promueve un cuidado responsable.', 'El uso tradicional de una planta medicinal debe considerar su identificación y posibles riesgos.'],

  'Genética': ['La genética estudia la herencia, los genes, los cromosomas y la variación de los organismos.', ['El ADN contiene información genética.', 'Los genes se encuentran organizados en cromosomas.', 'La variación genética contribuye a la diversidad de las poblaciones.'], 'Es una base para comprender herencia, evolución y biotecnología.', 'Los estudios de parentesco pueden utilizar información genética.'],
  'Biotecnología': ['La biotecnología utiliza organismos, células o componentes biológicos para desarrollar productos o procesos útiles.', ['Puede aplicarse en medicina, agricultura, alimentos y ambiente.', 'Incluye técnicas tradicionales y modernas.', 'Requiere evaluación de beneficios, riesgos y aspectos éticos.'], 'Tiene aplicaciones importantes para la sociedad.', 'La producción de algunos medicamentos utiliza microorganismos o células.'],
  'Ingeniería genética': ['Es el conjunto de técnicas que permite modificar o analizar directamente el material genético.', ['Puede introducir, eliminar o modificar secuencias de ADN.', 'Se aplica en investigación, medicina y agricultura.', 'Debe considerar seguridad y aspectos éticos.'], 'Permite estudiar genes y desarrollar aplicaciones biotecnológicas.', 'Una planta puede ser modificada para expresar una característica determinada.'],
  'Evolución de los seres vivos': ['Explica cómo las poblaciones cambian a través de generaciones y cómo se origina la diversidad biológica.', ['La selección natural es un mecanismo evolutivo.', 'También existen mutaciones, recombinación y otros procesos que generan variación.', 'Las evidencias incluyen fósiles, genética y anatomía comparada.'], 'Ayuda a explicar la diversidad y adaptación de la vida.', 'Las poblaciones pueden acumular cambios heredables durante muchas generaciones.'],
  'Ecología': ['La ecología analiza las relaciones entre organismos y ambiente en diferentes niveles de organización.', ['Estudia poblaciones, comunidades y ecosistemas.', 'Considera flujos de energía y ciclos de materia.', 'Es importante para la conservación y gestión ambiental.'], 'Aporta conocimientos para proteger los ecosistemas.', 'Estudiar una población de peces permite analizar su tamaño, alimento y ambiente.'],
  'Poblaciones y comunidades': ['Una población reúne individuos de una misma especie en un lugar; una comunidad reúne poblaciones de diferentes especies.', ['Las poblaciones cambian por nacimientos, muertes, migración y otros factores.', 'Las comunidades presentan relaciones entre especies.', 'Su estudio ayuda a comprender la estructura de los ecosistemas.'], 'Permite analizar cómo se organizan los seres vivos en la naturaleza.', 'Una comunidad de un bosque incluye árboles, aves, insectos, hongos y microorganismos.'],
  'Biodiversidad de Bolivia': ['Es la variedad de especies, genes y ecosistemas presentes en el territorio boliviano.', ['Bolivia posee regiones como Andes, valles, yungas, Amazonía, Chaco y llanos.', 'La diversidad incluye especies de plantas, animales y microorganismos.', 'La conservación es importante para el ambiente y las comunidades.'], 'Permite valorar el patrimonio natural del país.', 'Los diferentes pisos ecológicos de Bolivia albergan comunidades de seres vivos distintas.'],
  'Conservación de especies': ['Busca proteger especies, hábitats y procesos ecológicos para evitar su desaparición.', ['Incluye áreas protegidas y restauración de hábitats.', 'También requiere uso sostenible de recursos.', 'La educación ambiental y la investigación apoyan la conservación.'], 'Ayuda a mantener la biodiversidad y el equilibrio de los ecosistemas.', 'Proteger un hábitat puede beneficiar a muchas especies al mismo tiempo.'],
  'Problemas ambientales': ['Son situaciones que deterioran el ambiente y pueden afectar a los seres vivos y a las comunidades.', ['Incluyen contaminación, deforestación, pérdida de biodiversidad y cambio climático.', 'Pueden tener causas naturales y humanas, aunque muchos problemas actuales están relacionados con actividades humanas.', 'La prevención requiere acciones individuales y colectivas.'], 'Permite identificar causas y buscar soluciones sostenibles.', 'La deforestación puede provocar pérdida de hábitat y erosión del suelo.'],

  'Biología molecular': ['La biología molecular estudia los procesos de la vida a nivel de moléculas como ADN, ARN y proteínas.', ['Analiza cómo se almacena y expresa la información genética.', 'Estudia interacciones entre moléculas celulares.', 'Relaciona estructura molecular con función biológica.'], 'Permite comprender procesos celulares con mayor profundidad.', 'La síntesis de proteínas depende de la información contenida en el ADN.'],
  'Genética avanzada': ['Profundiza en la estructura, expresión, regulación y variación del material genético.', ['Analiza mutaciones, regulación génica y herencia.', 'Relaciona genes con características y procesos celulares.', 'Utiliza herramientas de análisis molecular.'], 'Ayuda a interpretar fenómenos hereditarios y aplicaciones modernas de la genética.', 'Una mutación puede modificar una secuencia de ADN y afectar la función de un gen.'],
  'Biotecnología': ['La biotecnología aplica conocimientos de sistemas biológicos para obtener productos y soluciones útiles.', ['Se usa en medicina, agricultura, industria y ambiente.', 'Puede emplear microorganismos, células o moléculas.', 'Sus aplicaciones deben evaluarse desde la seguridad y la ética.'], 'Relaciona la Biología con soluciones tecnológicas para la sociedad.', 'Los microorganismos pueden utilizarse para producir sustancias de interés industrial.'],
  'Evolución': ['La evolución explica los cambios heredables de las poblaciones a través del tiempo.', ['La selección natural puede favorecer ciertas variantes.', 'La evidencia evolutiva procede de fósiles, genética, anatomía y biogeografía.', 'La evolución no ocurre en individuos aislados, sino en poblaciones a través de generaciones.'], 'Explica la diversidad y adaptación de los seres vivos.', 'Las diferencias heredables pueden cambiar la frecuencia de características en una población.'],
  'Ecología y conservación': ['Integra el estudio de las relaciones ecológicas con acciones para proteger la biodiversidad y los ecosistemas.', ['Considera hábitats, poblaciones y comunidades.', 'La conservación busca reducir amenazas y mantener procesos ecológicos.', 'La participación social es importante para proteger los recursos.'], 'Ayuda a tomar decisiones responsables sobre el ambiente.', 'La creación y manejo adecuado de áreas protegidas puede conservar hábitats.'],
  'Cambio climático': ['Es una modificación sostenida del clima y actualmente está fuertemente influida por el aumento de gases de efecto invernadero producido por actividades humanas.', ['Afecta temperaturas, lluvias, océanos y ecosistemas.', 'La reducción de emisiones ayuda a mitigar el problema.', 'La adaptación permite reducir daños ante cambios que ya ocurren.'], 'Es necesario comprenderlo para planificar respuestas ambientales y sociales.', 'La conservación de bosques contribuye a proteger ecosistemas y almacenar carbono.'],
  'Gestión ambiental': ['Es el conjunto de acciones para planificar, prevenir y reducir impactos sobre el ambiente.', ['Incluye diagnóstico, planificación, prevención y seguimiento.', 'Busca utilizar recursos de manera sostenible.', 'Puede aplicarse en comunidades, instituciones y empresas.'], 'Permite organizar soluciones frente a problemas ambientales.', 'Un plan de manejo de residuos puede reducir la contaminación de una institución.'],
  'Salud integral': ['La salud integral considera el bienestar físico, mental y social y su relación con el entorno.', ['Incluye prevención y promoción de hábitos saludables.', 'La salud depende de factores individuales, sociales y ambientales.', 'La educación y los servicios de salud contribuyen a su protección.'], 'Ayuda a comprender la salud como un fenómeno integral.', 'El acceso a agua segura influye tanto en la salud individual como comunitaria.'],
  'Investigación científica en Biología': ['Es un proceso organizado para obtener y analizar evidencias sobre fenómenos biológicos.', ['Parte de una pregunta o problema.', 'Puede plantear hipótesis y diseñar procedimientos para obtener datos.', 'Los resultados deben analizarse y comunicarse con claridad.'], 'Permite generar conocimientos confiables sobre la vida.', 'Investigar la germinación de semillas puede comparar condiciones de luz, agua y temperatura.'],
  'Aplicaciones de la Biología en la sociedad': ['Los conocimientos biológicos se aplican para resolver problemas relacionados con salud, alimentación, ambiente, agricultura y tecnología.', ['Contribuyen al diagnóstico y prevención de enfermedades.', 'Ayudan a mejorar cultivos y conservar recursos.', 'También plantean decisiones éticas y sociales.'], 'Muestra cómo la Biología influye en la vida cotidiana y el desarrollo de la sociedad.', 'Las vacunas son una aplicación de conocimientos biológicos para prevenir enfermedades.']
};

const nivelNombres = {
  '1': '1.º de Secundaria', '2': '2.º de Secundaria', '3': '3.º de Secundaria',
  '4': '4.º de Secundaria', '5': '5.º de Secundaria', '6': '6.º de Secundaria'
};

const temaModal = document.getElementById('tema-modal');
const temaTitle = document.getElementById('tema-title');
const temaNivel = document.getElementById('tema-nivel');
const temaDefinicion = document.getElementById('tema-definicion');
const temaBody = document.getElementById('tema-body');
const temaFuente = document.getElementById('tema-fuente');
const temaIcon = document.getElementById('tema-icon');
let temaLastFocused = null;

function normalizarTema(texto) {
  return texto.trim().replace(/\s+/g, ' ');
}

function obtenerInfoTema(titulo) {
  return TEMA_INFO[titulo] || [
    `Este contenido desarrolla los conceptos principales de ${titulo}.`,
    ['Se estudian sus características principales.', 'Se relaciona con otros procesos biológicos.', 'Su comprensión permite interpretar fenómenos de la vida.'],
    'Ayuda a fortalecer los conocimientos de Biología.',
    `Un ejemplo de aplicación de ${titulo} puede observarse en situaciones de la vida cotidiana.`
  ];
}

function prepararTemasPorNivel() {
  document.querySelectorAll('.level-panel').forEach((panel) => {
    const nivel = panel.dataset.panel;
    panel.querySelectorAll('.topic-list li').forEach((item) => {
      const titulo = normalizarTema(item.textContent);
      item.classList.add('is-clickable');
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.dataset.tema = titulo;
      item.dataset.nivel = nivel;
      item.setAttribute('aria-label', `Abrir información de ${titulo}`);
    });
  });
}

function construirTema(titulo, nivel) {
  const info = obtenerInfoTema(titulo);
  temaIcon.textContent = nivel === '1' ? '🔬' : nivel === '2' ? '🌱' : nivel === '3' ? '🧬' : nivel === '4' ? '🫀' : nivel === '5' ? '🧪' : '🔎';
  temaTitle.textContent = titulo;
  temaNivel.textContent = nivelNombres[nivel] || 'Nivel secundario';
  temaDefinicion.textContent = info[0];
  temaBody.innerHTML = '';

  const clave = document.createElement('section');
  clave.className = 'ficha-section';
  const h4 = document.createElement('h4');
  h4.textContent = 'Aspectos principales';
  const ul = document.createElement('ul');
  info[1].forEach((punto) => {
    const li = document.createElement('li');
    li.textContent = punto;
    ul.appendChild(li);
  });
  clave.appendChild(h4);
  clave.appendChild(ul);
  temaBody.appendChild(clave);

  const importancia = document.createElement('section');
  importancia.className = 'ficha-section';
  importancia.innerHTML = `<h4>¿Por qué es importante?</h4><p>${info[2]}</p>`;
  temaBody.appendChild(importancia);

  const ejemplo = document.createElement('section');
  ejemplo.className = 'ficha-section';
  ejemplo.innerHTML = `<h4>Ejemplo</h4><p>${info[3]}</p>`;
  temaBody.appendChild(ejemplo);

  const etiquetas = document.createElement('div');
  etiquetas.className = 'tema-key';
  [nivelNombres[nivel], 'Biología', 'Contenido educativo'].forEach((texto) => {
    const span = document.createElement('span');
    span.textContent = texto;
    etiquetas.appendChild(span);
  });
  temaBody.appendChild(etiquetas);
  temaFuente.textContent = `BIO MUNDO · Contenido de ${nivelNombres[nivel] || 'nivel secundario'}`;
}

function abrirTema(titulo, nivel) {
  if (!temaModal) return;
  temaLastFocused = document.activeElement;
  construirTema(titulo, nivel);
  temaModal.hidden = false;
  document.body.style.overflow = 'hidden';
  const close = temaModal.querySelector('.ficha-close');
  if (close) close.focus();
}

function cerrarTema() {
  if (!temaModal || temaModal.hidden) return;
  temaModal.hidden = true;
  document.body.style.overflow = '';
  if (temaLastFocused) temaLastFocused.focus();
}

prepararTemasPorNivel();

document.querySelectorAll('.topic-list li.is-clickable').forEach((item) => {
  item.addEventListener('click', () => abrirTema(item.dataset.tema, item.dataset.nivel));
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      abrirTema(item.dataset.tema, item.dataset.nivel);
    }
  });
});

if (temaModal) {
  temaModal.querySelectorAll('[data-tema-close]').forEach((elemento) => {
    elemento.addEventListener('click', cerrarTema);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !temaModal.hidden) cerrarTema();
  });
}

/* ===== Temas interactivos ===== */
const topicModal = document.querySelector('#topic-modal');
const topicTriggers = document.querySelectorAll('.topic-trigger');
const modalTitle = document.querySelector('#topic-modal-title');
const modalText = document.querySelector('#topic-modal-text');
const modalFacts = document.querySelector('#topic-modal-facts');
const modalTip = document.querySelector('#topic-modal-tip');
const modalIcon = document.querySelector('#topic-modal-icon');

const topicData = {
  'astronomia-universo': {
    icon: '🌌',
    title: 'Astronomía: el universo y sus componentes',
    text: 'La astronomía estudia el universo, sus galaxias, estrellas, planetas y otros cuerpos celestes. Permite comprender nuestro lugar en el cosmos y cómo se forman los sistemas astronómicos.',
    facts: [
      ['Universo', 'Incluye galaxias, estrellas, planetas, polvo cósmico y energía.'],
      ['Astronomía', 'Es una ciencia observacional que utiliza telescopios y datos.'],
      ['Galaxias', 'Son enormes agrupaciones de estrellas, gas y polvo.'],
    ],
    tip: 'La observación del cielo ayuda a entender la estructura del universo y la evolución de los astros.',
  },
  'sistema-solar': {
    icon: '🪐',
    title: 'El sistema solar y los planetas',
    text: 'El sistema solar está formado por el Sol y los cuerpos celestes que orbitan alrededor de él, como planetas, satélites, asteroides y cometas.',
    facts: [
      ['Sol', 'Es la estrella central del sistema solar.'],
      ['Planetas', 'Orbitan alrededor del Sol y tienen distintas características.'],
      ['Exoplanetas', 'Son planetas fuera de nuestro sistema solar.'],
    ],
    tip: 'Cada planeta tiene condiciones distintas; por eso no todos pueden sostener vida.',
  },
  'biologia-ciencia': {
    icon: '🧬',
    title: 'La biología como ciencia de la vida',
    text: 'La biología estudia los seres vivos, sus estructuras, funciones, relaciones y evolución. Es una ciencia esencial para entender la vida y resolver problemas de salud, ambiente y alimentación.',
    facts: [
      ['Observación', 'Permite reconocer patrones y procesos en la naturaleza.'],
      ['Experimento', 'Ayuda a comprobar hipótesis científicas.'],
      ['Aplicaciones', 'Se usa en medicina, agricultura, medio ambiente y educación.'],
    ],
    tip: 'La biología conecta la teoría con la vida diaria: salud, alimentos, ecosistemas y bienestar.',
  },
  'caracteristicas-vida': {
    icon: '🌱',
    title: 'Características de la vida y niveles de organización',
    text: 'Los seres vivos presentan funciones como nutrición, relación y reproducción. Además, se organizan en niveles progresivos desde la célula hasta los ecosistemas.',
    facts: [
      ['Nutrición', 'Permite obtener energía y materiales para vivir.'],
      ['Relación', 'Los organismos responden a cambios del ambiente.'],
      ['Reproducción', 'Garantiza la continuidad de las especies.'],
    ],
    tip: 'La vida no aparece como una sola estructura aislada, sino como una organización compleja y ordenada.',
  },
  'bioelementos-biomoleculas': {
    icon: '🧪',
    title: 'Bioelementos y biomoléculas',
    text: 'Los bioelementos son los elementos químicos básicos que forman parte de los seres vivos. A partir de ellos se establecen biomoléculas esenciales para la vida.',
    facts: [
      ['Carbono', 'Es el elemento base de las biomoléculas orgánicas.'],
      ['Agua', 'Es esencial para procesos celulares y metabólicos.'],
      ['Proteínas', 'Participan en funciones estructurales y metabólicas.'],
    ],
    tip: 'Sin agua y sin biomoléculas, la vida tal como la conocemos no podría existir.',
  },
  'celula-unidad': {
    icon: '🔬',
    title: 'La célula: unidad anatómica, funcional y genética',
    text: 'La célula es la unidad básica de la vida. En ella ocurren procesos fundamentales para el crecimiento, la reproducción y el mantenimiento del organismo.',
    facts: [
      ['Membrana', 'Regula el intercambio con el exterior.'],
      ['Núcleo', 'Contiene el material genético.'],
      ['Organelos', 'Realizan funciones especializadas.'],
    ],
    tip: 'La célula es la base de la vida y la genética explica cómo se transmite la información de una generación a otra.',
  },
  'sexualidad-humana': {
    icon: '💚',
    title: 'Sexualidad humana integral y holística',
    text: 'La sexualidad es una dimensión humana que incluye aspectos biológicos, emocionales, sociales y culturales. Debe desarrollarse con respeto, información y responsabilidad.',
    facts: [
      ['Pubertad', 'Incluye cambios físicos y emocionales.'],
      ['Identidad de género', 'Forma parte de la diversidad humana.'],
      ['Bienestar emocional', 'Es clave para relaciones saludables.'],
    ],
    tip: 'La salud sexual es más que reproducción: también incluye respeto, consentimiento y cuidado del cuerpo.',
  },
  'quimica-vida': {
    icon: '⚗️',
    title: 'La química en armonía con la vida y la Madre Tierra',
    text: 'La química permite comprender la composición de la materia viva y los procesos naturales que sostienen la vida en la Tierra.',
    facts: [
      ['Química experimental', 'Se basa en observación y medición.'],
      ['Materia', 'Se transforma en procesos naturales y biológicos.'],
      ['Madre Tierra', 'Es un sistema interrelacionado y frágil.'],
    ],
    tip: 'La química explica cómo la materia se transforma en la naturaleza y en el cuerpo humano.',
  },
  'matematica-ciencias': {
    icon: '📐',
    title: 'Matemática aplicada a las ciencias naturales',
    text: 'La matemática permite cuantificar datos, realizar mediciones y analizar fenómenos físicos y biológicos con precisión.',
    facts: [
      ['Medición', 'Es esencial en la ciencia experimental.'],
      ['Cifras significativas', 'Reducen errores en los resultados.'],
      ['Prefijos numéricos', 'Ayudan a expresar magnitudes grandes o pequeñas.'],
    ],
    tip: 'Sin medición y análisis matemático, no es posible validar muchas conclusiones científicas.',
  },
  'suelos-ecologia': {
    icon: '🌍',
    title: 'Estudio de los suelos y ecología',
    text: 'Los suelos son un recurso natural vital porque sostienen la vida vegetal y mantienen ecosistemas. La ecología estudia sus relaciones de interdependencia.',
    facts: [
      ['Suelo', 'Es el soporte para la vida terrestre.'],
      ['Erosión', 'Afecta la fertilidad y la estabilidad del suelo.'],
      ['Ecosistema', 'Integra seres vivos y factores del ambiente.'],
    ],
    tip: 'Cuidar el suelo implica cuidar el agua, la biodiversidad y la salud de las comunidades.',
  },
  'transformaciones-quimicas': {
    icon: '🧴',
    title: 'Transformaciones químicas: mezcla y sustancia',
    text: 'Las mezclas y las sustancias son parte de la vida diaria. Su estudio ayuda a comprender cómo se separan materiales y cómo se combinan para formar nuevos compuestos.',
    facts: [
      ['Mezclas homogéneas', 'Tienen composición uniforme.'],
      ['Mezclas heterogéneas', 'Se distinguen sus componentes fácilmente.'],
      ['Separación', 'Se usa para purificar materiales.'],
    ],
    tip: 'La separación de mezclas es una técnica muy útil en la cocina, laboratorio y producción industrial.',
  },
  'elementos-quimicos': {
    icon: '🧾',
    title: 'Elementos químicos de la naturaleza',
    text: 'Los elementos químicos se ordenan en la tabla periódica y presentan propiedades específicas. Su uso y combinación permiten formar compuestos útiles para la vida.',
    facts: [
      ['Átomo', 'Es la unidad básica de la materia.'],
      ['Valencia', 'Indica la capacidad de enlace de un elemento.'],
      ['Óxidos', 'Son compuestos formados por oxígeno y otro elemento.'],
    ],
    tip: 'Conocer los elementos químicos permite entender la composición del mundo natural y la tecnología.',
  },
  'astronomia-naturaleza': {
    icon: '🌙',
    title: 'Incidencia de la astronomía en la naturaleza',
    text: 'Los fenómenos cósmicos tienen efectos importantes sobre la Tierra: estaciones, mareas, eclipses y aun la actividad del clima y de la vida.',
    facts: [
      ['Mareas', 'Se relacionan con la posición de la Luna.'],
      ['Estaciones', 'Se deben a la inclinación de la Tierra.'],
      ['Eclipses', 'Ocurren cuando la Luna o la Tierra bloquean la luz solar.'],
    ],
    tip: 'Nuestra vida diaria está conectada con el movimiento del sistema solar.',
  },
  'estructura-solar': {
    icon: '☀️',
    title: 'Estructura y órbitas del sistema solar',
    text: 'Los planetas y otros objetos del sistema solar se mueven en órbitas alrededor del Sol, siguiendo leyes físicas y trayectorias determinadas.',
    facts: [
      ['Órbita', 'Es la trayectoria que describe un planeta.'],
      ['Rotación', 'Es el giro del planeta sobre sí mismo.'],
      ['Traslación', 'Es el movimiento alrededor del Sol.'],
    ],
    tip: 'Los movimientos de la Tierra explican la duración del día, la noche y las estaciones.',
  },
  'sol-luna': {
    icon: '🌗',
    title: 'El Sol, la Luna, fases, eclipses y mareas',
    text: 'La Luna y el Sol interactúan con la Tierra y generan fenómenos visibles como las fases lunares, eclipses y mareas.',
    facts: [
      ['Fases lunares', 'Cambia la apariencia visible de la Luna.'],
      ['Eclipse solar', 'La Luna se interpone entre el Sol y la Tierra.'],
      ['Mareas', 'Son cambios del nivel del mar por la gravedad lunar.'],
    ],
    tip: 'La observación del cielo ayuda a comprender la relación entre los astros y la vida en la Tierra.',
  },
  'astrobiologia': {
    icon: '🔭',
    title: 'Astrobiología',
    text: 'La astrobiología investiga la posibilidad de vida en otros lugares del universo y estudia las condiciones necesarias para que exista.',
    facts: [
      ['Vida', 'Requiere agua, energía y condiciones adecuadas.'],
      ['Planetas', 'Pueden tener características para sostener vida.'],
      ['Investigación', 'Combina astronomía, biología y química.'],
    ],
    tip: 'La búsqueda de vida fuera de la Tierra nos ayuda a reflexionar sobre la vida en nuestro planeta.',
  },
  'organizacion-sistemas': {
    icon: '🧠',
    title: 'Armonía en la organización de los sistemas orgánicos',
    text: 'Los animales están formados por células que se organizan en tejidos, órganos y sistemas. Esta organización permite que cada función corporal se realice de manera coordinada.',
    facts: [
      ['Tejido epitelial', 'Recubre superficies y protege.'],
      ['Tejido conectivo', 'Da soporte y estructura.'],
      ['Tejido nervioso', 'Coordina respuestas y sensaciones.'],
    ],
    tip: 'La organización del cuerpo animal refleja una integración funcional muy precisa.',
  },
  'tejidos-animales': {
    icon: '🧫',
    title: 'Tejidos animales',
    text: 'Los tejidos animales cumplen funciones específicas: protección, soporte, movimiento y transmisión de impulsos.',
    facts: [
      ['Tejido muscular', 'Permite movimiento y contracción.'],
      ['Tejido conectivo', 'Une y sostiene órganos y estructuras.'],
      ['Tejido nervioso', 'Transmite información rápidamente.'],
    ],
    tip: 'Los tejidos son la base de la organización anatómica y fisiológica de los seres vivos.',
  },
  'nutricion-digestion': {
    icon: '🍽️',
    title: 'Función de nutrición y digestión en animales',
    text: 'La nutrición incluye la ingestión, digestión, absorción y aprovechamiento de nutrientes para obtener energía y reparar tejidos.',
    facts: [
      ['Digestión', 'Descompone alimentos en nutrientes.'],
      ['Absorción', 'Permite que nutrientes pasen a la sangre.'],
      ['Metabolismo', 'Usa esos nutrientes para vivir.'],
    ],
    tip: 'Una buena digestión y alimentación son fundamentales para la salud y el crecimiento.',
  },
  'aparato-digestivo': {
    icon: '🧬',
    title: 'Anatomía del aparato digestivo humano',
    text: 'El sistema digestivo humano está formado por un tubo digestivo y glándulas anexas que facilitan la digestión y absorción de nutrientes.',
    facts: [
      ['Boca', 'Inicia la digestión mecánica y química.'],
      ['Estómago', 'Continúa la digestión.'],
      ['Intestino', 'Absorbe nutrientes y agua.'],
    ],
    tip: 'La alimentación balanceada favorece la salud del sistema digestivo y del cuerpo completo.',
  },
  'fenomenos-ciclicos': {
    icon: '🔄',
    title: 'Fenómenos cíclicos de la Madre Tierra',
    text: 'La Madre Tierra presenta ciclos naturales que regulan el clima, el agua, la vida y el equilibrio de los ecosistemas.',
    facts: [
      ['Ciclo del agua', 'Mantiene la disponibilidad de agua dulce.'],
      ['Ciclos biogeoquímicos', 'Reciclan nutrientes en la naturaleza.'],
      ['Cambio climático', 'Se relaciona con alteraciones de los ciclos naturales.'],
    ],
    tip: 'Los ciclos naturales son esenciales para mantener la vida y la estabilidad ambiental.',
  },
  'geografia-biogeografia': {
    icon: '🗺️',
    title: 'La geografía física y la biogeografía',
    text: 'La geografía física describe la estructura de la Tierra; la biogeografía estudia cómo los seres vivos se distribuyen en distintos ambientes.',
    facts: [
      ['Litósfera', 'Es la capa sólida terrestre.'],
      ['Atmósfera', 'Protege y regula la temperatura.'],
      ['Biodiversidad', 'Varía según el clima y el lugar.'],
    ],
    tip: 'La ubicación geográfica y el clima influyen directamente en la vida de plantas y animales.',
  },
  'estructura-tierra': {
    icon: '🌎',
    title: 'Estructura de la Madre Tierra',
    text: 'La Tierra está formada por litósfera, atmósfera e hidrósfera, que interactúan para sostener la vida y los procesos naturales.',
    facts: [
      ['Litósfera', 'Forma los continentes y el fondo oceánico.'],
      ['Atmósfera', 'Contiene gases esenciales para la vida.'],
      ['Hidrósfera', 'Comprende océanos, ríos, lagos y aguas subterráneas.'],
    ],
    tip: 'Estas capas están estrechamente conectadas y se influyen mutuamente.',
  },
  'locomotor': {
    icon: '🦴',
    title: 'Sistema locomotor',
    text: 'El sistema locomotor permite el movimiento del cuerpo y la protección de órganos. Está conformado por huesos, articulaciones y músculos.',
    facts: [
      ['Esqueleto', 'Da soporte y protección.'],
      ['Huesos', 'Son estructuras rígidas con funciones de sostén.'],
      ['Movimiento', 'Se logra mediante la acción conjunta de huesos y músculos.'],
    ],
    tip: 'El cuidado del sistema locomotor incluye postura, ejercicio y prevención de lesiones.',
  },
  'artrologia': {
    icon: '🤸',
    title: 'Artrología y tipos de articulaciones',
    text: 'Las articulaciones conectan los huesos y permiten el movimiento del cuerpo en diferentes grados y direcciones.',
    facts: [
      ['Articulaciones móviles', 'Permiten amplio desplazamiento.'],
      ['Articulaciones semimóviles', 'Permiten movimientos limitados.'],
      ['Articulaciones fijas', 'No permiten movimiento.'],
    ],
    tip: 'Las articulaciones son fundamentales para la locomoción, la flexibilidad y la protección corporal.',
  },
  'muscular': {
    icon: '💪',
    title: 'Sistema muscular',
    text: 'El sistema muscular permite el movimiento, la postura y la realización de funciones vitales como la circulación y la respiración.',
    facts: [
      ['Músculo estriado', 'Se relaciona con movimiento voluntario.'],
      ['Músculo liso', 'Actúa en órganos internos.'],
      ['Miología', 'Estudia la estructura y función muscular.'],
    ],
    tip: 'El ejercicio y el cuidado corporal ayudan a mantener la fuerza y la salud muscular.',
  },
  'biomoleculas-vida': {
    icon: '🧬',
    title: 'Biomoléculas como base de la vida',
    text: 'Las biomoléculas son moléculas esenciales para la vida: carbohidratos, lípidos, proteínas, ácidos nucleicos y vitaminas.',
    facts: [
      ['Carbohidratos', 'Son fuente de energía.'],
      ['Lípidos', 'Participan en almacenamiento y membranas.'],
      ['Proteínas', 'Cumplen funciones estructurales y enzimáticas.'],
    ],
    tip: 'Una dieta equilibrada aporta las biomoléculas necesarias para el buen funcionamiento del organismo.',
  },
  'glandular-hormonal': {
    icon: '🩺',
    title: 'Sistema glandular y hormonal',
    text: 'Las glándulas liberan hormonas que regulan procesos del crecimiento, desarrollo, metabolismo y reproducción.',
    facts: [
      ['Hipotálamo', 'Regula la actividad hormonal.'],
      ['Tiroides', 'Controla el metabolismo.'],
      ['Glándulas endocrinas', 'Secretan hormonas al torrente sanguíneo.'],
    ],
    tip: 'El equilibrio hormonal es esencial para la salud integral del organismo.',
  },
  'sistema-inmunitario': {
    icon: '🛡️',
    title: 'Defensa del organismo contra enfermedades',
    text: 'El sistema inmunitario protege al organismo frente a microorganismos y sustancias extrañas, evitando infecciones y enfermedades.',
    facts: [
      ['Inmunidad', 'Es la respuesta del cuerpo frente a agentes externos.'],
      ['Anticuerpos', 'Reconocen y neutralizan agentes extraños.'],
      ['Vacunas', 'Preparan al organismo contra enfermedades específicas.'],
    ],
    tip: 'Una buena alimentación y hábitos saludables fortalecen la inmunidad.',
  },
  'microbiologia': {
    icon: '🦠',
    title: 'Microbiología y su importancia',
    text: 'La microbiología estudia microorganismos como bacterias, hongos, virus y parásitos, muchos de los cuales afectan o benefician la salud y el ambiente.',
    facts: [
      ['Bacterias', 'Pueden ser útiles o causar enfermedades.'],
      ['Hongos', 'Participan en degradación y fermentación.'],
      ['Virus', 'Necesitan células huésped para replicarse.'],
    ],
    tip: 'La microbiología ayuda a prevenir enfermedades y a aprovechar procesos beneficiosos en la salud y la industria.',
  },
  'enfermedades-endemicas': {
    icon: '🦟',
    title: 'Enfermedades endémicas de Bolivia',
    text: 'En Bolivia y otras regiones, existen enfermedades endémicas que requieren prevención, diagnóstico temprano y atención sanitaria comunitaria.',
    facts: [
      ['Malaria', 'Se transmite mediante mosquitos.'],
      ['Dengue', 'Es una enfermedad viral transmitida por vectores.'],
      ['Prevención', 'Incluye saneamiento, control de vectores y atención oportuna.'],
    ],
    tip: 'El conocimiento de la enfermedad y la prevención comunitaria son clave para reducir su impacto.',
  },
  'biodiversidad-bolivia': {
    icon: '🦋',
    title: 'Biodiversidad en Bolivia y protección ambiental',
    text: 'Bolivia es un país megadiverso con una gran variedad de ecosistemas, especies vegetales y animales. Su conservación es clave para la salud ambiental.',
    facts: [
      ['Áreas protegidas', 'Ayudan a conservar especies y ecosistemas.'],
      ['Especies nativas', 'Son propias de una región.'],
      ['Reciclaje', 'Reduce la contaminación y protege el ambiente.'],
    ],
    tip: 'La protección de la biodiversidad es también protección de la calidad de vida de las personas.',
  },
  'origen-vida-celular': {
    icon: '🧬',
    title: 'Origen de la vida y teoría celular',
    text: 'La teoría celular establece que todos los seres vivos están formados por células. La vida se originó y evolucionó a partir de estructuras celulares simples.',
    facts: [
      ['Célula', 'Es la unidad básica de la vida.'],
      ['Teoría celular', 'Unifica la biología moderna.'],
      ['Evolución', 'Explica la diversidad de organismos vivos.'],
    ],
    tip: 'La célula no solo forma organismos, también guarda la información hereditaria que se transmite en cada generación.',
  },
  'membrana-celular': {
    icon: '🧫',
    title: 'Membrana celular, citoplasma, citoesqueleto y núcleo',
    text: 'La membrana regula el intercambio con el exterior; el citoplasma contiene estructuras celulares y el núcleo guarda la información genética.',
    facts: [
      ['Membrana', 'Es selectiva y semipermeable.'],
      ['Citoplasma', 'Es el espacio donde ocurren muchos procesos.'],
      ['Núcleo', 'Dirige actividades celulares y almacena ADN.'],
    ],
    tip: 'Cada estructura celular cumple una función importante para mantener el equilibrio vital.',
  },
  'adn-arn': {
    icon: '🧬',
    title: 'ADN y ARN',
    text: 'El ADN guarda la información genética y el ARN participa en la expresión de esa información para producir proteínas.',
    facts: [
      ['ADN', 'Contiene instrucciones genéticas.'],
      ['ARN', 'Interpreta y transmite la información.'],
      ['Proteínas', 'Desempeñan funciones estructurales y metabólicas.'],
    ],
    tip: 'La expresión génica permite que las células realicen funciones específicas.',
  },
  'reproduccion-celular': {
    icon: '🔁',
    title: 'Reproducción celular',
    text: 'La reproducción celular incluye mitosis y meiosis, procesos que permiten el crecimiento, reparación de tejidos y formación de gametos.',
    facts: [
      ['Mitosis', 'Genera células idénticas.'],
      ['Meiosis', 'Reduce el número de cromosomas y produce gametos.'],
      ['Gametogénesis', 'Forma células sexuales.'],
    ],
    tip: 'La continuidad de la vida depende de la capacidad de las células para dividirse y transmitir información genética.',
  },
  'expresion-genica': {
    icon: '📡',
    title: 'Expresión génica y salud reproductiva',
    text: 'La expresión génica determina qué genes se activan y cuándo, influenciando características y funciones del organismo.',
    facts: [
      ['Genes', 'Son segmentos de ADN con instrucciones.'],
      ['Proteínas', 'Se sintetizan a partir de la información genética.'],
      ['Salud reproductiva', 'Incluye cuidado, prevención y decisiones informadas.'],
    ],
    tip: 'La genética también explica cómo las células se diferencian y se adaptan a distintas funciones.',
  },
  'sexualidad-integral-5': {
    icon: '💞',
    title: 'Sexualidad humana integral, holística y despatriarcalizadora',
    text: 'La sexualidad debe entenderse como un fenómeno bioemocional, social y cultural con enfoque de respeto, autonomía y responsabilidad.',
    facts: [
      ['Métodos anticonceptivos', 'Ayudan a prevenir embarazos no planificados.'],
      ['ITS', 'Son infecciones de transmisión sexual.'],
      ['Decisiones libres', 'Son fundamentales para la salud y el bienestar.'],
    ],
    tip: 'La educación sexual debe favorecer la libertad, la responsabilidad y el cuidado mutuo.',
  },
  'estructura-plantas': {
    icon: '🌿',
    title: 'Estructura y procesos vitales en las plantas',
    text: 'Las plantas presentan órganos especializados como raíz, tallo, hoja, flor, fruto y semilla. Su funcionamiento incluye fotosíntesis, transpiración y reproducción.',
    facts: [
      ['Raíz', 'Absorbe agua y sales minerales.'],
      ['Hoja', 'Realiza la fotosíntesis.'],
      ['Flor', 'Participa en la reproducción sexual.'],
    ],
    tip: 'Las plantas son esenciales para la vida porque producen oxígeno y materia orgánica.',
  },
  'recursos-madre-tierra': {
    icon: '💧',
    title: 'Uso sustentable de los recursos de la Madre Tierra',
    text: 'El uso sostenible busca equilibrar la necesidad humana con la conservación del agua, el suelo, la biodiversidad y los ecosistemas.',
    facts: [
      ['Agua', 'Debe manejarse con eficiencia y cuidado.'],
      ['Suelos', 'Se protegen para mantener la fertilidad.'],
      ['Plagas', 'Requieren manejo integral y sostenible.'],
    ],
    tip: 'La gestión responsable de recursos es clave para la sostenibilidad ambiental y la salud comunitaria.',
  },
  'regiones-ecologicas': {
    icon: '🌄',
    title: 'Regiones ecológicas de Bolivia',
    text: 'Bolivia cuenta con diferentes ecorregiones que presentan climas, vegetación y fauna distintas, influenciadas por la altitud y la geografía.',
    facts: [
      ['Altitud', 'Modifica el clima y la flora.'],
      ['Ecorregiones', 'Son áreas con condiciones ecológicas específicas.'],
      ['Diversidad', 'Aumenta la riqueza biológica del país.'],
    ],
    tip: 'La diversidad ecológica boliviana exige políticas de protección y cuidado ambiental.',
  },
  'genetica-herencia': {
    icon: '🧬',
    title: 'Genética: patrones de herencia y variabilidad genética',
    text: 'La genética estudia cómo se transmiten los caracteres de una generación a otra. La variabilidad genética explica las diferencias dentro de una especie.',
    facts: [
      ['Genes', 'Son unidades de información hereditarias.'],
      ['Cromosomas', 'Organizan el material genético.'],
      ['Herencia', 'Explica la transmisión de rasgos.'],
    ],
    tip: 'El estudio de la herencia permite entender tanto la diversidad como algunos problemas genéticos.',
  },
  'herencia-sexo': {
    icon: '🧬',
    title: 'Herencia ligada al sexo y alteraciones genéticas',
    text: 'Algunos rasgos se heredan junto con los cromosomas sexuales, y las alteraciones genéticas pueden afectar el desarrollo y la salud.',
    facts: [
      ['Cromosomas sexuales', 'Influyen en la determinación del sexo.'],
      ['Árbol genealógico', 'Ayuda a seguir la herencia en familias.'],
      ['Alteraciones', 'Pueden tener efectos en la salud y la evolución.'],
    ],
    tip: 'La genética no solo explica caracteres visibles, sino también la salud y el desarrollo humano.',
  },
  'salud-enfermedad': {
    icon: '🩺',
    title: 'Salud y enfermedad: prevención de enfermedades transmisibles',
    text: 'La salud es un estado de equilibrio físico, mental y social, mientras que la enfermedad es un proceso que afecta el bienestar individual o colectivo.',
    facts: [
      ['Vías de transmisión', 'Pueden ser por agua, aire, alimentos o vectores.'],
      ['Higiene', 'Es clave para prevenir infecciones.'],
      ['Inocuidad', 'Evita contaminaciones por alimentos.'],
    ],
    tip: 'La prevención es más efectiva que el tratamiento en muchas enfermedades infecciosas.',
  },
  'no-transmisibles': {
    icon: '🧯',
    title: 'Enfermedades no transmisibles y primeros auxilios',
    text: 'Las enfermedades no transmisibles no se contagian y suelen relacionarse con hábitos, factores metabólicos o ambientales.',
    facts: [
      ['Diabetes', 'Puede relacionarse con dieta y estilo de vida.'],
      ['Hipertensión', 'Afecta la presión arterial.'],
      ['Primeros auxilios', 'Son medidas temporales antes de recibir atención médica.'],
    ],
    tip: 'La prevención de enfermedades crónicas incluye hábitos saludables y control periódico del cuerpo.',
  },
  'reino-animal': {
    icon: '🐾',
    title: 'Diversidad del reino animal en la Madre Tierra',
    text: 'El reino animal es muy diverso y presenta organismos con distintas formas, estructuras y adaptaciones a su ambiente.',
    facts: [
      ['Invertebrados', 'Carecen de columna vertebral.'],
      ['Vertebrados', 'Tienen columna vertebral y esqueleto interno.'],
      ['Taxonomía', 'Clasifica a los animales por sus características.'],
    ],
    tip: 'Cada grupo animal está adaptado a su nicho ecológico y cumple un papel en la naturaleza.',
  },
  'ecologia': {
    icon: '🌿',
    title: 'Ecología: niveles de organización, ecosistemas y comunidades',
    text: 'La ecología estudia las relaciones entre los seres vivos y el ambiente. Analiza poblaciones, comunidades y ecosistemas en constante cambio.',
    facts: [
      ['Población', 'Conjunto de individuos de la misma especie.'],
      ['Comunidad', 'Interacción entre distintas especies.'],
      ['Ecosistema', 'Interrelación entre seres vivos y factores abióticos.'],
    ],
    tip: 'La sostenibilidad depende de la protección del equilibrio ecológico.',
  },
  'ingenieria-genetica': {
    icon: '🧬',
    title: 'Ingeniería genética y biotecnología',
    text: 'La ingeniería genética y la biotecnología permiten modificar, analizar y aprovechar material genético para producir soluciones en salud, agricultura e industria.',
    facts: [
      ['ADN recombinante', 'Permite combinar material genético.'],
      ['Transgénicos', 'Son organismos con genes modificados.'],
      ['Impacto', 'Puede beneficiar o afectar el ambiente y la biodiversidad.'],
    ],
    tip: 'La biotecnología debe usarse con responsabilidad ética y ambiental.',
  },
  'evolucion-seres-vivos': {
    icon: '🦖',
    title: 'Evolución de los seres vivos y eras geológicas',
    text: 'La evolución explica cómo cambian las especies con el tiempo. Las eras geológicas permiten comprender la historia de la Tierra y la vida sobre ella.',
    facts: [
      ['Teoría de la evolución', 'Explica la diversidad de especies.'],
      ['Fósiles', 'Son evidencia de cambios en el tiempo.'],
      ['Especiación', 'Genera nuevas especies.'],
    ],
    tip: 'La evolución es una base científica para entender la historia de la vida en la Tierra.',
  },
  'gestion-ambiental': {
    icon: '🌊',
    title: 'Gestión ambiental y mitigación de desastres naturales',
    text: 'La gestión ambiental busca prevenir impactos negativos en el ambiente y reducir la vulnerabilidad frente a desastres naturales.',
    facts: [
      ['Gestión', 'Incluye planificación y acción comunitaria.'],
      ['Mitigación', 'Reduce riesgos y daños.'],
      ['Cuidado del agua', 'Es vital para la vida y la seguridad.'],
    ],
    tip: 'La preparación y la educación ambiental disminuyen los riesgos y fortalecen la comunidad.',
  },
  'leyes-madre-tierra': {
    icon: '🏛️',
    title: 'Leyes de la Madre Tierra y cuidado ambiental',
    text: 'Las leyes ambientales y los acuerdos internacionales buscan proteger la Tierra, los recursos naturales y la vida en armonía con el desarrollo sostenible.',
    facts: [
      ['Ley 071', 'Reconoce los derechos de la Madre Tierra.'],
      ['Ley 1333', 'Relaciona el ambiente con la gobernanza y sostenibilidad.'],
      ['Vivir Bien', 'Promueve bienestar colectivo y cuidado del entorno.'],
    ],
    tip: 'La protección ambiental es una responsabilidad social, legal y ética.',
  },
};

function openTopic(topicId) {
  const topic = topicData[topicId];
  if (!topic || !topicModal) return;

  if (modalIcon) modalIcon.textContent = topic.icon;
  if (modalTitle) modalTitle.textContent = topic.title;
  if (modalText) modalText.textContent = topic.text;
  if (modalTip) modalTip.textContent = topic.tip;

  if (modalFacts) {
    modalFacts.innerHTML = topic.facts
      .map(
        ([title, text]) =>
          `<div class="modal-fact"><strong>${title}</strong><span>${text}</span></div>`
      )
      .join('');
  }

  topicModal.classList.add('is-open');
  topicModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  topicModal.querySelector('.modal-close')?.focus();
}

function closeTopic() {
  if (!topicModal) return;
  topicModal.classList.remove('is-open');
  topicModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

topicTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => openTopic(trigger.dataset.topic));
});

document.querySelectorAll('[data-close-topic]').forEach((element) => {
  element.addEventListener('click', closeTopic);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && topicModal?.classList.contains('is-open')) {
    closeTopic();
  }
});
