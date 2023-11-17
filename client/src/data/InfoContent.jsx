import Accordion from "../components/Accordion"

export const accordionData1 = {
    title: "Demuestran mayor entusiasmo y motivación",
    orden: "One",
    itemList: [
        "Como en todo negocio o empresa, las personas que ingresan desde cero a una nueva oportunidad, llegan con mucha emoción y motivación para dar lo mejor de ellos.",
        "Desde la productividad y actitud, que pueden hacer una gran diferencia y a la par contagiar a los demás.",
        "Estas personas buscan todas las maneras de cumplir con los objetivos, lo que significa un mayor esfuerzo y dedicación para realizar las operaciones.",
    ],
}

export const accordionData2 = {
    title: "Dispuestos a aprender",
    orden: "Two",
    itemList: [
        "En algunas ocasiones, profesionales con larga carrera no les parece buena idea seguir capacitándose o actualizarse de nuevas tecnologías o metodologías que puedan mejorar su labor de venta o instalación de paneles solares.",
        "Por otra parte, quiénes comienzan en el sector tienen una mayor  predisposición de aprender desde prácticas antiguas o tradicionales hasta nuevas innovaciones que cambian el mundo del sector fotovoltaico."
    ],
}

export const accordionData3 = {
    title: "Mayor flexibilidad",
    orden: "Tree",
    itemList: [
        "Las personas que inician en este mercado, suelen ser más abiertos al momento de realizar diferentes roles dentro de la empresa, desde un representante o asesor de ventas, responsable de logística, auxiliar administrativo, entre otros.",
        "Están dispuestos a comenzar desde cero para tener la oportunidad de crecer dentro de la empresa."
    ],
}

export const accordionData4 = {
    title: "Proponen nuevas ideas",
    orden: "Four",
    itemList: [
        "Contratar a personal sin experiencia a diferencia de lo que se cree que no son capaces de aportar nada, estas personas ingresan con muchas nuevas ideas y experiencias diferentes que podrían aportar una nueva perspectiva a tu empresa de paneles solares."
    ],
}

export const accordionData5 = {
    title: "Ahorro de costes",
    orden: "Five",
    itemList: [
        "Como bien sabemos, una persona con amplia experiencia y conocimiento en el sector fotovoltaico, sobre la cantidad que puede cobrar por sus honorarios.",
        "En cambio, una persona que se inicia en este mercado, el coste puede ser mucho menor al menos al principio."
    ],
}

export const accordionData1Slide3 = {
    title: "¿Qué debo llevar a la entrevista?",
    orden: "One",
    itemList: [
        "Los candidatos pueden sentirse inseguros sobre qué documentos o materiales deben llevar consigo, como copias adicionales de su currículum, referencias laborales, certificados académicos, etc.",
    ],
}

export const accordionData2Slide3 = {
    title: "¿Cómo debo vestirme?",
    orden: "Two",
    itemList: [
        "La elección de la vestimenta adecuada puede generar dudas. Los candidatos pueden preguntarse si deben vestirse de manera formal o más casual, dependiendo del tipo de empresa y el entorno laboral.",
    ],
}

export const accordionData3Slide3 = {
    title: "¿Qué puedo esperar durante la entrevista?",
    orden: "Tree",
    itemList: [
        "Los candidatos suelen querer saber cómo será la dinámica de la entrevista. Preguntas como cuántas personas estarán presentes, qué tipo de preguntas se harán y cuánto tiempo durará la entrevista son comunes.",
    ],
}

export const accordionData4Slide3 = {
    title: "¿Qué preguntas me harán?",
    orden: "Four",
    itemList: [
        "Los candidatos suelen preocuparse por las preguntas específicas que se les harán durante la entrevista. Pueden buscar consejos sobre cómo preparar respuestas para preguntas difíciles o sobre su experiencia laboral.",
    ],
}

export const accordionData5Slide3 = {
    title: "¿Cómo debo hablar de mis debilidades?",
    orden: "Five",
    itemList: [
        "La pregunta sobre las debilidades es una pregunta trampa común. Los candidatos pueden preguntarse cómo abordar este tema sin perjudicar sus posibilidades.",
    ],
}

export const accordionData6Slide3 = {
    title: "¿Cuál es la estructura de la empresa?",
    orden: "Six",
    itemList: [
        "Los candidatos pueden querer saber más sobre la estructura organizativa de la empresa, incluyendo los equipos, los departamentos y las oportunidades de crecimiento.",
    ],
}

export const accordionData7Slide3 = {
    title: "¿Qué beneficios ofrece la empresa?",
    orden: "Seven",
    itemList: [
        "Preguntas sobre beneficios como el seguro de salud, vacaciones, bonificaciones y otros incentivos son comunes, ya que los candidatos quieren tener una idea clara de lo que la empresa ofrece.",
    ],
}

export const accordionData8Slide3 = {
    title: "¿Cuáles son los próximos pasos del proceso de selección?",
    orden: "Eight",
    itemList: [
        "Los candidatos suelen estar interesados en saber cuál es el siguiente paso después de la entrevista, cuándo pueden esperar una respuesta y si habrá más rondas de entrevistas.",
    ],
}

export const accordionData9Slide3 = {
    title: "¿Qué hace que un candidato sea exitoso en esta posición?",
    orden: "Nine",
    itemList: [
        "Los candidatos pueden querer entender mejor cuáles son las cualidades y habilidades que la empresa valora en un empleado para tener éxito en el puesto.",
    ],
}

export const accordionData10Slide3 = {
    title: "¿Cuándo podré empezar?",
    orden: "Ten",
    itemList: [
        "Los candidatos que están ansiosos por comenzar un nuevo trabajo pueden preguntar cuándo se espera que el candidato seleccionado comience a trabajar.",
    ],
}

export const slideData1 = {
    title: "¿Por qué deberias contratar empleados con poca o nula experiencia?",
    subtitle: "",
    listItems: [
        <Accordion
            title={accordionData1.title}
            orden={accordionData1.orden}
            itemList={accordionData1.itemList}
        />,

        <Accordion
            title={accordionData2.title}
            orden={accordionData2.orden}
            itemList={accordionData2.itemList}
        />,

        <Accordion
            title={accordionData3.title}
            orden={accordionData3.orden}
            itemList={accordionData3.itemList}
        />,

        <Accordion
            title={accordionData4.title}
            orden={accordionData4.orden}
            itemList={accordionData4.itemList}
        />,

        <Accordion
            title={accordionData5.title}
            orden={accordionData5.orden}
            itemList={accordionData5.itemList}
        />

    ]
}

export const slideData2 = {
    title: 'Régimen de Promoción de la Contratación de Trabajo Registrado',
    subtitle: '¿En que consiste?',
    listItems: [
        'Además del nuevo régimen permanente para el micro-empleadores, se establece un régimen transitorio que aplica a las empresas con menos de 80 empleados. Este régimen beneficia la contratación de nuevos puestos registrados, y consiste en descuentos temporarios en las contribuciones patronales (excluyendo obras sociales)',

        'Las empresas con 15 empleados o menos, pagarán 0% de contribuciones patronales en el primer año y 25% en el segundo año, por cada nuevo empleado, siempre que esta contratación aumente la nómina del personal (respecto de la cantidad de empleados que tenía a marzo de 2014). Por su parte, las empresas que tengan entre 16 y 80 empleados pagarán un 50% en los dos primeros años de cada nuevo puesto de trabajo formal creado.',

        'A diferencia del régimen permanente, para acceder a los beneficios de este régimen transitorio de promoción de contrataciones, los empleadores deben solicitar ejercer esta opción ante la AFIP. En otras palabras, es un beneficio optativo que no se activará si el empleador no lo demanda.'
    ],
};

export const slideData3 = {
    title: "Preguntas frecuntes de los postulantes",
    subtitle: "Algunas de las preguntas que más frecuentemente pueden surgir por parte de los postulantes a la hora de buscar un primer trabajo son:",
    listItems: [
        <Accordion
            title={accordionData1Slide3.title}
            orden={accordionData1Slide3.orden}
            itemList={accordionData1Slide3.itemList}
        />,

        <Accordion
            title={accordionData2Slide3.title}
            orden={accordionData2Slide3.orden}
            itemList={accordionData2Slide3.itemList}
        />,

        <Accordion
            title={accordionData3Slide3.title}
            orden={accordionData3Slide3.orden}
            itemList={accordionData3Slide3.itemList}
        />,

        <Accordion
            title={accordionData4Slide3.title}
            orden={accordionData4Slide3.orden}
            itemList={accordionData4Slide3.itemList}
        />,

        <Accordion
            title={accordionData5Slide3.title}
            orden={accordionData5Slide3.orden}
            itemList={accordionData5Slide3.itemList}
        />,

        <Accordion
            title={accordionData6Slide3.title}
            orden={accordionData6Slide3.orden}
            itemList={accordionData6Slide3.itemList}
        />,
        <Accordion
            title={accordionData7Slide3.title}
            orden={accordionData7Slide3.orden}
            itemList={accordionData7Slide3.itemList}
        />,
        <Accordion
            title={accordionData8Slide3.title}
            orden={accordionData8Slide3.orden}
            itemList={accordionData8Slide3.itemList}
        />,
        <Accordion
            title={accordionData9Slide3.title}
            orden={accordionData9Slide3.orden}
            itemList={accordionData9Slide3.itemList}
        />,
        <Accordion
            title={accordionData10Slide3.title}
            orden={accordionData10Slide3.orden}
            itemList={accordionData10Slide3.itemList}
        />,
    ]
}
