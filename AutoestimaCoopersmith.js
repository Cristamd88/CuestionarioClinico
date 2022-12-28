var NombreBene="";
var IdBene="";
function datosUsuario(sesionUser){
    IdBene=sesionUser.idUsuario;
    NombreBene=sesionUser.nombre + sesionUser.apellidoP + sesionUser.apellidoM;
}
$(document).ready(function (){
     $('#cuestionarioAC').kendoExpansionPanel({
        title: 'Cuestionario' 
    });
    var Formulario = $("#cuestionarioAC").kendoForm({
        formData:{
             Fecha: new Date(),
             Total:"",
             Resultado:""
        },
        type:"group",
        layout:"grid",
        grid:{
            cols:2,
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
                label: "1. Las cosas mayormente no me preocupan.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P1: "Verdadero ", Idp1: 1 },
                        {P1: "Falso", Idp1: 0}
                       
                    ],
                    dataTextField: "P1",
                    dataValueField: "Idp1"
                }

            },
              {
                field: "Pregunta2",
                editor: "DropDownList",
                label: "2. Es muy difícil para mí, hablar frente a la clase.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P2: "Verdadero ", Idp2: 0 },
                        {P2: "Falso", Idp2: 1}
                       
                    ],
                    dataTextField: "P2",
                    dataValueField: "Idp2"
                }

            },
            {
                field: "Pregunta3",
                editor: "DropDownList",
                label: "3. Hay muchas cosas sobre mi mismo que cambiaría si pudiera.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P3: "Verdadero ", Idp3: 0 },
                        {P3: "Falso", Idp3: 1}
                       
                    ],
                    dataTextField: "P3",
                    dataValueField: "Idp3"
                }

            },
            {
                field: "Pregunta4",
                editor: "DropDownList",
                label: "4. Puedo tomar decisiones sin dificultades.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P4: "Verdadero ", Idp4: 1 },
                        {P4: "Falso", Idp4: 0}
                       
                    ],
                    dataTextField: "P4",
                    dataValueField: "Idp4"
                }

            },
            {
                field: "Pregunta5",
                editor: "DropDownList",
                label: "5. Soy una persona divertida.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P5: "Verdadero ", Idp5: 1 },
                        {P5: "Falso", Idp5: 0}
                       
                    ],
                    dataTextField: "P5",
                    dataValueField: "Idp5"
                }

            },
            {
                field: "Pregunta6",
                editor: "DropDownList",
                label: "6. En mi casa me molesto muy fácilmente.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P6: "Verdadero ", Idp6: 0 },
                        {P6: "Falso", Idp6: 1}
                       
                    ],
                    dataTextField: "P6",
                    dataValueField: "Idp6"
                }

            },
            {
                field: "Pregunta7",
                editor: "DropDownList",
                label: "7. Me toma bastante tiempo acostumbrarme a algo nuevo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P7: "Verdadero ", Idp7: 0 },
                        {P7: "Falso", Idp7: 1}
                       
                    ],
                    dataTextField: "P7",
                    dataValueField: "Idp7"
                }

            },
            {
                field: "Pregunta8",
                editor: "DropDownList",
                label: "8. Soy conocido entre los chicos de mi edad.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P8: "Verdadero ", Idp8: 1 },
                        {P8: "Falso", Idp8: 0}
                       
                    ],
                    dataTextField: "P8",
                    dataValueField: "Idp8"
                }

            },
            {
                field: "Pregunta9",
                editor: "DropDownList",
                label: "9. Mis padres mayormente toman en cuenta mis sentimientos.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P9: "Verdadero ", Idp9: 1 },
                        {P9: "Falso", Idp9: 0}
                       
                    ],
                    dataTextField: "P9",
                    dataValueField: "Idp9"
                }

            },
            {
                field: "Pregunta10",
                editor: "DropDownList",
                label: "10. Me rindo fácilmente.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P10: "Verdadero ", Idp10: 0 },
                        {P10: "Falso", Idp10: 1}
                       
                    ],
                    dataTextField: "P10",
                    dataValueField: "Idp10"
                }

            },
            {
                field: "Pregunta11",
                editor: "DropDownList",
                label: "11. Mis padres esperan mucho de mí.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P11: "Verdadero ", Idp11: 0 },
                        {P11: "Falso", Idp11: 1}
                       
                    ],
                    dataTextField: "P11",
                    dataValueField: "Idp11"
                }

            },
            {
                field: "Pregunta12",
                editor: "DropDownList",
                label: "12. Es bastante difícil ser “yo mismo”.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P12: "Verdadero ", Idp12: 0 },
                        {P12: "Falso", Idp12: 1}
                       
                    ],
                    dataTextField: "P12",
                    dataValueField: "Idp12"
                }

            },
            {
                field: "Pregunta13",
                editor: "DropDownList",
                label: "13. Mi vida está llena de problemas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P13: "Verdadero ", Idp13: 0 },
                        {P13: "Falso", Idp13: 1}
                       
                    ],
                    dataTextField: "P13",
                    dataValueField: "Idp13"
                }

            },
            {
                field: "Pregunta14",
                editor: "DropDownList",
                label: "14. Los chicos mayormente aceptan mis ideas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P14: "Verdadero ", Idp14:1 },
                        {P14: "Falso", Idp14: 0}
                       
                    ],
                    dataTextField: "P14",
                    dataValueField: "Idp14"
                }

            },
            {
                field: "Pregunta15",
                editor: "DropDownList",
                label: "15. Tengo una mala opinión acerca de mí mismo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P15: "Verdadero ", Idp15:  0},
                        {P15: "Falso", Idp15: 1}
                       
                    ],
                    dataTextField: "P15",
                    dataValueField: "Idp15"
                }

            },
            {
                field: "Pregunta16",
                editor: "DropDownList",
                label: "16. Muchas veces me gustaría irme de casa.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P16: "Verdadero ", Idp16: 0 },
                        {P16: "Falso", Idp16: 1}
                       
                    ],
                    dataTextField: "P16",
                    dataValueField: "Idp16"
                }

            },
            {
                field: "Pregunta17",
                editor: "DropDownList",
                label: "17. Mayormente me siento fastidiado en la escuela.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P17: "Verdadero ", Idp17: 0 },
                        {P17: "Falso", Idp17: 1}
                       
                    ],
                    dataTextField: "P17",
                    dataValueField: "Idp17"
                }

            },
            {
                field: "Pregunta18",
                editor: "DropDownList",
                label: "18. Físicamente no soy simpático como la mayoría de las personas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P18: "Verdadero ", Idp18: 0 },
                        {P18: "Falso", Idp18: 1}
                       
                    ],
                    dataTextField: "P18",
                    dataValueField: "Idp18"
                }

            },
            {
                field: "Pregunta19",
                editor: "DropDownList",
                label: "19. Si tengo algo que decir, generalmente lo digo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P19: "Verdadero ", Idp19: 1 },
                        {P19: "Falso", Idp19: 0}
                       
                    ],
                    dataTextField: "P19",
                    dataValueField: "Idp19"
                }

            },
            {
                field: "Pregunta20",
                editor: "DropDownList",
                label: "20. mis padres me comprenden.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P20: "Verdadero ", Idp20: 1 },
                        {P20: "Falso", Idp20: 0}
                       
                    ],
                    dataTextField: "P20",
                    dataValueField: "Idp20"
                }

            },
            {
                field: "Pregunta21",
                editor: "DropDownList",
                label: "21. La mayoría de las personas caen mejor de lo que yo caigo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P21: "Verdadero ", Idp21:0 },
                        {P21: "Falso", Idp21: 1}
                       
                    ],
                    dataTextField: "P21",
                    dataValueField: "Idp21"
                }

            },
            {
                field: "Pregunta22",
                editor: "DropDownList",
                label: "22. Mayormente siento como si mis padres estuvieran presionados.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P22: "Verdadero ", Idp22: 0 },
                        {P22: "Falso", Idp22: 1}
                       
                    ],
                    dataTextField: "P22",
                    dataValueField: "Idp22"
                }

            },
            {
                field: "Pregunta23",
                editor: "DropDownList",
                label: "23. Me siento de más en la escuela.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P23: "Verdadero ", Idp23: 0 },
                        {P23: "Falso", Idp23: 1}
                       
                    ],
                    dataTextField: "P23",
                    dataValueField: "Idp23"
                }

            },
            {
                field: "Pregunta24",
                editor: "DropDownList",
                label: "24. Desearía ser otra persona.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P24: "Verdadero ", Idp24: 0},
                        {P24: "Falso", Idp24: 1}
                       
                    ],
                    dataTextField: "P24",
                    dataValueField: "Idp24"
                }

            },
            {
                field: "Pregunta25",
                editor: "DropDownList",
                label: "25. no se puede confiar en mi.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P25: "Verdadero ", Idp25: 0 },
                        {P25: "Falso", Idp25: 1}
                       
                    ],
                    dataTextField: "P25",
                    dataValueField: "Idp25"
                }

            },
            {
                field: "Pregunta26",
                editor: "DropDownList",
                label: "26. No me preocupo de nada.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P26: "Verdadero ", Idp26: 1 },
                        {P26: "Falso", Idp26: 0}
                       
                    ],
                    dataTextField: "P26",
                    dataValueField: "Idp26"
                }

            },
            {
                field: "Pregunta27",
                editor: "DropDownList",
                label: "27. Estoy seguro de mí mismo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P27: "Verdadero ", Idp27: 1 },
                        {P27: "Falso", Idp27:0}
                       
                    ],
                    dataTextField: "P27",
                    dataValueField: "Idp27"
                }

            },
            {
                field: "Pregunta28",
                editor: "DropDownList",
                label: "28. Me aceptan fácilmente en un grupo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P28: "Verdadero ", Idp28: 1 },
                        {P28: "Falso", Idp28: 0}
                       
                    ],
                    dataTextField: "P28",
                    dataValueField: "Idp28"
                }

            },
            {
                field: "Pregunta29",
                editor: "DropDownList",
                label: "29. Mis padres y yo nos divertimos mucho juntos.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P29: "Verdadero ", Idp29: 1 },
                        {P29: "Falso", Idp29: 0}
                       
                    ],
                    dataTextField: "P29",
                    dataValueField: "Idp29"
                }

            },
            {
                field: "Pregunta30",
                editor: "DropDownList",
                label: "30. Paso bastante tiempo soñando despierto.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P30: "Verdadero ", Idp30: 0},
                        {P30: "Falso", Idp30: 1}
                       
                    ],
                    dataTextField: "P30",
                    dataValueField: "Idp30"
                }

            },
            {
                field: "Pregunta31",
                editor: "DropDownList",
                label: "31. Desearía tener menos edad de la que tengo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P31: "Verdadero ", Idp31: 0 },
                        {P31: "Falso", Idp31: 1}
                       
                    ],
                    dataTextField: "P31",
                    dataValueField: "Idp31"
                }

            },
            {
                field: "Pregunta32",
                editor: "DropDownList",
                label: "32. Siempre hago lo correcto.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P32: "Verdadero ", Idp32: 1 },
                        {P32: "Falso", Idp32: 0}
                       
                    ],
                    dataTextField: "P32",
                    dataValueField: "Idp32"
                }

            },
            {
                field: "Pregunta33",
                editor: "DropDownList",
                label: "33. Estoy orgulloso de mi rendimiento en la escuela.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P33: "Verdadero ", Idp33: 1 },
                        {P33: "Falso", Idp33: 0}
                       
                    ],
                    dataTextField: "P33",
                    dataValueField: "Idp33"
                }

            },
            {
                field: "Pregunta34",
                editor: "DropDownList",
                label: "34. Alguien siempre tiene que decirme lo que debo hacer.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P34: "Verdadero ", Idp34: 0 },
                        {P34: "Falso", Idp34: 1}
                       
                    ],
                    dataTextField: "P34",
                    dataValueField: "Idp34"
                }

            },
            {
                field: "Pregunta35",
                editor: "DropDownList",
                label: "35. Generalmente me arrepiento de las cosas que hago.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P35: "Verdadero ", Idp35:0 },
                        {P35: "Falso", Idp35: 1}
                       
                    ],
                    dataTextField: "P35",
                    dataValueField: "Idp35"
                }

            },
            {
                field: "Pregunta36",
                editor: "DropDownList",
                label: "36. Nunca estoy contento.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P36: "Verdadero ", Idp36: 1 },
                        {P36: "Falso", Idp36: 0}
                       
                    ],
                    dataTextField: "P36",
                    dataValueField: "Idp36"
                }

            },
            {
                field: "Pregunta37",
                editor: "DropDownList",
                label: "37. Estoy haciendo lo mejor que puedo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P37: "Verdadero ", Idp37: 1 },
                        {P37: "Falso", Idp37:0}
                       
                    ],
                    dataTextField: "P37",
                    dataValueField: "Idp37"
                }

            },
            {
                field: "Pregunta38",
                editor: "DropDownList",
                label: "38. Generalmente puedo cuidarme sólo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P38: "Verdadero ", Idp38:1 },
                        {P38: "Falso", Idp38: 0}
                       
                    ],
                    dataTextField: "P38",
                    dataValueField: "Idp38"
                }

            },
            {
                field: "Pregunta39",
                editor: "DropDownList",
                label: "39. Soy bastante feliz.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P39: "Verdadero ", Idp39:1 },
                        {P39: "Falso", Idp39: 0}
                       
                    ],
                    dataTextField: "P39",
                    dataValueField: "Idp39"
                }

            },
            {
                field: "Pregunta40",
                editor: "DropDownList",
                label: "40. Preferiría jugar con niños más pequeños que yo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P40: "Verdadero ", Idp40: 0 },
                        {P40: "Falso", Idp40: 1}
                       
                    ],
                    dataTextField: "P40",
                    dataValueField: "Idp40"
                }

            },
            {
                field: "Pregunta41",
                editor: "DropDownList",
                label: "41. Me gustan todas las personas que conozco.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P41: "Verdadero ", Idp41: 1 },
                        {P41: "Falso", Idp41:0}
                       
                    ],
                    dataTextField: "P41",
                    dataValueField: "Idp41"
                }

            },
            {
                field: "Pregunta42",
                editor: "DropDownList",
                label: "42. Me gusta cuando me llaman a la pizarra.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P42: "Verdadero ", Idp42: 1 },
                        {P42: "Falso", Idp42: 0}
                       
                    ],
                    dataTextField: "P42",
                    dataValueField: "Idp42"
                }

            },
            {
                field: "Pregunta43",
                editor: "DropDownList",
                label: "43. Me entiendo a mí mismo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P43: "Verdadero ", Idp43:1 },
                        {P43: "Falso", Idp43: 0}
                       
                    ],
                    dataTextField: "P43",
                    dataValueField: "Idp43"
                }

            },
            {
                field: "Pregunta44",
                editor: "DropDownList",
                label: "44. Nadie me presenta mucha atención en casa.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P44: "Verdadero ", Idp44: 0 },
                        {P44: "Falso", Idp44: 1}
                       
                    ],
                    dataTextField: "P44",
                    dataValueField: "Idp44"
                }

            },
            {
                field: "Pregunta45",
                editor: "DropDownList",
                label: "45. Nunca me resondran.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P45: "Verdadero ", Idp45: 1 },
                        {P45: "Falso", Idp45: 0}
                       
                    ],
                    dataTextField: "P45",
                    dataValueField: "Idp45"
                }

            },
            {
                field: "Pregunta46",
                editor: "DropDownList",
                label: "46. No me está yendo bien en la escuela como yo quisiera.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P46: "Verdadero ", Idp46: 0 },
                        {P46: "Falso", Idp46: 1}
                       
                    ],
                    dataTextField: "P46",
                    dataValueField: "Idp46"
                }

            },
            {
                field: "Pregunta47",
                editor: "DropDownList",
                label: "47. Puedo tomar una decisión y mantenerla.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P47: "Verdadero ", Idp47: 1 },
                        {P47: "Falso", Idp47: 0}
                       
                    ],
                    dataTextField: "P47",
                    dataValueField: "Idp47"
                }

            },
            {
                field: "Pregunta48",
                editor: "DropDownList",
                label: "48. Realmente no me gusta ser un niño.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P48: "Verdadero ", Idp48:0 },
                        {P48: "Falso", Idp48:1}
                       
                    ],
                    dataTextField: "P48",
                    dataValueField: "Idp48"
                }

            },
            {
                field: "Pregunta49",
                editor: "DropDownList",
                label: "49. no me gusta estar con otras personas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P49: "Verdadero ", Idp49: 0},
                        {P49: "Falso", Idp49: 1}
                       
                    ],
                    dataTextField: "P49",
                    dataValueField: "Idp49"
                }

            },
            {
                field: "Pregunta50",
                editor: "DropDownList",
                label: "50. Nunca soy tímido.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P50: "Verdadero ", Idp50:1 },
                        {P50: "Falso", Idp50: 0}
                       
                    ],
                    dataTextField: "P50",
                    dataValueField: "Idp50"
                }

            },
              {
                field: "Pregunta51",
                editor: "DropDownList",
                label: "51. Generalmente me avergüenzo de mí mismo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P51: "Verdadero ", Idp51:0 },
                        {P51: "Falso", Idp51: 1}
                       
                    ],
                    dataTextField: "P51",
                    dataValueField: "Idp51"
                }

            },
              {
                field: "Pregunta52",
                editor: "DropDownList",
                label: "52. Los chicos generalmente se la agarran conmigo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P52: "Verdadero ", Idp52:0 },
                        {P52: "Falso", Idp52: 1}
                       
                    ],
                    dataTextField: "P52",
                    dataValueField: "Idp52"
                }

            },
              {
                field: "Pregunta53",
                editor: "DropDownList",
                label: "53. Siempre digo la verdad.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P53: "Verdadero ", Idp53: 1 },
                        {P53: "Falso", Idp53: 0}
                       
                    ],
                    dataTextField: "P53",
                    dataValueField: "Idp53"
                }

            },
              {
                field: "Pregunta54",
                editor: "DropDownList",
                label: "54. Mis profesores me hacen sentir que no soy lo suficientemente capaz.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P54: "Verdadero ", Idp54: 0},
                        {P54: "Falso", Idp54: 1}
                       
                    ],
                    dataTextField: "P54",
                    dataValueField: "Idp54"
                }

            },
              {
                field: "Pregunta55",
                editor: "DropDownList",
                label: "55. No me importa lo que me pase.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P55: "Verdadero ", Idp55: 0 },
                        {P55: "Falso", Idp55: 1}
                       
                    ],
                    dataTextField: "P55",
                    dataValueField: "Idp55"
                }

            },
            {
                field: "Pregunta56",
                editor: "DropDownList",
                label: "56. Soy un fracaso.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P56: "Verdadero ", Idp56: 0 },
                        {P56: "Falso", Idp56: 1}
                       
                    ],
                    dataTextField: "P56",
                    dataValueField: "Idp56"
                }

            },
            {
                field: "Pregunta57",
                editor: "DropDownList",
                label: "57. Me fastidio fácilmente cuando me llaman la atención.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P57: "Verdadero ", Idp57:0 },
                        {P57: "Falso", Idp57: 1}
                       
                    ],
                    dataTextField: "P57",
                    dataValueField: "Idp57"
                }

            },
            {
                field: "Pregunta58",
                editor: "DropDownList",
                label: "58. Siempre sé lo que debo decir a las personas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P58: "Verdadero ", Idp58: 1 },
                        {P58: "Falso", Idp58: 0}
                       
                    ],
                    dataTextField: "P58",
                    dataValueField: "Idp58"
                }

            }
             
           
            
        ], buttonsTemplates: ""
        
       
        
    });
     $("#Regresar").click(function(){
           $(location).attr('href',"CuestionariosPequeñas.html"); 
         });
         
        /* $('#cuestionarioAC').on('change', function () {

        $('#Total').val(totalAT());
        $('#Resultado').val(escalaAT());
      

    });*/
         
     function totalAG() {
        var p1 = $("#Pregunta1").val();
        var p2 = $("#Pregunta2").val();
        var p3 = $("#Pregunta3").val();
        var p8 = $("#Pregunta8").val();
        var p9 = $("#Pregunta9").val();
        var p10 = $("#Pregunta10").val();
        var p15 = $("#Pregunta15").val();
        var p16 = $("#Pregunta16").val();
        var p17 = $("#Pregunta17").val();
        var p22 = $("#Pregunta22").val();
        var p23 = $("#Pregunta23").val();
        var p24 = $("#Pregunta24").val();
        var p29 = $("#Pregunta29").val();
        var p30 = $("#Pregunta30").val();
        var p31 = $("#Pregunta31").val();
        var p36 = $("#Pregunta36").val();
        var p37 = $("#Pregunta37").val();
        var p38 = $("#Pregunta38").val();
        var p43 = $("#Pregunta43").val();
        var p44 = $("#Pregunta44").val();
        var p45 = $("#Pregunta45").val();
        var p50 = $("#Pregunta50").val();
        var p51 = $("#Pregunta51").val();
        var p52 = $("#Pregunta52").val();
        var p57 = $("#Pregunta57").val();
        var p58 = $("#Pregunta58").val();
        
        var total = parseInt(p1)+ parseInt(p2)+parseInt(p3)+ parseInt(p8)+ parseInt(p9)+ parseInt(p10)+parseInt(p15)+ parseInt(p16)+ parseInt(p17)+ parseInt(p22)+ parseInt(p23)+ parseInt(p24)+ parseInt(p29)+ parseInt(p30)+ parseInt(p31)+ parseInt(p36)+ parseInt(p37)+ parseInt(p38)+ parseInt(p43)+ parseInt(p44)+ parseInt(p45)+ parseInt(p50)+ parseInt(p51)+ parseInt(p52)+ parseInt(p57)+ parseInt(p58);
       
         return total; 
    } 
    
    function escalaAG (){
        var total=totalAG();
        var escala;
        if(total >= 0 && total <= 14 ){
            escala="Escala de autoestima general: Baja";
        }
        else if(total >= 15 && total <= 20 ){
            escala = "Escala de autoestima general:Moderada";
        }
        else if(total >= 21 && total <= 23 ){
            escala="Escala de autoestima general: Alta";
        }
       
        return escala;
    }
    
    function totalAS(){
        var p4 = $("#Pregunta4").val();
        var p11 = $("#Pregunta11").val();
        var p18 = $("#Pregunta18").val();
        var p25 = $("#Pregunta25").val();
        var p32 = $("#Pregunta32").val();
        var p39 = $("#Pregunta39").val();
        var p46 = $("#Pregunta46").val();
        var p53 = $("#Pregunta53").val();
        var total = parseInt(p4)+ parseInt(p11)+ parseInt(p18)+ parseInt(p25)+ parseInt(p32)+ parseInt(p39)+ parseInt(p46)+ parseInt(p53);
       
        return total;
     
    }
    
    function escalaAS(){
        var total = totalAS();
        
        var escala;
        if(total >= 0 && total <= 4 ){
            escala= "Escala de autoestima social: Baja";
        }
        else if(total >= 5 && total <= 6 ){
            escala= "Escala de autoestima social: Moderada";
        }
        else if(total >= 7 && total <= 8 ){
             escala= "Escala de autoestima social: Alta";
        }
        return escala;
        
        
    }
    
    function totalAE (){
        var p7 = $("#Pregunta7").val();
        var p14 = $("#Pregunta14").val();
        var p21 = $("#Pregunta21").val();
        var p28 = $("#Pregunta28").val();
        var p35 = $("#Pregunta35").val();
        var p42 = $("#Pregunta42").val();
        var p49 = $("#Pregunta49").val();
        var p56 = $("#Pregunta56").val();
        var total = parseInt(p7)+ parseInt(p14)+ parseInt(p21)+ parseInt(p28)+ parseInt(p35)+ parseInt(p42)+ parseInt(p49)+ parseInt(p56);
        
        return total;
        
    }
    
    function escalaAE(){
        var total = totalAE ();
        var escala;
        if(total >= 0 && total <= 2 ){
            escala="Escala de autoestima escolar: Baja";
        }
        else if(total >= 3 && total <= 5 ){
            escala="Escala de autoestima escolar: Moderada";
        }
        else if(total >= 6 && total <= 7 ){
             escala="Escala de autoestima escolar: Alta";
        }
        return escala;
        
    }
    
    function totalAH(){
        var p5 = $("#Pregunta5").val();
        var p12 = $("#Pregunta12").val();
        var p19 = $("#Pregunta19").val();
        var p26 = $("#Pregunta26").val();
        var p33 = $("#Pregunta33").val();
        var p40 = $("#Pregunta40").val();
        var p47 = $("#Pregunta47").val();
        var p54 = $("#Pregunta54").val();
        var total = parseInt(p5)+ parseInt(p12)+ parseInt(p19)+ parseInt(p26)+ parseInt(p33)+ parseInt(p40)+ parseInt(p47)+ parseInt(p54);
        
        return total;
    }
    
    function escalaAH(){
        var total = totalAH();
        var escala;
        if(total >= 0 && total <= 3 ){
            escala = "Escala de autoestima del hogar: Baja";
        }
        else if (total >= 4 && total <= 5 ){
            escala = "Escala de autoestima del hogar: Moderada";
        }
        else if (total >= 4 && total <= 5 ){
            escala = "Escala de autoestima del hogar: Alta";
        }
        return escala;
    }
    function totalAT(){
         var total =  totalAG()+ totalAS()+ totalAE ()+ totalAH();
       
        return total;
    }
    
    function escalaAT(){
         var total =  totalAG()+ totalAS()+ totalAE ()+ totalAH();
         var escala;
         if(total >= 0 && total <= 25 ){
             escala = "Escala de autoestima total: Baja";
         }
         else if(total >= 26 && total <= 34 ){
             escala = "Escala de autoestima total: Moderada";
         }
         else if (total >= 35 && total <= 39 ){
              escala = "Escala de autoestima total: Alta";
         }
         return escala;
    }
    
     $("#GuardarAC").click(function(){
      
        var dataAC = Formulario.serializeArray();
      /* var ListaRespuestas = $("#cuestionarioEAIS").data("kendoForm"); */
      var totalData= dataAC.length;
      console.log(totalData);
       var Respuestas = JSON.stringify(dataAC);
        var dataEnviar = {
             IdBeneficiaria:IdBene,
             NombreBene:NombreBene,
             Fecha:dataAC[0].value,
             Respuestas: Respuestas,
             TotalAG:totalAG(),
             EscalaAG:escalaAG(),
             TotalAS:totalAS(),
             EscalaAS:escalaAS(),
             TotalAE:totalAE(),
             EscalaAE:escalaAE(),
             TotalAH:totalAH(),
             EscalaAH:escalaAH(),
             TotalAT:totalAT(),
             EscalaAT:escalaAT()
         };
       
        $.ajax({
            url: "createCuestionarioAC.html",
            method: "POST",
            dataType: "text",
            data: dataEnviar,
            success: function (data) {
                AlertPz("Guardado", data, "#00b347");
                console.log(data + "Guardado");
            },
            error: function (data) {
                AlertPz("Error", "Contesta todas las preguntas", "#cc0000");
                console.log(data + "Error");
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
