var NombreBene="";

var IdBene="";
function datosUsuario(sesionUser){
    IdBene=sesionUser.idUsuario;
    NombreBene=sesionUser.nombre + sesionUser.apellidoP + sesionUser.apellidoM;
}
$(document).ready(function (){
    $('#cuestionarioEAIS').kendoExpansionPanel({
        title: 'Cuestionario' 
    });
     var Formulario = $("#cuestionarioEAIS").kendoForm({
         formData:{
         Fecha: new Date()
       
        
     },
     type:"group",
     layout:"grid",
     grid:{
         cols:1,
         gutter:10},
     items:[
          {
                field: "Fecha",
                label: {text: "Fecha:"},
                editor: "DatePicker",
                editorOptions: {format: "M-d-yyyy"}

            },
             {
                field: "Pregunta1",
                editor: "DropDownList",
                label: "Hay cosas que me preocupan",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P1: "Nunca ", Idp1: 0},
                        {P1: "A veces", Idp1: 1},
                        {P1: "Muchas veces", Idp1: 2},
                        {P1: "Siempre", Idp1: 3}

                    ],
                    dataTextField: "P1",
                    dataValueField: "Idp1"
                }

            },
            {
                field: "Pregunta2",
                editor: "DropDownList",
                label: "Me da miedo la oscuridad.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P2: "Nunca ", Idp2: 0},
                        {P2: "A veces", Idp2: 1},
                        {P2: "Muchas veces", Idp2:2},
                        {P2: "Siempre", Idp2: 3}

                    ],
                    dataTextField: "P2",
                    dataValueField: "Idp2"
                }

            },
            {
                field: "Pregunta3",
                editor: "DropDownList",
                label: "3. Cuando tengo un problema noto una sensación extraña en el estómago",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P3: "Nunca ", Idp3: 0},
                        {P3: "A veces", Idp3: 1},
                        {P3: "Muchas veces", Idp3: 2},
                        {P3: "Siempre", Idp3: 3}

                    ],
                    dataTextField: "P3",
                    dataValueField: "Idp3"
                }

            },
            {
                field: "Pregunta4",
                editor: "DropDownList",
                label: "Tengo miedo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P4: "Nunca ", Idp4: 0},
                        {P4: "A veces", Idp4: 1},
                        {P4: "Muchas veces", Idp4: 2},
                        {P4: "Siempre", Idp4: 3}

                    ],
                    dataTextField: "P4",
                    dataValueField: "Idp4"
                }

            },
            {
                field: "Pregunta5",
                editor: "DropDownList",
                label: "Tendría miedo si me quedara solo en casa",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P5: "Nunca ", Idp5: 0},
                        {P5: "A veces", Idp5: 1},
                        {P5: "Muchas veces", Idp5: 2},
                        {P5: "Siempre", Idp5: 3}

                    ],
                    dataTextField: "P5",
                    dataValueField: "Idp5"
                }

            },
            {
                field: "Pregunta6",
                editor: "DropDownList",
                label: "Me da miedo hacer un examen",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P6: "Nunca ", Idp6: 0},
                        {P6: "A veces", Idp6: 1},
                        {P6: "Muchas veces", Idp6: 2},
                        {P6: "Siempre", Idp6: 3}

                    ],
                    dataTextField: "P6",
                    dataValueField: "Idp6"
                }

            },
            {
                field: "Pregunta7",
                editor: "DropDownList",
                label: "Me da miedo usar aseos públicos",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P7: "Nunca ", Idp7: 0},
                        {P7: "A veces", Idp7: 1},
                        {P7: "Muchas veces", Idp7: 2},
                        {P7: "Siempre", Idp7: 3}

                    ],
                    dataTextField: "P7",
                    dataValueField: "Idp7"
                }

            },
            {
                field: "Pregunta8",
                editor: "DropDownList",
                label: "8. Me preocupo cuando estoy lejos de mis padres",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P8: "Nunca ", Idp8: 0},
                        {P8: "A veces", Idp8: 1},
                        {P8: "Muchas veces", Idp8: 2},
                        {P8: "Siempre", Idp8: 3}

                    ],
                    dataTextField: "P8",
                    dataValueField: "Idp8"
                }

            },
            {
                field: "Pregunta9",
                editor: "DropDownList",
                label: "Tengo miedo de hacer el ridículo delante de la gente",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P9: "Nunca ", Idp9: 0},
                        {P9: "A veces", Idp9: 1},
                        {P9: "Muchas veces", Idp9: 2},
                        {P9: "Siempre", Idp9: 3}

                    ],
                    dataTextField: "P9",
                    dataValueField: "Idp9"
                }

            },
             {
                field: "Pregunta10",
                editor: "DropDownList",
                label: "Me preocupa hacer mal el trabajo de la escuela",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P10: "Nunca ", Idp10: 0},
                        {P10: "A veces", Idp10: 1},
                        {P10: "Muchas veces", Idp10: 2},
                        {P10: "Siempre", Idp10: 3}

                    ],
                    dataTextField: "P10",
                    dataValueField: "Idp10"
                }

            },
             {
                field: "Pregunta11",
                editor: "DropDownList",
                label: "Soy popular entre los niños y niñas de mi edad",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P11: "Nunca ", Idp11: 0},
                        {P11: "A veces", Idp11: 1},
                        {P11: "Muchas veces", Idp11: 2},
                        {P11: "Siempre", Idp11: 3}

                    ],
                    dataTextField: "P11",
                    dataValueField: "Idp11"
                }

            },
             {
                field: "Pregunta12",
                editor: "DropDownList",
                label: "Me preocupa que algo malo le suceda a alguien de mi familia",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P12: "Nunca ", Idp12: 0},
                        {P12: "A veces", Idp12: 1},
                        {P12: "Muchas veces", Idp12: 2},
                        {P12: "Siempre", Idp12: 3}

                    ],
                    dataTextField: "P12",
                    dataValueField: "Idp12"
                }

            },
             {
                field: "Pregunta13",
                editor: "DropDownList",
                label: "De repente siento que no puedo respirar sin motivo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P13: "Nunca ", Idp13: 0},
                        {P13: "A veces", Idp13: 1},
                        {P13: "Muchas veces", Idp13: 2},
                        {P13: "Siempre", Idp13: 3}

                    ],
                    dataTextField: "P13",
                    dataValueField: "Idp13"
                }

            },
             {
                field: "Pregunta14",
                editor: "DropDownList",
                label: "Necesito comprobar varias veces que he hecho bien las cosas (como apagar la luz, o cerrar la puerta con llave)",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P14: "Nunca ", Idp14: 0},
                        {P14: "A veces", Idp14: 1},
                        {P14: "Muchas veces", Idp14: 2},
                        {P14: "Siempre", Idp14: 3}

                    ],
                    dataTextField: "P14",
                    dataValueField: "Idp14"
                }

            },
             {
                field: "Pregunta15",
                editor: "DropDownList",
                label: "Me da miedo dormir solo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P15: "Nunca ", Idp15: 0},
                        {P15: "A veces", Idp15: 1},
                        {P15: "Muchas veces", Idp15: 2},
                        {P15: "Siempre", Idp15: 3}

                    ],
                    dataTextField: "P15",
                    dataValueField: "Idp15"
                }

            },
             {
                field: "Pregunta16",
                editor: "DropDownList",
                label: "Estoy nervioso o tengo miedo por las mañanas antes de ir al colegio",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P16: "Nunca ", Idp16: 0},
                        {P16: "A veces", Idp16: 1},
                        {P16: "Muchas veces", Idp16: 2},
                        {P16: "Siempre", Idp16: 3}

                    ],
                    dataTextField: "P16",
                    dataValueField: "Idp16"
                }

            },
             {
                field: "Pregunta17",
                editor: "DropDownList",
                label: "Soy bueno en los deportes",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P17: "Nunca ", Idp17: 0},
                        {P17: "A veces", Idp17: 1},
                        {P17: "Muchas veces", Idp17: 2},
                        {P17: "Siempre", Idp17: 3}

                    ],
                    dataTextField: "P17",
                    dataValueField: "Idp17"
                }

            },
             {
                field: "Pregunta18",
                editor: "DropDownList",
                label: "Me dan miedo los perros",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P18: "Nunca ", Idp18: 0},
                        {P18: "A veces", Idp18: 1},
                        {P18: "Muchas veces", Idp18: 2},
                        {P18: "Siempre", Idp18: 3}

                    ],
                    dataTextField: "P18",
                    dataValueField: "Idp18"
                }

            },
             {
                field: "Pregunta19",
                editor: "DropDownList",
                label: "No puedo dejar de pensar en cosas malas o tontas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P19: "Nunca ", Idp19: 0},
                        {P19: "A veces", Idp19: 1},
                        {P19: "Muchas veces", Idp19: 2},
                        {P19: "Siempre", Idp19: 3}

                    ],
                    dataTextField: "P19",
                    dataValueField: "Idp19"
                }

            },
             {
                field: "Pregunta20",
                editor: "DropDownList",
                label: "Cuando tengo un problema mi corazón late muy fuerte",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P20: "Nunca ", Idp20: 0},
                        {P20: "A veces", Idp20: 1},
                        {P20: "Muchas veces", Idp20: 2},
                        {P20: "Siempre", Idp20: 3}

                    ],
                    dataTextField: "P20",
                    dataValueField: "Idp20"
                }

            },
             {
                field: "Pregunta21",
                editor: "DropDownList",
                label: "De repente empiezo a temblar sin motivo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P21: "Nunca ", Idp21: 0},
                        {P21: "A veces", Idp21: 1},
                        {P21: "Muchas veces", Idp21: 2},
                        {P21: "Siempre", Idp21: 3}

                    ],
                    dataTextField: "P21",
                    dataValueField: "Idp21"
                }

            },
             {
                field: "Pregunta22",
                editor: "DropDownList",
                label: "Me preocupa que algo malo pueda pasarme",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P22: "Nunca ", Idp22: 0},
                        {P22: "A veces", Idp22: 1},
                        {P22: "Muchas veces", Idp22: 2},
                        {P22: "Siempre", Idp22: 3}

                    ],
                    dataTextField: "P22",
                    dataValueField: "Idp22"
                }

            },
             {
                field: "Pregunta23",
                editor: "DropDownList",
                label: "Me da miedo ir al médico o al dentista",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P23: "Nunca ", Idp23: 0},
                        {P23: "A veces", Idp23: 1},
                        {P23: "Muchas veces", Idp23: 2},
                        {P23: "Siempre", Idp23: 3}

                    ],
                    dataTextField: "P23",
                    dataValueField: "Idp23"
                }

            },
             {
                field: "Pregunta24",
                editor: "DropDownList",
                label: "Cuando tengo un problema me siento nervioso",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P24: "Nunca ", Idp24: 0},
                        {P24: "A veces", Idp24: 1},
                        {P24: "Muchas veces", Idp24: 2},
                        {P24: "Siempre", Idp24: 3}

                    ],
                    dataTextField: "P24",
                    dataValueField: "Idp24"
                }

            },
             {
                field: "Pregunta25",
                editor: "DropDownList",
                label: "Me dan miedo los lugares altos o los ascensores",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P25: "Nunca ", Idp25: 0},
                        {P25: "A veces", Idp25: 1},
                        {P25: "Muchas veces", Idp25: 2},
                        {P25: "Siempre", Idp25: 3}

                    ],
                    dataTextField: "P25",
                    dataValueField: "Idp25"
                }

            },
             {
                field: "Pregunta26",
                editor: "DropDownList",
                label: "Soy una buena persona",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P26: "Nunca ", Idp26: 0},
                        {P26: "A veces", Idp26: 1},
                        {P26: "Muchas veces", Idp26: 2},
                        {P26: "Siempre", Idp26: 3}

                    ],
                    dataTextField: "P26",
                    dataValueField: "Idp26"
                }

            },
             {
                field: "Pregunta27",
                editor: "DropDownList",
                label: "Tengo que pensar en cosas especiales (por ejemplo en un número o en una palabra) para evitar que pase algo malo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P27: "Nunca ", Idp27: 0},
                        {P27: "A veces", Idp27: 1},
                        {P27: "Muchas veces", Idp27: 2},
                        {P27: "Siempre", Idp27: 3}

                    ],
                    dataTextField: "P27",
                    dataValueField: "Idp27"
                }

            },
             {
                field: "Pregunta28",
                editor: "DropDownList",
                label: "Me da miedo viajar en coche, autobús o tren",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P28: "Nunca ", Idp28: 0},
                        {P28: "A veces", Idp28: 1},
                        {P28: "Muchas veces", Idp28: 2},
                        {P28: "Siempre", Idp28: 3}

                    ],
                    dataTextField: "P28",
                    dataValueField: "Idp28"
                }

            },
             {
                field: "Pregunta29",
                editor: "DropDownList",
                label: "Me preocupa lo que otras personas piensan de mí",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P29: "Nunca ", Idp29: 0},
                        {P29: "A veces", Idp29: 1},
                        {P29: "Muchas veces", Idp29: 2},
                        {P29: "Siempre", Idp29: 3}

                    ],
                    dataTextField: "P29",
                    dataValueField: "Idp29"
                }

            },
             {
                field: "Pregunta30",
                editor: "DropDownList",
                label: "Me da miedo estar en lugares donde hay mucha gente (como centros comerciales, cines, autobuses, parques)",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P30: "Nunca ", Idp30: 0},
                        {P30: "A veces", Idp30: 1},
                        {P30: "Muchas veces", Idp30: 2},
                        {P30: "Siempre", Idp30: 3}

                    ],
                    dataTextField: "P30",
                    dataValueField: "Idp30"
                }

            },
            {
                field: "Pregunta31",
                editor: "DropDownList",
                label: "Me siento feliz",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P31: "Nunca ", Idp31: 0},
                        {P31: "A veces", Idp31: 1},
                        {P31: "Muchas veces", Idp31: 2},
                        {P31: "Siempre", Idp31: 3}

                    ],
                    dataTextField: "P31",
                    dataValueField: "Idp31"
                }

            },
            {
                field: "Pregunta32",
                editor: "DropDownList",
                label: "De repente tengo mucho miedo sin motivo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P32: "Nunca ", Idp32: 0},
                        {P32: "A veces", Idp32: 1},
                        {P32: "Muchas veces", Idp32: 2},
                        {P32: "Siempre", Idp32: 3}

                    ],
                    dataTextField: "P32",
                    dataValueField: "Idp32"
                }

            },
            {
                field: "Pregunta33",
                editor: "DropDownList",
                label: "Me dan miedo los insectos o las arañas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P33: "Nunca ", Idp33: 0},
                        {P33: "A veces", Idp33: 1},
                        {P33: "Muchas veces", Idp33: 2},
                        {P33: "Siempre", Idp33: 3}

                    ],
                    dataTextField: "P33",
                    dataValueField: "Idp33"
                }

            },
            {
                field: "Pregunta34",
                editor: "DropDownList",
                label: "De repente me siento mareado o creo que me voy a desmayar sin motivo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P34: "Nunca ", Idp34: 0},
                        {P34: "A veces", Idp34: 1},
                        {P34: "Muchas veces", Idp34: 2},
                        {P34: "Siempre", Idp34: 3}

                    ],
                    dataTextField: "P34",
                    dataValueField: "Idp34"
                }

            },
            {
                field: "Pregunta35",
                editor: "DropDownList",
                label: "Me da miedo tener que hablar delante de mis compañeros de clase",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P35: "Nunca ", Idp35: 0},
                        {P35: "A veces", Idp35: 1},
                        {P35: "Muchas veces", Idp35: 2},
                        {P35: "Siempre", Idp35: 3}

                    ],
                    dataTextField: "P35",
                    dataValueField: "Idp35"
                }

            },
            {
                field: "Pregunta36",
                editor: "DropDownList",
                label: "De repente mi corazón late muy rápido sin motivo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P36: "Nunca ", Idp36: 0},
                        {P36: "A veces", Idp36: 1},
                        {P36: "Muchas veces", Idp36: 2},
                        {P36: "Siempre", Idp36: 3}

                    ],
                    dataTextField: "P36",
                    dataValueField: "Idp36"
                }

            },
            {
                field: "Pregunta37",
                editor: "DropDownList",
                label: "Me preocupa tener miedo de repente sin que haya nada que temer",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P37: "Nunca ", Idp37: 0},
                        {P37: "A veces", Idp37: 1},
                        {P37: "Muchas veces", Idp37: 2},
                        {P37: "Siempre", Idp37: 3}

                    ],
                    dataTextField: "P37",
                    dataValueField: "Idp37"
                }

            },
            {
                field: "Pregunta38",
                editor: "DropDownList",
                label: "Me gusta como soy",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P38: "Nunca ", Idp38: 0},
                        {P38: "A veces", Idp38: 1},
                        {P38: "Muchas veces", Idp38: 2},
                        {P38: "Siempre", Idp38: 3}

                    ],
                    dataTextField: "P38",
                    dataValueField: "Idp38"
                }

            },
            {
                field: "Pregunta39",
                editor: "DropDownList",
                label: "Me da miedo estar en lugares pequeños y cerrados (como túneles o habitaciones pequeñas)",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P39: "Nunca ", Idp39: 0},
                        {P39: "A veces", Idp39: 1},
                        {P39: "Muchas veces", Idp39: 2},
                        {P39: "Siempre", Idp39: 3}

                    ],
                    dataTextField: "P39",
                    dataValueField: "Idp39"
                }

            },
            {
                field: "Pregunta40",
                editor: "DropDownList",
                label: "Tengo que hacer algunas cosas una y otra vez (como lavarme las manos, limpiar, o poner las cosas en un orden determinado)",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P40: "Nunca ", Idp40: 0},
                        {P40: "A veces", Idp40: 1},
                        {P40: "Muchas veces", Idp40: 2},
                        {P40: "Siempre", Idp40: 3}

                    ],
                    dataTextField: "P40",
                    dataValueField: "Idp40"
                }

            },
            {
                field: "Pregunta41",
                editor: "DropDownList",
                label: "Me molestan pensamientos tontos o malos, o imágenes en mi mente",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P41: "Nunca ", Idp41: 0},
                        {P41: "A veces", Idp41: 1},
                        {P41: "Muchas veces", Idp41: 2},
                        {P41: "Siempre", Idp41: 3}

                    ],
                    dataTextField: "P41",
                    dataValueField: "Idp41"
                }

            },
            {
                field: "Pregunta42",
                editor: "DropDownList",
                label: "Tengo que hacer algunas cosas de una forma determinada para evitar que pasen cosas malas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P42: "Nunca ", Idp42: 0},
                        {P42: "A veces", Idp42: 1},
                        {P42: "Muchas veces", Idp42: 2},
                        {P42: "Siempre", Idp42: 3}

                    ],
                    dataTextField: "P42",
                    dataValueField: "Idp42"
                }

            },
            {
                field: "Pregunta43",
                editor: "DropDownList",
                label: "Me siento orgulloso de mi trabajo en la escuela",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P43: "Nunca ", Idp43: 0},
                        {P43: "A veces", Idp43: 1},
                        {P43: "Muchas veces", Idp43: 2},
                        {P43: "Siempre", Idp43: 3}

                    ],
                    dataTextField: "P43",
                    dataValueField: "Idp43"
                }

            },
            {
                field: "Pregunta44",
                editor: "DropDownList",
                label: "Me daría miedo pasar la noche lejos de mi casa",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P44: "Nunca ", Idp44: 0},
                        {P44: "A veces", Idp44: 1},
                        {P44: "Muchas veces", Idp44: 2},
                        {P44: "Siempre", Idp44: 3}

                    ],
                    dataTextField: "P44",
                    dataValueField: "Idp44"
                }

            },
            {
                field: "Pregunta45",
                editor: "DropDownList",
                label: "¿Hay algo más que realmente te dé miedo?",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P45: "Si ", Idp45: "Si"},
                        {P45: "No", Idp45: "No"}
                        

                    ],
                    dataTextField: "P45",
                    dataValueField: "Idp45"
                   
                }

            },
            {
                field: "Pregunta46",
                label: "Escribe que es",
                editor: "TextArea"
            },
            {
                field: "Pregunta47",
                editor: "DropDownList",
                label: "¿Con qué frecuencia te pasa?",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P47: "Nunca ", Idp47: 0},
                        {P47: "A veces", Idp47: 1},
                        {P47: "Muchas veces", Idp47: 2},
                        {P47: "Siempre", Idp47: 3}

                    ],
                    dataTextField: "P47",
                    dataValueField: "Idp47"
                }

            }
          
      ],
     buttonsTemplates: ""
     
     });
     /* $('#cuestionarioEAIS').on('change', function () {

        $('#Total').val(totalAG());
        $('#Resultado').val(escalaAG());
      

    });*/
     
     function totalAS (){
          var p5 = $("#Pregunta5").val();
          var p8 = $("#Pregunta8").val();
          var p12 = $("#Pregunta12").val();
          var p15 = $("#Pregunta15").val();
          var p16 = $("#Pregunta16").val();
          var p44 = $("#Pregunta44").val();
          var total = parseInt(p5)+ parseInt(p8)+ parseInt(p12)+ parseInt(p15)+ parseInt(p16)+ parseInt(p44);
          
         return total;
        
     }
     function ansiedadPS(){
          var p5 = $("#Pregunta5").val();
          var p8 = $("#Pregunta8").val();
          var p12 = $("#Pregunta12").val();
          var p15 = $("#Pregunta15").val();
          var p16 = $("#Pregunta16").val();
          var p44 = $("#Pregunta44").val();
          var total = parseInt(p5)+ parseInt(p8)+ parseInt(p12)+ parseInt(p15)+ parseInt(p16)+ parseInt(p44);
          var escala;
          if(total >= 0 && total <= 8 ){
              escala="Ansiedad por separacion: Leve";
          }
          else if(total >= 9 && total <= 11){
              escala="Ansiedad por separacion: Moderado";
          }
          else if(total >= 12 && total <= 18){
              escala="Ansiedad por separacion: Severo";
          }
          return escala;
      }
         
         
         
          
          function totalFS(){
            var p6 = $("#Pregunta6").val();
            var p7 = $("#Pregunta7").val();
            var p9 = $("#Pregunta9").val();
            var p10 = $("#Pregunta10").val();
            var p29 = $("#Pregunta29").val();
            var p35 = $("#Pregunta35").val();
            var total= parseInt(p6)+ parseInt(p7)+ parseInt(p9)+ parseInt(p10)+  parseInt(p29)+ parseInt(p35);
             
              return total;
          }
          function escalaFS(){
               var p6 = $("#Pregunta6").val();
            var p7 = $("#Pregunta7").val();
            var p9 = $("#Pregunta9").val();
            var p10 = $("#Pregunta10").val();
            var p29 = $("#Pregunta29").val();
            var p35 = $("#Pregunta35").val();
            var total= parseInt(p6)+ parseInt(p7)+ parseInt(p9)+ parseInt(p10)+  parseInt(p29)+ parseInt(p35);
            var escala;
            if(total >= 0 && total <= 8 ) {
                escala = "Fobia Social: Leve";
            } 
            else if(total >= 9 && total <= 11){
                escala="Fobia Social: Moderado ";
            }
            else if(total >= 12 && total <= 18){
                escala="Fobia Social: Severo";
            }
            return escala;
          }
          
          function totalTOC(){
        var p14 = $("#Pregunta14").val();
        var p19 = $("#Pregunta19").val();
        var p27 = $("#Pregunta27").val();
        var p40 = $("#Pregunta40").val();
        var p41 = $("#Pregunta41").val();
        var p42 = $("#Pregunta42").val();
        var total = parseInt(p14)+ parseInt(p19)+ parseInt(p27)+ parseInt(p40)+ parseInt(p41)+ parseInt(p42);
        
              return total;
         }
         
         function escalaTOC(){
        var p14 = $("#Pregunta14").val();
        var p19 = $("#Pregunta19").val();
        var p27 = $("#Pregunta27").val();
        var p40 = $("#Pregunta40").val();
        var p41 = $("#Pregunta41").val();
        var p42 = $("#Pregunta42").val();
        var total = parseInt(p14)+ parseInt(p19)+ parseInt(p27)+ parseInt(p40)+ parseInt(p41)+ parseInt(p42);
        var escala;
         if(total >= 0 && total <= 8){
             escala="TOC: Leve";
         }
         else if(total >= 9 && total <= 11){
             escala="TOC: Moderado";
         }
         else if(total >= 12 && total <= 18){
               escala="TOC: Severo";
         }
         return escala;
         }
         
         function totalPA(){
              var p13 = $("#Pregunta13").val();
              var p21 = $("#Pregunta21").val();
              var p28 = $("#Pregunta28").val();
              var p30 = $("#Pregunta30").val();
              var p32 = $("#Pregunta32").val();
              var p34 = $("#Pregunta34").val();
              var p36 = $("#Pregunta36").val();
              var p37 = $("#Pregunta37").val();
              var p39 = $("#Pregunta39").val();
              var total = parseInt(p13)+parseInt(p21)+ parseInt(p28)+ parseInt(p30)+ parseInt(p32)+ parseInt(p34)+ parseInt(p36)+ parseInt(p37)+ parseInt(p39);
              
             return total;
         }
         
         function escalaPA(){
              var p13 = $("#Pregunta13").val();
              var p21 = $("#Pregunta21").val();
              var p28 = $("#Pregunta28").val();
              var p30 = $("#Pregunta30").val();
              var p32 = $("#Pregunta32").val();
              var p34 = $("#Pregunta34").val();
              var p36 = $("#Pregunta36").val();
              var p37 = $("#Pregunta37").val();
              var p39 = $("#Pregunta39").val();
              var total = parseInt(p13)+parseInt(p21)+ parseInt(p28)+ parseInt(p30)+ parseInt(p32)+ parseInt(p34)+ parseInt(p36)+ parseInt(p37)+ parseInt(p39);
              var escala;
              if(total >= 0 && total <= 13){
                  escala ="Panico y Agorafobia: Leve";
              }
              else if (total >= 14 && total <= 16){
                  escala = "Panico y Agorafobia: Moderado";
              }
              else if(total >= 17 && total <= 27){
                  escala="Panico y Agorafobia: Severo";
              }
              return escala;
              
         }
         
         function totalMF(){
              var p2 = $("#Pregunta2").val();
        var p18 = $("#Pregunta18").val();
        var p23 = $("#Pregunta23").val();
        var p25 = $("#Pregunta25").val();
        var p33 = $("#Pregunta33").val();
        
        var total = parseInt(p2)+ parseInt(p18)+ parseInt(p23)+ parseInt(p25)+ parseInt(p33);
       
             return total;
        }
        
        function escalaMF(){
            var total = totalMF();
            var escala;
            if(total >= 0 && total <= 6){
                escala ="Miedo al daño fisico: Leve";
            }
            else if(total >= 7 && total <= 9){
                escala ="Miedo al daño fisico: Moderado";
            }
            else if (total >= 10 && total <= 15){
                escala="Miedo al daño fisico: Severo";
            }
            return escala;
      }
      
      function totalAG(){
          var p1 = $("#Pregunta1").val();
          var p3 = $("#Pregunta3").val();
          var p4 = $("#Pregunta4").val();
          var p20 = $("#Pregunta20").val();
          var p22 = $("#Pregunta22").val();
          var p24 = $("#Pregunta24").val();
          var total = parseInt(p1)+ parseInt(p3)+ parseInt(p4)+ parseInt(p20)+ parseInt(p22)+ parseInt(p24);
         
          return total;
          
      }
      
      function escalaAG(){
          var total = totalAG();
          var escala;
          if(total >= 0 && total <= 8){
              escala="Ansiedad Generalizada: Leve";
          }
          else if(total >= 9 && total <= 11){
              escala="Ansiedad Generalizada: Moderada";
          }
          else if(total >= 12 && total <= 18){
              escala="Ansiedad Generalizada: Severa";
          }
          return escala;
      }
       function comprobarData(dataForm) {
        var completado = true;
        for (var i = 0; i < dataForm.length; i++)
        {
            if (dataForm[i].value === "") {
                completado = false;
                break;
            } else
                completado = true;


        }
        return completado;

    }
 
    $("#GuardarEAIS").click(function(){
      
        var dataEAIS = Formulario.serializeArray();
      /* var ListaRespuestas = $("#cuestionarioEAIS").data("kendoForm"); */
       var Respuestas = JSON.stringify(dataEAIS);
        var dataEnviar = {
             IdBeneficiaria:IdBene,
             NombreBene:NombreBene,
             Fecha:dataEAIS[0].value,
             Respuestas: Respuestas,
             Pregunta46: dataEAIS[46].value,
             TotalAS:totalAS(),
             EscalaPS:ansiedadPS(),
             TotalFS:totalFS(),
             EscalaFS:escalaFS(),
             TotalTOC:totalTOC(),
             EscalaTOC:escalaTOC(),
             TotalPA:totalPA(),
             EscalaPA:escalaPA(),
             TotalMF:totalMF(),
             EscalaMF:escalaMF(),
             TotalAG:totalAG(),
             EscalaAG:escalaAG()
         };
       
        $.ajax({
            url: "createCuestionarioEAIS.html",
            method: "POST",
            dataType: "text",
            data: dataEnviar,
            success: function (data) {
                AlertPz("Guardado", data, "#00b347");
                console.log(data + "Guardado");
              
            },
            error: function (data) {
                AlertPz("Error", "Contesta todas las preguntas", "#cc0000");
                console.log(data + "Error, contesta todas las preguntas");
                
            }
            
        });
    
        
        function AlertPz(title, content, color) {
           
            $("<div></div>").kendoAlert({
                width: "350px",
                title: title,
                content: content.innerHTML="<b><center>"+content+"</center></b>",
                close: function (e) {
                    if(title==="Guardado" || title==="Actualizado") $(location).attr('href',"CuestionariosPequeñas.html");
                    
               
          }
            }).data("kendoAlert").open();
            $(".k-dialog.k-alert .k-dialog-titlebar").css("background-color", color);
        }
   
       
        
        
    });
          
        
     
     
     
    
});


