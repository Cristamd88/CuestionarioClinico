var NombreBene="";

var IdBene="";
function datosUsuario(sesionUser){
    IdBene=sesionUser.idUsuario;
    NombreBene=sesionUser.nombre + sesionUser.apellidoP + sesionUser.apellidoM;
}
$(document).ready(function (){
   $('#TESTIEGrid').kendoExpansionPanel({
        title: 'Cuestionario'
        
    }); 
   var Formulario = $("#TESTIEGrid").kendoForm({
        formData:{
            Fecha:new Date()
                       
        },
        type:"group",
        layout:"grid",
         grid: {
            cols: 1,
            gutter: 10},
        items: [
            {
                field: "Fecha",
                label: {text: "Fecha:"},
                editor: "DatePicker",
                editorOptions: {format: "M-d-yyyy"}

            },
            {
                field: "Pregunta1",
                editor: "DropDownList",
                label: "Me conozco a mí mismo, sé lo que pienso, lo que siento y lo que hago.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P1: "Nunca ", Idp1: 0},
                        {P1: "Algunas veces", Idp1: 1},
                        {P1: "Siempre", Idp1: 2}
                        
                    ],
                    dataTextField: "P1",
                    dataValueField: "Idp1"
                }

            },
            {
            field: "Pregunta2",
                editor: "DropDownList",
                label: "Soy capaz de auto motivarme para aprender, estudiar, aprobar, conseguir algo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P2: "Nunca ", Idp2: 0},
                        {P2: "Algunas veces", Idp2: 1},
                        {P2: "Siempre", Idp2: 2}
                        
                    ],
                    dataTextField: "P2",
                    dataValueField: "Idp2"
                }

            },
            {
            field: "Pregunta3",
                editor: "DropDownList",
                label: "Cuando las cosas me van mal, mi estado de ánimo aguanta hasta que las cosas vayan mejor.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P3: "Nunca ", Idp3: 0},
                        {P3: "Algunas veces", Idp3: 1},
                        {P3: "Siempre", Idp3: 2}
                        
                    ],
                    dataTextField: "P3",
                    dataValueField: "Idp3"
                }

            },
            {
            field: "Pregunta4",
                editor: "DropDownList",
                label: "Llego a acuerdos razonables con otras personas cuando tenemos posturas enfrentadas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P4: "Nunca ", Idp4: 0},
                        {P4: "Algunas veces", Idp4: 1},
                        {P4: "Siempre", Idp4: 2}
                        
                    ],
                    dataTextField: "P4",
                    dataValueField: "Idp4"
                }

            },
            {
            field: "Pregunta5",
                editor: "DropDownList",
                label: "Sé qué cosas me ponen alegre y qué cosas me ponen triste.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P5: "Nunca ", Idp5: 0},
                        {P5: "Algunas veces", Idp5: 1},
                        {P5: "Siempre", Idp5: 2}
                        
                    ],
                    dataTextField: "P5",
                    dataValueField: "Idp5"
                }

            },
            {
            field: "Pregunta6",
                editor: "DropDownList",
                label: "Sé lo que es más importante en cada momento.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P6: "Nunca ", Idp6: 0},
                        {P6: "Algunas veces", Idp6: 1},
                        {P6: "Siempre", Idp6: 2}
                        
                    ],
                    dataTextField: "P6",
                    dataValueField: "Idp6"
                }

            },
            {
            field: "Pregunta7",
                editor: "DropDownList",
                label: "Cuando hago las cosas bien me felicito a mí mismo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P7: "Nunca ", Idp7: 0},
                        {P7: "Algunas veces", Idp7: 1},
                        {P7: "Siempre", Idp7: 2}
                        
                    ],
                    dataTextField: "P7",
                    dataValueField: "Idp7"
                }

            },
            {
            field: "Pregunta8",
                editor: "DropDownList",
                label: "Cuando los demás me provocan intencionadamente soy capaz de no responder.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P8: "Nunca ", Idp8: 0},
                        {P8: "Algunas veces", Idp8: 1},
                        {P8: "Siempre", Idp8: 2}
                        
                    ],
                    dataTextField: "P8",
                    dataValueField: "Idp8"
                }

            },
            {
            field: "Pregunta9",
                editor: "DropDownList",
                label: "Mi fijo en el lado positivo de las cosas, soy optimista.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P9: "Nunca ", Idp9: 0},
                        {P9: "Algunas veces", Idp9: 1},
                        {P9: "Siempre", Idp9: 2}
                        
                    ],
                    dataTextField: "P9",
                    dataValueField: "Idp9"
                }

            },
            {
            field: "Pregunta10",
                editor: "DropDownList",
                label: "Controlo mis pensamientos, pienso lo que de verdad me interesa.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P10: "Nunca ", Idp10: 0},
                        {P10: "Algunas veces", Idp10: 1},
                        {P10: "Siempre", Idp10: 2}
                        
                    ],
                    dataTextField: "P10",
                    dataValueField: "Idp10"
                }

            },
            {
            field: "Pregunta11",
                editor: "DropDownList",
                label: "Hablo conmigo mismo, en voz baja claro.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P11: "Nunca ", Idp11: 0},
                        {P11: "Algunas veces", Idp11: 1},
                        {P11: "Siempre", Idp11: 2}
                        
                    ],
                    dataTextField: "P11",
                    dataValueField: "Idp11"
                }

            },
            {
            field: "Pregunta12",
                editor: "DropDownList",
                label: "Cuando me piden que diga o haga algo que me parece inaceptable me niego a hacerlo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P12: "Nunca ", Idp12: 0},
                        {P12: "Algunas veces", Idp12: 1},
                        {P12: "Siempre", Idp12: 2}
                        
                    ],
                    dataTextField: "P12",
                    dataValueField: "Idp12"
                }

            },
            {
            field: "Pregunta13",
                editor: "DropDownList",
                label: "Cuando alguien me critica injustamente me defiendo adecuadamente con el diálogo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P13: "Nunca ", Idp13: 0},
                        {P13: "Algunas veces", Idp13: 1},
                        {P13: "Siempre", Idp13: 2}
                        
                    ],
                    dataTextField: "P13",
                    dataValueField: "Idp13"
                }

            },
            {
            field: "Pregunta14",
                editor: "DropDownList",
                label: "Cuando me critican por algo que es justo lo acepto porque tienen razón.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P14: "Nunca ", Idp14: 0},
                        {P14: "Algunas veces", Idp14: 1},
                        {P14: "Siempre", Idp14: 2}
                        
                    ],
                    dataTextField: "P14",
                    dataValueField: "Idp14"
                }

            },
            {
            field: "Pregunta15",
                editor: "DropDownList",
                label: "Soy capaz de quitarme de la mente las preocupaciones que me obsesionan.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P15: "Nunca ", Idp15: 0},
                        {P15: "Algunas veces", Idp15: 1},
                        {P15: "Siempre", Idp15: 2}
                        
                    ],
                    dataTextField: "P15",
                    dataValueField: "Idp15"
                }

            },
            {
            field: "Pregunta16",
                editor: "DropDownList",
                label: "Me doy cuenta de lo que dicen, piensan y sienten las personas más cercanas a mí (amigos, compañeros, familiares...)",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P16: "Nunca ", Idp16: 0},
                        {P16: "Algunas veces", Idp16: 1},
                        {P16: "Siempre", Idp16: 2}
                        
                    ],
                    dataTextField: "P16",
                    dataValueField: "Idp16"
                }

            },
            {
            field: "Pregunta17",
                editor: "DropDownList",
                label: "Valoro las cosas buenas que hago.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P17: "Nunca ", Idp17: 0},
                        {P17: "Algunas veces", Idp17: 1},
                        {P17: "Siempre", Idp17: 2}
                        
                    ],
                    dataTextField: "P17",
                    dataValueField: "Idp17"
                }

            },
            {
            field: "Pregunta18",
                editor: "DropDownList",
                label: "Soy capaz de divertirme y pasármelo bien allí donde esté.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P18: "Nunca ", Idp18: 0},
                        {P18: "Algunas veces", Idp18: 1},
                        {P18: "Siempre", Idp18: 2}
                        
                    ],
                    dataTextField: "P18",
                    dataValueField: "Idp18"
                }

            },
            {
            field: "Pregunta19",
                editor: "DropDownList",
                label: "Hay cosas que no me gusta hacer pero sé que hay que hacerlas y las hago.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P19: "Nunca ", Idp19: 0},
                        {P19: "Algunas veces", Idp19: 1},
                        {P19: "Siempre", Idp19: 2}
                        
                    ],
                    dataTextField: "P19",
                    dataValueField: "Idp19"
                }

            },
            {
            field: "Pregunta20",
                editor: "DropDownList",
                label: "Soy capaz de sonreír.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P20: "Nunca ", Idp20: 0},
                        {P20: "Algunas veces", Idp20: 1},
                        {P20: "Siempre", Idp20: 2}
                        
                    ],
                    dataTextField: "P20",
                    dataValueField: "Idp20"
                }

            },
            {
            field: "Pregunta21",
                editor: "DropDownList",
                label: "Tengo confianza en mí mismo, en lo que soy capaz de hacer, pensar y sentir.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P21: "Nunca ", Idp21: 0},
                        {P21: "Algunas veces", Idp21: 1},
                        {P21: "Siempre", Idp21: 2}
                        
                    ],
                    dataTextField: "P21",
                    dataValueField: "Idp21"
                }

            },
            {
            field: "Pregunta22",
                editor: "DropDownList",
                label: "Soy una persona activa, me gusta hacer cosas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P22: "Nunca ", Idp22: 0},
                        {P22: "Algunas veces", Idp22: 1},
                        {P22: "Siempre", Idp22: 2}
                        
                    ],
                    dataTextField: "P22",
                    dataValueField: "Idp22"
                }

            },
            {
            field: "Pregunta23",
                editor: "DropDownList",
                label: "Comprendo los sentimientos de los demás.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P23: "Nunca ", Idp23: 0},
                        {P23: "Algunas veces", Idp23: 1},
                        {P23: "Siempre", Idp23: 2}
                        
                    ],
                    dataTextField: "P23",
                    dataValueField: "Idp23"
                }

            },
            {
            field: "Pregunta24",
                editor: "DropDownList",
                label: "Mantengo conversaciones con la gente.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P24: "Nunca ", Idp24: 0},
                        {P24: "Algunas veces", Idp24: 1},
                        {P24: "Siempre", Idp24: 2}
                        
                    ],
                    dataTextField: "P24",
                    dataValueField: "Idp24"
                }

            },
            {
            field: "Pregunta25",
                editor: "DropDownList",
                label: "Tengo buen sentido del humor.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P25: "Nunca ", Idp25: 0},
                        {P25: "Algunas veces", Idp25: 1},
                        {P25: "Siempre", Idp25: 2}
                        
                    ],
                    dataTextField: "P25",
                    dataValueField: "Idp25"
                }

            },
            {
            field: "Pregunta26",
                editor: "DropDownList",
                label: "Aprendo de los errores que cometo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P26: "Nunca ", Idp26: 0},
                        {P26: "Algunas veces", Idp26: 1},
                        {P26: "Siempre", Idp26: 2}
                        
                    ],
                    dataTextField: "P26",
                    dataValueField: "Idp26"
                }

            },
            {
            field: "Pregunta27",
                editor: "DropDownList",
                label: "En momentos de tensión y ansiedad soy capaz de relajarme y tranquilizarme para no perder el control y actuar apresuradamente.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P27: "Nunca ", Idp27: 0},
                        {P27: "Algunas veces", Idp27: 1},
                        {P27: "Siempre", Idp27: 2}
                        
                    ],
                    dataTextField: "P27",
                    dataValueField: "Idp27"
                }

            },
            {
            field: "Pregunta28",
                editor: "DropDownList",
                label: "Soy una persona realista, con los ofrecimientos que hago, sabiendo qué cosa puedo cumplir y qué no me será posible hacer.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P28: "Nunca ", Idp28: 0},
                        {P28: "Algunas veces", Idp28: 1},
                        {P28: "Siempre", Idp28: 2}
                        
                    ],
                    dataTextField: "P28",
                    dataValueField: "Idp28"
                }

            },
            {
            field: "Pregunta29",
                editor: "DropDownList",
                label: "Cuando alguien se muestra muy nervioso/a o exaltado/a lo calmo y tranquilizo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P29: "Nunca ", Idp29: 0},
                        {P29: "Algunas veces", Idp29: 1},
                        {P29: "Siempre", Idp29: 2}
                        
                    ],
                    dataTextField: "P29",
                    dataValueField: "Idp29"
                }

            },
            {
            field: "Pregunta30",
                editor: "DropDownList",
                label: "Tengo las ideas muy claras sobre lo que quiero.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P30: "Nunca ", Idp30: 0},
                        {P30: "Algunas veces", Idp30: 1},
                        {P30: "Siempre", Idp30: 2}
                        
                    ],
                    dataTextField: "P30",
                    dataValueField: "Idp30"
                }

            },
            {
            field: "Pregunta31",
                editor: "DropDownList",
                label: "Controlo bien mis miedos y temores.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P31: "Nunca ", Idp31: 0},
                        {P31: "Algunas veces", Idp31: 1},
                        {P31: "Siempre", Idp31: 2}
                        
                    ],
                    dataTextField: "P31",
                    dataValueField: "Idp31"
                }

            },
            {
            field: "Pregunta32",
                editor: "DropDownList",
                label: "Si he de estar solo no me agobio por eso.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P32: "Nunca ", Idp32: 0},
                        {P32: "Algunas veces", Idp32: 1},
                        {P32: "Siempre", Idp32: 2}
                        
                    ],
                    dataTextField: "P32",
                    dataValueField: "Idp32"
                }

            },
            {
            field: "Pregunta33",
                editor: "DropDownList",
                label: "Formo parte algún grupo o equipo de deporte o de ocio para compartir intereses o aficiones.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P33: "Nunca ", Idp33: 0},
                        {P33: "Algunas veces", Idp33: 1},
                        {P33: "Siempre", Idp33: 2}
                        
                    ],
                    dataTextField: "P33",
                    dataValueField: "Idp33"
                }

            },
            {
            field: "Pregunta34",
                editor: "DropDownList",
                label: "Sé cuáles son mis defectos y cómo cambiarlos.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P34: "Nunca ", Idp34: 0},
                        {P34: "Algunas veces", Idp34: 1},
                        {P34: "Siempre", Idp34: 2}
                        
                    ],
                    dataTextField: "P34",
                    dataValueField: "Idp34"
                }

            },
            {
            field: "Pregunta35",
                editor: "DropDownList",
                label: "Soy creativo, tengo ideas originales y las desarrollo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P35: "Nunca ", Idp35: 0},
                        {P35: "Algunas veces", Idp35: 1},
                        {P35: "Siempre", Idp35: 2}
                        
                    ],
                    dataTextField: "P35",
                    dataValueField: "Idp35"
                }

            },
            {
            field: "Pregunta36",
                editor: "DropDownList",
                label: "Sé qué pensamientos son capaces de hacerme sentir feliz, triste, enfadado, altruista, angustiado.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P36: "Nunca ", Idp36: 0},
                        {P36: "Algunas veces", Idp36: 1},
                        {P36: "Siempre", Idp36: 2}
                        
                    ],
                    dataTextField: "P36",
                    dataValueField: "Idp36"
                }

            },
            {
            field: "Pregunta37",
                editor: "DropDownList",
                label: "Soy capaz de aguantar bien la frustración cuando no consigo lo que me propongo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P37: "Nunca ", Idp37: 0},
                        {P37: "Algunas veces", Idp37: 1},
                        {P37: "Siempre", Idp37: 2}
                        
                    ],
                    dataTextField: "P37",
                    dataValueField: "Idp37"
                }

            },
            {
            field: "Pregunta38",
                editor: "DropDownList",
                label: "Me comunico bien con la gente con la que me relaciono.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P38: "Nunca ", Idp38: 0},
                        {P38: "Algunas veces", Idp38: 1},
                        {P38: "Siempre", Idp38: 2}
                        
                    ],
                    dataTextField: "P38",
                    dataValueField: "Idp38"
                }

            },
            {
            field: "Pregunta39",
                editor: "DropDownList",
                label: "Soy capaz de comprender el punto vista de los demás.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P39: "Nunca ", Idp39: 0},
                        {P39: "Algunas veces", Idp39: 1},
                        {P39: "Siempre", Idp39: 2}
                        
                    ],
                    dataTextField: "P39",
                    dataValueField: "Idp39"
                }

            },
            {
            field: "Pregunta40",
                editor: "DropDownList",
                label: "Identifico las emociones que expresa la gente a mi alrededor.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P40: "Nunca ", Idp40: 0},
                        {P40: "Algunas veces", Idp40: 1},
                        {P40: "Siempre", Idp40: 2}
                        
                    ],
                    dataTextField: "P40",
                    dataValueField: "Idp40"
                }

            },
            {
            field: "Pregunta41",
                editor: "DropDownList",
                label: "Soy capaz de verme a mí mismo desde la perspectiva de los otros.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P41: "Nunca ", Idp41: 0},
                        {P41: "Algunas veces", Idp41: 1},
                        {P41: "Siempre", Idp41: 2}
                        
                    ],
                    dataTextField: "P41",
                    dataValueField: "Idp41"
                }

            },
            {
            field: "Pregunta42",
                editor: "DropDownList",
                label: "Me responsabilizo de las cosas que hago.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P42: "Nunca ", Idp42: 0},
                        {P42: "Algunas veces", Idp42: 1},
                        {P42: "Siempre", Idp42: 2}
                        
                    ],
                    dataTextField: "P42",
                    dataValueField: "Idp42"
                }

            },
             {
            field: "Pregunta43",
                editor: "DropDownList",
                label: "Me adapto a las nuevas situaciones, aunque me cuesten algún cambio en mi manera de sentir las cosas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P43: "Nunca ", Idp43: 0},
                        {P43: "Algunas veces", Idp43: 1},
                        {P43: "Siempre", Idp43: 2}
                        
                    ],
                    dataTextField: "P43",
                    dataValueField: "Idp43"
                }

            },
             {
            field: "Pregunta44",
                editor: "DropDownList",
                label: "Creo que soy una persona equilibrada emocionalmente.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P44: "Nunca ", Idp44: 0},
                        {P44: "Algunas veces", Idp44: 1},
                        {P44: "Siempre", Idp44: 2}
                        
                    ],
                    dataTextField: "P44",
                    dataValueField: "Idp44"
                }

            },
             {
            field: "Pregunta45",
                editor: "DropDownList",
                label: "Tomo decisiones sin dudar ni titubear demasiado.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P45: "Nunca ", Idp45: 0},
                        {P45: "Algunas veces", Idp45: 1},
                        {P45: "Siempre", Idp45: 2}
                        
                    ],
                    dataTextField: "P45",
                    dataValueField: "Idp45"
                }

            }
           
            
            
            
            
           
            
            
        ],
          buttonsTemplates: ""
    });
    /* $('#TESTIEGrid').on('change', function () {

        $('#Total').val(total());
        $('#Resultado').val(Resultados());

    });*/
    
    
    function total(){
         var p1 = $("#Pregunta1").val();
        var p2 = $("#Pregunta2").val();
        var p3 = $("#Pregunta3").val();
        var p4 = $("#Pregunta4").val();
        var p5 = $("#Pregunta5").val();
        var p6 = $("#Pregunta6").val();
        var p7 = $("#Pregunta7").val();
        var p8 = $("#Pregunta8").val();
        var p9 = $("#Pregunta9").val();
        var p10 = $("#Pregunta10").val();
        var p11 = $("#Pregunta11").val();
        var p12 = $("#Pregunta12").val();
        var p13 = $("#Pregunta13").val();
        var p14 = $("#Pregunta14").val();
        var p15 = $("#Pregunta15").val();
        var p16 = $("#Pregunta16").val();
        var p17 = $("#Pregunta17").val();
        var p18 = $("#Pregunta18").val();
        var p19 = $("#Pregunta19").val();
        var p20 = $("#Pregunta20").val();
        var p21 = $("#Pregunta21").val();
        var p22 = $("#Pregunta22").val();
        var p23 = $("#Pregunta23").val();
        var p24 = $("#Pregunta24").val();
        var p25 = $("#Pregunta25").val();
        var p26 = $("#Pregunta26").val();
        var p27 = $("#Pregunta27").val();
        var p28 = $("#Pregunta28").val();
        var p29 = $("#Pregunta29").val();
        var p30 = $("#Pregunta30").val();
        var p31 = $("#Pregunta31").val();
        var p32 = $("#Pregunta32").val();
        var p33 = $("#Pregunta33").val();
        var p34 = $("#Pregunta34").val();
        var p35 = $("#Pregunta35").val();
        var p36 = $("#Pregunta36").val();
        var p37 = $("#Pregunta37").val();
        var p38 = $("#Pregunta38").val();
        var p39 = $("#Pregunta39").val();
        var p40 = $("#Pregunta40").val();
        var p41 = $("#Pregunta41").val();
        var p42 = $("#Pregunta42").val();
        var p43 = $("#Pregunta43").val();
        var p44 = $("#Pregunta44").val();
        var p45 = $("#Pregunta45").val();
        
        var total = parseInt(p1) + parseInt(p2) + parseInt(p3) + parseInt(p4) + parseInt(p5) + parseInt(p6) + parseInt(p7)+
                parseInt(p8) + parseInt(p9) + parseInt(p10) + parseInt(p11) + parseInt(p12) + parseInt(p13) + parseInt(p14) + parseInt(p15) + parseInt(p16) + parseInt(p17) + parseInt(p18) + parseInt(p19) + parseInt(p20) + parseInt(p21)+  parseInt(p22)+ parseInt(p23)+ parseInt(p24)+ parseInt(p25)+ parseInt(p26)+ parseInt(p27)+ parseInt(p28)+  parseInt(p29)+ parseInt(p30)+ parseInt(p31)+ parseInt(p32)+ parseInt(p33)+ parseInt(p34)+ parseInt(p35)+                 parseInt(p36)+ parseInt(p37)+ parseInt(p38)+ parseInt(p39)+ parseInt(p40)+ parseInt(p41)+ parseInt(p42)+ parseInt(p43)+ parseInt(p44)+ parseInt(p45);
             
        return total;
        
    }
     
        




    
    
    function Resultados(){
      var p1 = $("#Pregunta1").val();
        var p2 = $("#Pregunta2").val();
        var p3 = $("#Pregunta3").val();
        var p4 = $("#Pregunta4").val();
        var p5 = $("#Pregunta5").val();
        var p6 = $("#Pregunta6").val();
        var p7 = $("#Pregunta7").val();
        var p8 = $("#Pregunta8").val();
        var p9 = $("#Pregunta9").val();
        var p10 = $("#Pregunta10").val();
        var p11 = $("#Pregunta11").val();
        var p12 = $("#Pregunta12").val();
        var p13 = $("#Pregunta13").val();
        var p14 = $("#Pregunta14").val();
        var p15 = $("#Pregunta15").val();
        var p16 = $("#Pregunta16").val();
        var p17 = $("#Pregunta17").val();
        var p18 = $("#Pregunta18").val();
        var p19 = $("#Pregunta19").val();
        var p20 = $("#Pregunta20").val();
        var p21 = $("#Pregunta21").val();
        var p22 = $("#Pregunta22").val();
        var p23 = $("#Pregunta23").val();
        var p24 = $("#Pregunta24").val();
        var p25 = $("#Pregunta25").val();
        var p26 = $("#Pregunta26").val();
        var p27 = $("#Pregunta27").val();
        var p28 = $("#Pregunta28").val();
        var p29 = $("#Pregunta29").val();
        var p30 = $("#Pregunta30").val();
        var p31 = $("#Pregunta31").val();
        var p32 = $("#Pregunta32").val();
        var p33 = $("#Pregunta33").val();
        var p34 = $("#Pregunta34").val();
        var p35 = $("#Pregunta35").val();
        var p36 = $("#Pregunta36").val();
        var p37 = $("#Pregunta37").val();
        var p38 = $("#Pregunta38").val();
        var p39 = $("#Pregunta39").val();
        var p40 = $("#Pregunta40").val();
        var p41 = $("#Pregunta41").val();
        var p42 = $("#Pregunta42").val();
        var p43 = $("#Pregunta43").val();
        var p44 = $("#Pregunta44").val();
        var p45 = $("#Pregunta45").val();
        
        var total = parseInt(p1) + parseInt(p2) + parseInt(p3) + parseInt(p4) + parseInt(p5) + parseInt(p6) + parseInt(p7)+
                parseInt(p8) + parseInt(p9) + parseInt(p10) + parseInt(p11) + parseInt(p12) + parseInt(p13) + parseInt(p14) + parseInt(p15) + parseInt(p16) + parseInt(p17) + parseInt(p18) + parseInt(p19) + parseInt(p20) + parseInt(p21)+  parseInt(p22)+ parseInt(p23)+ parseInt(p24)+ parseInt(p25)+ parseInt(p26)+ parseInt(p27)+ parseInt(p28)+  parseInt(p29)+ parseInt(p30)+ parseInt(p31)+ parseInt(p32)+ parseInt(p33)+ parseInt(p34)+ parseInt(p35)+                 parseInt(p36)+ parseInt(p37)+ parseInt(p38)+ parseInt(p39)+ parseInt(p40)+ parseInt(p41)+ parseInt(p42)+ parseInt(p43)+ parseInt(p44)+ parseInt(p45);
       
        
       
               
        
        var escala;
        if(total >= 0 && total <= 20){
            escala =" MUY BAJO";
           // $('#Resultado').css("background-color","#77CC10");
         }
        else if(total >= 21 && total <= 35){
            escala = "BAJO";
            //$('#Resultado').css("background-color","#77CC10");
     
        }
        else if(total >= 36 && total <= 45){
            escala="MEDIO-BAJO";
           // $('#Resultado').css("background-color","#F0F025");
           
        }
        else if(total >=46 && total <= 79 ){
            escala="MEDIO-ALTO";
           // $('#Resultado').css("background-color","#ED310F");
            
        }
        else if(total >= 80 && total <= 90){
            escala="ALTO";
           // $('#Resultado').css("background-color","#ED310F");
           
            
        }
        
        return escala;
       
         
    }
   
    
    $('#GuardarTESTIE').click(function () {
        var dataTESTIE = Formulario.serializeArray();
       var Respuestas = JSON.stringify(dataTESTIE);
        var dataenviar = {
            
            IdBene: IdBene,
            NombreBene:NombreBene,
            Total:total(),
            Resultado:Resultados(),
            Respuestas: Respuestas
           

        };
       
        $.ajax({
            url: "createCuestionarioTestie.html",
            method: "POST",
            dataType: "text",
            data: dataenviar,
            success: function (data) {
                AlertPz("Guardado", data, "#00b347");
                console.log(data + "Guardado");
            },
            error: function (data) {
               AlertPz("Error", "Contesta todas las preguntas", "#cc0000");
            }
        });
           
        
         function AlertPz(title, content, color) {
           
            $("<div></div>").kendoAlert({
                width: "350px",
                title: title,
                content: content.innerHTML="<b><center>"+content+"</center></b>",
                close: function (e) {
                    if(title==="Guardado" || title==="Actualizado") $(location).attr('href',"Cuestionarios.html");
               
          }
            }).data("kendoAlert").open();
            $(".k-dialog.k-alert .k-dialog-titlebar").css("background-color", color);
        }
        
       
   

        });
        


    });
   



