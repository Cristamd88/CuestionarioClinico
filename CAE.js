var NombreBene="";
var IdBene="";
function datosUsuario(sesionUser){
    IdBene=sesionUser.idUsuario;
    NombreBene=sesionUser.nombre + sesionUser.apellidoP + sesionUser.apellidoM;
}
$(document).ready(function (){
    $('#cuestionarioCAE').kendoExpansionPanel({
        title: 'Cuestionario' 
    });
    
    var Formulario = $("#cuestionarioCAE").kendoForm({
        formData:{
            Fecha: new Date()
        },
        type:"group",
        layout:"grid",
        grid:{
            cols:1,
            gutter:10
        },
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
                label: "1. Traté de analizar las causas del problema para poder hacerle frente",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P1: "0", Idp10: 0},
                        {P1: "1", Idp10: 1},
                        {P1: "2", Idp10: 2},
                        {P1: "3", Idp10: 3},
                        {P1: "4", Idp10: 4}

                    ],
                    dataTextField: "P1",
                    dataValueField: "Idp1"
                }

            },
             
             {
                field: "Pregunta2",
                editor: "DropDownList",
                label: "2. Me convencí de que hiciese lo que hiciese las cosas siempre me saldrían mal",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P2: "0 ", Idp2: 0},
                        {P2: "1", Idp2: 1},
                        {P2: "2", Idp2: 2},
                        {P2: "3", Idp2: 3},
                        {P2: "4", Idp2: 4}

                    ],
                    dataTextField: "P2",
                    dataValueField: "Idp2"
                }

            },
             {
                field: "Pregunta3",
                editor: "DropDownList",
                label: "3. Intenté centrarme en los aspectos positivos del problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P3: "0 ", Idp3: 0},
                        {P3: "1", Idp3: 1},
                        {P3: "2", Idp3: 2},
                        {P3: "3", Idp3: 3},
                        {P3: "4", Idp3: 4}

                    ],
                    dataTextField: "P3",
                    dataValueField: "Idp3"
                }

            },
             {
                field: "Pregunta4",
                editor: "DropDownList",
                label: "4. Descargué mi mal humor con los demás",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P4: "0 ", Idp4: 0},
                        {P4: "1", Idp4: 1},
                        {P4: "2", Idp4: 2},
                        {P4: "3", Idp4: 3},
                        {P4: "4", Idp4: 4}

                    ],
                    dataTextField: "P4",
                    dataValueField: "Idp4"
                }

            },
             {
                field: "Pregunta5",
                editor: "DropDownList",
                label: "5. Cuando me venía a la cabeza el problema, trataba de concentrarme en otras cosas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P5: "0 ", Idp5: 0},
                        {P5: "1", Idp5: 1},
                        {P5: "2", Idp5: 2},
                        {P5: "3", Idp5: 3},
                        {P5: "4", Idp5: 4}

                    ],
                    dataTextField: "P5",
                    dataValueField: "Idp5"
                }

            },
             {
                field: "Pregunta6",
                editor: "DropDownList",
                label: "6. Le conté a familiares o amigos cómo me sentía",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P6: "0 ", Idp6: 0},
                        {P6: "1", Idp6: 1},
                        {P6: "2", Idp6: 2},
                        {P6: "3", Idp6: 3},
                        {P6: "4", Idp6: 4}

                    ],
                    dataTextField: "P6",
                    dataValueField: "Idp6"
                }

            },
             {
                field: "Pregunta7",
                editor: "DropDownList",
                label: "7. Asistí a la Iglesia",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P7: "0", Idp7: 0},
                        {P7: "1", Idp7: 1},
                        {P7: "2", Idp7: 2},
                        {P7: "3", Idp7: 3},
                        {P7: "4", Idp7: 4}

                    ],
                    dataTextField: "P7",
                    dataValueField: "Idp7"
                }

            },
             
             {
                field: "Pregunta8",
                editor: "DropDownList",
                label: "8. Traté de solucionar el problema siguiendo unos pasos bien pensados",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P8: "0 ", Idp8: 0},
                        {P8: "1", Idp8: 1},
                        {P8: "2", Idp8: 2},
                        {P8: "3", Idp8: 3},
                        {P8: "4", Idp8: 4}

                    ],
                    dataTextField: "P8",
                    dataValueField: "Idp8"
                }

            },
             {
                field: "Pregunta9",
                editor: "DropDownList",
                label: "9. No hice nada concreto puesto que las cosas suelen ser malas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P9: "0 ", Idp9: 0},
                        {P9: "1", Idp9: 1},
                        {P9: "2", Idp9: 2},
                        {P9: "3", Idp9: 3},
                        {P9: "4", Idp9: 4}

                    ],
                    dataTextField: "P9",
                    dataValueField: "Idp9"
                }

            },
             {
                field: "Pregunta10",
                editor: "DropDownList",
                label: "10. Intenté sacar algo positivo del problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P10: "0 ", Idp10: 0},
                        {P10: "1", Idp10: 1},
                        {P10: "2", Idp10: 2},
                        {P10: "3", Idp10: 3},
                        {P10: "4", Idp10: 4}

                    ],
                    dataTextField: "P10",
                    dataValueField: "Idp10"
                }

            },
             {
                field: "Pregunta11",
                editor: "DropDownList",
                label: "11. Insulté a ciertas personas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P11: "0 ", Idp11: 0},
                        {P11: "1", Idp11: 1},
                        {P11: "2", Idp11: 2},
                        {P11: "3", Idp11: 3},
                        {P11: "4", Idp11: 4}

                    ],
                    dataTextField: "P11",
                    dataValueField: "Idp11"
                }

            },
             {
                field: "Pregunta12",
                editor: "DropDownList",
                label: "12. Me volqué en el trabajo o en otra actividad para olvidarme del problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P12: "0 ", Idp12: 0},
                        {P12: "1", Idp12: 1},
                        {P12: "2", Idp12: 2},
                        {P12: "3", Idp12: 3},
                        {P12: "4", Idp12: 4}

                    ],
                    dataTextField: "P12",
                    dataValueField: "Idp12"
                }

            },
             {
                field: "Pregunta13",
                editor: "DropDownList",
                label: "13. Pedí consejo a algún pariente o amigo para afrontar mejor el problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P13: "0 ", Idp13: 0},
                        {P13: "1", Idp13: 1},
                        {P13: "2", Idp13: 2},
                        {P13: "3", Idp13: 3},
                        {P13: "4", Idp13: 4}

                    ],
                    dataTextField: "P13",
                    dataValueField: "Idp13"
                }

            },
             {
                field: "Pregunta14",
                editor: "DropDownList",
                label: "14. Pedí ayuda espiritual a algún religioso (sacerdote, etc.)",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P14: "0 ", Idp14: 0},
                        {P14: "1", Idp14: 1},
                        {P14: "2", Idp14: 2},
                        {P14: "3", Idp14: 3},
                        {P14: "4", Idp14: 4}

                    ],
                    dataTextField: "P14",
                    dataValueField: "Idp14"
                }

            },
             {
                field: "Pregunta15",
                editor: "DropDownList",
                label: "15. Establecí un plan de actuación y procuré llevarlo a cabo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P15: "0 ", Idp15: 0},
                        {P15: "1", Idp15: 1},
                        {P15: "2", Idp15: 2},
                        {P15: "3", Idp15: 3},
                        {P15: "4", Idp15: 4}

                    ],
                    dataTextField: "P15",
                    dataValueField: "Idp15"
                }

            },
             {
                field: "Pregunta16",
                editor: "DropDownList",
                label: "16. Comprendí que yo fiji el principal causante del problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P16: "0 ", Idp16: 0},
                        {P16: "1", Idp16: 1},
                        {P16: "2", Idp16: 2},
                        {P16: "3", Idp16: 3},
                        {P16: "4", Idp16: 4}

                    ],
                    dataTextField: "P16",
                    dataValueField: "Idp16"
                }

            },
             {
                field: "Pregunta17",
                editor: "DropDownList",
                label: "17. Descubrí que en la vida hay cosas buenas y gente que se preocupa por los demás",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P17: "0 ", Idp17: 0},
                        {P17: "1", Idp17: 1},
                        {P17: "2", Idp17: 2},
                        {P17: "3", Idp17: 3},
                        {P17: "4", Idp17: 4}

                    ],
                    dataTextField: "P17",
                    dataValueField: "Idp17"
                }

            },
             {
                field: "Pregunta18",
                editor: "DropDownList",
                label: "18. Me comporté de forma hostil con los demás",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P18: "0 ", Idp18: 0},
                        {P18: "1", Idp18: 1},
                        {P18: "2", Idp18: 2},
                        {P18: "3", Idp18: 3},
                        {P18: "4", Idp18: 4}

                    ],
                    dataTextField: "P18",
                    dataValueField: "Idp18"
                }

            },
             {
                field: "Pregunta19",
                editor: "DropDownList",
                label: "19. Salí al cine, a cenar, a «dar una vuelta», etc., para olvidarme del problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P19: "0 ", Idp19: 0},
                        {P19: "1", Idp19: 1},
                        {P19: "2", Idp19: 2},
                        {P19: "3", Idp19: 3},
                        {P19: "4", Idp19: 4}

                    ],
                    dataTextField: "P19",
                    dataValueField: "Idp19"
                }

            },
             {
                field: "Pregunta20",
                editor: "DropDownList",
                label: "20. Pedí a parientes o amigos que me ayudaran a pensar acerca del problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P20: "0 ", Idp20: 0},
                        {P20: "1", Idp20: 1},
                        {P20: "2", Idp20: 2},
                        {P20: "3", Idp20: 3},
                        {P20: "4", Idp20: 4}

                    ],
                    dataTextField: "P20",
                    dataValueField: "Idp20"
                }

            },
            {
                field: "Pregunta21",
                editor: "DropDownList",
                label: "21. Acudí a la Iglesia para rogar que se solucionase el problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P21: "0 ", Idp21: 0},
                        {P21: "1", Idp21: 1},
                        {P21: "2", Idp21: 2},
                        {P21: "3", Idp21: 3},
                        {P21: "4", Idp21: 4}

                    ],
                    dataTextField: "P21",
                    dataValueField: "Idp21"
                }

            },
            {
                field: "Pregunta22",
                editor: "DropDownList",
                label: "22. Hablé con las personas implicadas para encontrar una solución al problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P22: "0 ", Idp22: 0},
                        {P22: "1", Idp22: 1},
                        {P22: "2", Idp22: 2},
                        {P22: "3", Idp22: 3},
                        {P22: "4", Idp22: 4}

                    ],
                    dataTextField: "P22",
                    dataValueField: "Idp22"
                }

            },
            {
                field: "Pregunta23",
                editor: "DropDownList",
                label: "23. Me sentí indefenso/a e incapaz de hacer algo positivo para cambiar la situación",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P23: "0 ", Idp23: 0},
                        {P23: "1", Idp23: 1},
                        {P23: "2", Idp23: 2},
                        {P23: "3", Idp23: 3},
                        {P23: "4", Idp23: 4}

                    ],
                    dataTextField: "P23",
                    dataValueField: "Idp23"
                }

            },
            {
                field: "Pregunta24",
                editor: "DropDownList",
                label: "24. Comprendí que otras cosas, diferentes del problema, eran para mí más importantes",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P24: "0", Idp24: 0},
                        {P24: "1", Idp24: 1},
                        {P24: "2", Idp24: 2},
                        {P24: "3", Idp24: 3},
                        {P24: "4", Idp24: 4}

                    ],
                    dataTextField: "P24",
                    dataValueField: "Idp24"
                }

            },
            {
                field: "Pregunta25",
                editor: "DropDownList",
                label: "25. Agredí a algunas personas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P25: "0 ", Idp25: 0},
                        {P25: "1", Idp25: 1},
                        {P25: "2", Idp25: 2},
                        {P25: "3", Idp25: 3},
                        {P25: "4", Idp25: 4}

                    ],
                    dataTextField: "P25",
                    dataValueField: "Idp25"
                }

            },
            {
                field: "Pregunta26",
                editor: "DropDownList",
                label: "26. Procuré no pensar en el problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P26: "0 ", Idp26: 0},
                        {P26: "1", Idp26: 1},
                        {P26: "2", Idp26: 2},
                        {P26: "3", Idp26: 3},
                        {P26: "4", Idp26: 4}

                    ],
                    dataTextField: "P26",
                    dataValueField: "Idp26"
                }

            },
            {
                field: "Pregunta27",
                editor: "DropDownList",
                label: "27. Hablé con amigos o familiares para que me franquilizaran cuando me encontraba mal",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P27: "0 ", Idp27: 0},
                        {P27: "1", Idp27: 1},
                        {P27: "2", Idp27: 2},
                        {P27: "3", Idp27: 3},
                        {P27: "4", Idp27: 4}

                    ],
                    dataTextField: "P27",
                    dataValueField: "Idp27"
                }

            },
            {
                field: "Pregunta28",
                editor: "DropDownList",
                label: "28. Tuve fe en que Dios remediaría la situación",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P28: "0 ", Idp28: 0},
                        {P28: "1", Idp28: 1},
                        {P28: "2", Idp28: 2},
                        {P28: "3", Idp28: 3},
                        {P28: "4", Idp28: 4}

                    ],
                    dataTextField: "P28",
                    dataValueField: "Idp28"
                }

            },
            {
                field: "Pregunta29",
                editor: "DropDownList",
                label: "29. Hice frente al problema poniendo en marcha varias soluciones concretas",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P29: "0 ", Idp29: 0},
                        {P29: "1", Idp29: 1},
                        {P29: "2", Idp29: 2},
                        {P29: "3", Idp29: 3},
                        {P29: "4", Idp29: 4}

                    ],
                    dataTextField: "P29",
                    dataValueField: "Idp29"
                }

            },
            {
                field: "Pregunta30",
                editor: "DropDownList",
                label: "30. Me di cuenta de que por mí mismo no podía hacer nada para resolver el problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P30: "0 ", Idp30: 0},
                        {P30: "1", Idp30: 1},
                        {P30: "2", Idp30: 2},
                        {P30: "3", Idp30: 3},
                        {P30: "4", Idp30: 4}

                    ],
                    dataTextField: "P30",
                    dataValueField: "Idp30"
                }

            },
             {
                field: "Pregunta31",
                editor: "DropDownList",
                label: "31. Experimenté personalmente eso de que «no hay mal que por bien no venga»",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P31: "0 ", Idp31: 0},
                        {P31: "1", Idp31: 1},
                        {P31: "2", Idp31: 2},
                        {P31: "3", Idp31: 3},
                        {P31: "4", Idp31: 4}

                    ],
                    dataTextField: "P31",
                    dataValueField: "Idp31"
                }

            },
             {
                field: "Pregunta32",
                editor: "DropDownList",
                label: "32. Me irrité con alguna gente",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P32: "0 ", Idp32: 0},
                        {P32: "1", Idp32: 1},
                        {P32: "2", Idp32: 2},
                        {P32: "3", Idp32: 3},
                        {P32: "4", Idp32: 4}

                    ],
                    dataTextField: "P32",
                    dataValueField: "Idp32"
                }

            },
             {
                field: "Pregunta33",
                editor: "DropDownList",
                label: "33. Practiqué algún deporte para olvidarme del problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P33: "0 ", Idp33: 0},
                        {P33: "1", Idp33: 1},
                        {P33: "2", Idp33: 2},
                        {P33: "3", Idp33: 3},
                        {P33: "4", Idp33: 4}

                    ],
                    dataTextField: "P33",
                    dataValueField: "Idp33"
                }

            },
             {
                field: "Pregunta34",
                editor: "DropDownList",
                label: "34. Pedí a algún amigo o familiar que me indicara cuál sería el mejor camino a seguir",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P34: "0 ", Idp34: 0},
                        {P34: "1", Idp34: 1},
                        {P34: "2", Idp34: 2},
                        {P34: "3", Idp34: 3},
                        {P34: "4", Idp34: 4}

                    ],
                    dataTextField: "P34",
                    dataValueField: "Idp34"
                }

            },
             {
                field: "Pregunta35",
                editor: "DropDownList",
                label: "35. Recé",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P35: "0 ", Idp35: 0},
                        {P35: "1", Idp35: 1},
                        {P35: "2", Idp35: 2},
                        {P35: "3", Idp35: 3},
                        {P35: "4", Idp35: 4}

                    ],
                    dataTextField: "P35",
                    dataValueField: "Idp35"
                }

            },
             {
                field: "Pregunta36",
                editor: "DropDownList",
                label: "36. Pensé detenidamente los pasos a seguir para enfrentarme al problema",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P36: "0 ", Idp36: 0},
                        {P36: "1", Idp36: 1},
                        {P36: "2", Idp36: 2},
                        {P36: "3", Idp36: 3},
                        {P36: "4", Idp36: 4}

                    ],
                    dataTextField: "P36",
                    dataValueField: "Idp36"
                }

            },
             {
                field: "Pregunta37",
                editor: "DropDownList",
                label: "37. Me resigné a aceptar las cosas como eran",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P37: "0 ", Idp37: 0},
                        {P37: "1", Idp37: 1},
                        {P37: "2", Idp37: 2},
                        {P37: "3", Idp37: 3},
                        {P37: "4", Idp37: 4}

                    ],
                    dataTextField: "P37",
                    dataValueField: "Idp37"
                }

            },
             {
                field: "Pregunta38",
                editor: "DropDownList",
                label: "38. Comprobé que, después de todo, las cosas podían haber ocurrido peor",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P38: "0 ", Idp38: 0},
                        {P38: "1", Idp38: 1},
                        {P38: "2", Idp38: 2},
                        {P38: "3", Idp38: 3},
                        {P38: "4", Idp38: 4}

                    ],
                    dataTextField: "P38",
                    dataValueField: "Idp38"
                }

            },
             {
                field: "Pregunta39",
                editor: "DropDownList",
                label: "39. Luché y me desahogué expresando mis sentimientos",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P39: "0 ", Idp39: 0},
                        {P39: "1", Idp39: 1},
                        {P39: "2", Idp39: 2},
                        {P39: "3", Idp39: 3},
                        {P39: "4", Idp39: 4}

                    ],
                    dataTextField: "P39",
                    dataValueField: "Idp39"
                }

            },
             {
                field: "Pregunta40",
                editor: "DropDownList",
                label: "40. Intenté olvidarme de todo",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P40: "0 ", Idp40: 0},
                        {P40: "1", Idp40: 1},
                        {P40: "2", Idp40: 2},
                        {P40: "3", Idp40: 3},
                        {P40: "4", Idp40: 4}

                    ],
                    dataTextField: "P40",
                    dataValueField: "Idp40"
                }

            },
            {
                field: "Pregunta41",
                editor: "DropDownList",
                label: "41. Procuré que algún familiar o amigo me escuchase cuando necesité manifestar mis sentimientos",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P41: "0 ", Idp41: 0},
                        {P41: "1", Idp41: 1},
                        {P41: "2", Idp41: 2},
                        {P41: "3", Idp41: 3},
                        {P41: "4", Idp41: 4}

                    ],
                    dataTextField: "P41",
                    dataValueField: "Idp41"
                }

            },
            {
                field: "Pregunta42",
                editor: "DropDownList",
                label: "42. Acudí a la Iglesia para poner velas o rezar",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P42: "0 ", Idp42: 0},
                        {P42: "1", Idp42: 1},
                        {P42: "2", Idp42: 2},
                        {P42: "3", Idp42: 3},
                        {P42: "4", Idp42: 4}

                    ],
                    dataTextField: "P42",
                    dataValueField: "Idp42"
                }

            }
            
        ], buttonsTemplates: ""
    });
     $('#cuestionarioCAE').on('change', function () {

        $('#Total').val(totalRLG());
        $('#Resultado').val(escalaRLG());
       

    });
    
    function totalFSP(){
        var p1 = $("#Pregunta1").val();
        var p8 = $("#Pregunta8").val();
        var p15 = $("#Pregunta15").val();
        var p22 = $("#Pregunta22").val();
        var p29 = $("#Pregunta29").val();
        var p36 = $("#Pregunta36").val();
        if(isNaN(p1)){
            p1=0;
        }
        if(isNaN(p8)){
            p8=0;
        }
         if(isNaN(p15)){
            p15=0;
        }
         if(isNaN(p22)){
            p22=0;
        }
         if(isNaN(p29)){
            p29=0;
        }
         if(isNaN(p36)){
            p36=0;
        }
        var total = parseInt(p1)+ parseInt(p8)+parseInt(p15)+parseInt(p22)+ parseInt(p29)+parseInt(p36);
        
        return total;
        
    }
    
    function escalaFSP(){
        var total = totalFSP();
        
        var escala;
        if(total >= 0 && total <= 11 ){
            escala="Focalizado en la solucion del problema: Leve";
        }
        else if(total >= 12 && total <= 15 ){
           escala="Focalizado en la solucion del problema: Moderado";  
        }
        else if(total >= 16 && total <= 24 ){
            escala="Focalizado en la solucion del problema: Severo";   
            
        }
        return escala;
    }
    
    function totalAFN(){
        var p2 = $("#Pregunta2").val();
        var p9 = $("#Pregunta9").val();
        var p16 = $("#Pregunta16").val();
        var p23 = $("#Pregunta23").val();
        var p30 = $("#Pregunta30").val();
        var p37 = $("#Pregunta37").val();
         if(isNaN(p2)){
            p2=0;
        }
         if(isNaN(p9)){
            p9=0;
        }
         if(isNaN(p16)){
            p16=0;
        }
         if(isNaN(p23)){
            p23=0;
        }
         if(isNaN(p30)){
            p30=0;
        }
         if(isNaN(p37)){
            p37=0;
        }
        
        var total = parseInt(p2)+parseInt(p9)+ parseInt(p16)+ parseInt(p23)+ parseInt(p30)+parseInt(p37);
        
        return total;
    }
    
    function escalaAFN(){
        var total = totalAFN();
        
        var escala;
        if(total >= 0 && total <= 11 ){
            escala = "Autofocalización Negativa (AFN): Leve";
        }
        else if(total >= 12 && total <= 15){
            escala = "Autofocalización Negativa (AFN): Moderado";
        }
        else if(total >= 16 && total <= 24){
            escala = "Autofocalización Negativa (AFN): Severo";
        }
        return escala;
    }
    
    function totalREP(){
        var p3 = $("#Pregunta3").val();
        var p10 = $("#Pregunta10").val();
        var p17 = $("#Pregunta17").val();
        var p24 = $("#Pregunta24").val();
        var p31 = $("#Pregunta31").val();
        var p33 = $("#Pregunta33").val();
        var p38 = $("#Pregunta38").val();
         if(isNaN(p3)){
            p3=0;
        }
         if(isNaN(p10)){
            p10=0;
        }
         if(isNaN(p17)){
            p17=0;
        }
         if(isNaN(p24)){
            p24=0;
        }
         if(isNaN(p31)){
            p31=0;
        }
         if(isNaN(p33)){
            p33=0;
        }
         if(isNaN(p38)){
            p38=0;
        }
        var total = parseInt(p3)+ parseInt(p10)+ parseInt(p17)+ parseInt(p24)+ parseInt(p31)+ parseInt(p33)+ parseInt(p38);
       
        return total;
    }
    
    function escalaREP(){
        var total = totalREP();
         
        var escala;
        if(total >= 0 && total <= 11 ){
            escala= "Reevaluación Positiva (REP): Leve";
        }
        else if (total >= 12 && total <= 15 ){
            escala= "Reevaluación Positiva (REP): Moderado";
        }
        else if (total >= 16 && total <= 24 ){
            escala= "Reevaluación Positiva (REP): Severo";
        }
        return escala;
    }
    
    function totalEEA(){
        var p4 = $("#Pregunta4").val();
        var p11 = $("#Pregunta11").val();
        var p18 = $("#Pregunta18").val();
        var p25 = $("#Pregunta25").val();
        var p32 = $("#Pregunta32").val();
        var p39 = $("#Pregunta39").val();
         if(isNaN(p4)){
            p4=0;
        }
         if(isNaN(p11)){
            p11=0;
        }
         if(isNaN(p18)){
            p18=0;
        }
         if(isNaN(p25)){
            p25=0;
        }
         if(isNaN(p32)){
            p32=0;
        }
         if(isNaN(p39)){
            p39=0;
        }
        var total = parseInt(p4)+ parseInt(p11)+ parseInt(p18)+ parseInt(p25)+ parseInt(p32)+ parseInt(p39);
       
        return total;
        
    }
    
    function escalaEEA(){
        var total= totalEEA();
       
        var escala;
        if(total >= 0 && total <= 11 ){
            escala="Expresión Emocional Abierta ((EEA): Leve";
        }
        else if(total >= 12 && total <= 15){
             escala="Expresión Emocional Abierta ((EEA): Moderado";
        }
        else if(total >= 16 && total <= 24){
            escala="Expresión Emocional Abierta ((EEA): Severo";
        }
        return escala;
    }
    
    function totalEVT(){
        var p5 = $("#Pregunta5").val();
        var p12 = $("#Pregunta12").val();
        var p19 = $("#Pregunta19").val();
        var p26 = $("#Pregunta26").val();
        var p33 = $("#Pregunta33").val();
        var p40 = $("#Pregunta40").val();
         if(isNaN(p5)){
            p5=0;
        }
         if(isNaN(p12)){
            p12=0;
        }
         if(isNaN(p19)){
            p19=0;
        }
         if(isNaN(p26)){
            p26=0;
        }
         if(isNaN(p33)){
            p33=0;
        }
         if(isNaN(p40)){
            p40=0;
        }
        var total = parseInt(p5)+ parseInt(p12)+ parseInt(p19)+ parseInt(p26)+ parseInt(p33)+ parseInt(p40);
       
        return total;
       
    }
    
    function escalaEVT(){
        var total = totalEVT();
        
        var escala;
        if(total >= 0 && total <= 11 ){
            escala="Evitación (EVT):Leve";
        }
        else if(total >= 12 && total <= 15){
            escala="Evitación (EVT): Moderado";
        }
        else if(total >= 16 && total <= 24){
             escala="Evitación (EVT): Severo";
        }
        return escala;
        
    }
    
    function totalBAS(){
        var p6 = $("#Pregunta6").val();
        var p13 = $("#Pregunta13").val();
        var p20 = $("#Pregunta20").val();
        var p27 = $("#Pregunta27").val();
        var p34 = $("#Pregunta34").val();
        var p41 = $("#Pregunta41").val();
         if(isNaN(p6)){
            p6=0;
        }
         if(isNaN(p13)){
            p13=0;
        }
         if(isNaN(p20)){
            p20=0;
        }
         if(isNaN(p27)){
            p27=0;
        }
         if(isNaN(p34)){
            p34=0;
        }
         if(isNaN(p41)){
            p41=0;
        }
        var total= parseInt(p6)+ parseInt(p13)+ parseInt(p20)+ parseInt(p27)+ parseInt(p34)+ parseInt(p41);
        
        return total;
        
    }
    
    function escalaBAS(){
        var total = totalBAS();
         
        var escala;
         if(total >= 0 && total <= 11 ){
             escala="Búsqueda de Apoyo Social (BAS): Leve";
         }
         else if(total >= 12 && total <= 15 ){
              escala="Búsqueda de Apoyo Social (BAS): Moderado";
         }
         else if(total >= 16 && total <= 24 ){
             escala="Búsqueda de Apoyo Social (BAS): Severo";
         }
         return escala;
    }
    
    function totalRLG(){
        var p7 = $("#Pregunta7").val();
        var p14 = $("#Pregunta14").val();
        var p21 = $("#Pregunta21").val();
        var p28 = $("#Pregunta28").val();
        var p35 = $("#Pregunta35").val();
        var p42 = $("#Pregunta42").val();
         if(isNaN(p7)){
                p7 = 0;               
            }
            if(isNaN(p14)){
                p14 = 0;               
            }
             if(isNaN(p21)){
                p21 = 0;               
            }
             if(isNaN(p28)){
                p28 = 0;               
            }
             if(isNaN(p35)){
                p35 = 0;               
            }
             if(isNaN(p42)){
                p42 = 0;               
            }
            

        var total = parseInt(p7)+ parseInt(p14)+ parseInt(p21)+ parseInt(p28)+parseInt(p35)+ parseInt(p42);
         
        return total;
        
    }
    
    function escalaRLG(){
        var total=totalRLG();
       
        var escala;
         if(total >= 0 && total <= 11 ){
             escala="Religión (RLG): Leve";
         }
         else if(total >= 12 && total <= 15 ){
             escala="Religión (RLG): Moderado";
         }
         else if(total >= 16 && total <= 24){
              escala="Religión (RLG): Severo";
         }
         return escala;
    }
  
  
    $("#Regresar").click(function () {
        $(location).attr('href', "Cuestionarios.html");
    });
    
     $('#GuardarCAE').click(function (){
        var dataCAE = Formulario.serializeArray();
         var totalData= dataCAE.length;
         console.log(totalData);
        var Respuestas = JSON.stringify(dataCAE);
        var dataenviar ={
            IdBeneficiaria: IdBene,
            NombreBene:NombreBene,
            Fecha:dataCAE[0].value,
            Respuestas:Respuestas,
            TotalFSP:totalFSP(),
            EscalaFSP:escalaFSP(),
            TotalAFN:totalAFN(),
            EscalaAFN:escalaAFN(),
            TotalREP: totalREP(),
            EscalaREP: escalaREP(),
            TotalEEA: totalEEA(),
            EscalaEEA: escalaEEA(),
            TotalEVT: totalEVT(),
            EscalaEVT: escalaEVT(),
            TotalBAS: totalBAS(),
            EscalaBAS: escalaBAS(),
            TotalRLG: totalRLG(),
            EscalaRLG: escalaRLG()
        
        };

        
        $.ajax({
            url: "createCuestionarioCae.html",
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


