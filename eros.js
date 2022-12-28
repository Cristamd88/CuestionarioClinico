var NombreBene="";

var IdBene="";
function datosUsuario(sesionUser){
    IdBene=sesionUser.idUsuario;
    NombreBene=sesionUser.nombre + sesionUser.apellidoP + sesionUser.apellidoM;
}
$(document).ready(function () {
    $('#EscalaRosenberg').kendoExpansionPanel({
        title: 'Cuestionario'
    });
    var Formulario = $("#EscalaRosenberg").kendoForm({
        formData: {
            Fecha: new Date(),
            Total: "",
            Resultado: ""

        },
        type: "group",
        layout: "grid",
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
                label: "Siento que soy una persona digna de aprecio, al menos en igual medida que los demás.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P1: "Muy de acuerdo ", Idp1: 4},
                        {P1: "De acuerdo", Idp1: 3},
                        {P1: "En desacuerdo", Idp1: 2},
                        {P1: "Muy en desacuerdo", Idp1: 1}

                    ],
                    dataTextField: "P1",
                    dataValueField: "Idp1"
                }

            },
            {
                field: "Pregunta2",
                editor: "DropDownList",
                label: "Estoy convencido de que tengo cualidades buenas.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P2: "Muy de acuerdo ", Idp2: 4},
                        {P2: "De acuerdo", Idp2: 3},
                        {P2: "En desacuerdo", Idp2: 2},
                        {P2: "Muy en desacuerdo", Idp2: 1}

                    ],
                    dataTextField: "P2",
                    dataValueField: "Idp2"
                }

            },
            {
                field: "Pregunta3",
                editor: "DropDownList",
                label: "Soy capaz de hacer las cosas tan bien como la mayoría de la gente.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P3: "Muy de acuerdo ", Idp3: 4},
                        {P3: "De acuerdo", Idp3: 3},
                        {P3: "En desacuerdo", Idp3: 2},
                        {P3: "Muy en desacuerdo", Idp3: 1}

                    ],
                    dataTextField: "P3",
                    dataValueField: "Idp3"
                }

            },
            {
                field: "Pregunta4",
                editor: "DropDownList",
                label: "Tengo una actitud positiva hacia mi mismo/a.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P4: "Muy de acuerdo ", Idp4: 4},
                        {P4: "De acuerdo", Idp4: 3},
                        {P4: "En desacuerdo", Idp4: 2},
                        {P4: "Muy en desacuerdo", Idp4: 1}

                    ],
                    dataTextField: "P4",
                    dataValueField: "Idp4"
                }

            },
            {
                field: "Pregunta5",
                editor: "DropDownList",
                label: "En general estoy satisfechola de mi mismo/a.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P5: "Muy de acuerdo ", Idp5: 4},
                        {P5: "De acuerdo", Idp5: 3},
                        {P5: "En desacuerdo", Idp5: 2},
                        {P5: "Muy en desacuerdo", Idp5: 1}

                    ],
                    dataTextField: "P5",
                    dataValueField: "Idp5"
                }

            },
            {
                field: "Pregunta6",
                editor: "DropDownList",
                label: "Siento que no tengo mucho de lo que estar orgulloso/a.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P6: "Muy de acuerdo ", Idp6: 1},
                        {P6: "De acuerdo", Idp6: 2},
                        {P6: "En desacuerdo", Idp6: 3},
                        {P6: "Muy en desacuerdo", Idp6: 4}

                    ],
                    dataTextField: "P6",
                    dataValueField: "Idp6"
                }

            },
            {
                field: "Pregunta7",
                editor: "DropDownList",
                label: "En general, me inclino a pensar que soy un fracasado/a.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P7: "Muy de acuerdo ", Idp7: 1},
                        {P7: "De acuerdo", Idp7: 2},
                        {P7: "En desacuerdo", Idp7: 3},
                        {P7: "Muy en desacuerdo", Idp7: 4}

                    ],
                    dataTextField: "P7",
                    dataValueField: "Idp7"
                }

            },
            {
                field: "Pregunta8",
                editor: "DropDownList",
                label: "8. Me gustaría poder sentir más respeto por mi mismo.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P8: "Muy de acuerdo ", Idp8: 1},
                        {P8: "De acuerdo", Idp8: 2},
                        {P8: "En desacuerdo", Idp8: 3},
                        {P8: "Muy en desacuerdo", Idp8: 4}

                    ],
                    dataTextField: "P8",
                    dataValueField: "Idp8"
                }

            },
            {
                field: "Pregunta9",
                editor: "DropDownList",
                label: "Hay veces que realmente pienso que soy un inútil.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P9: "Muy de acuerdo ", Idp9: 1},
                        {P9: "De acuerdo", Idp9: 2},
                        {P9: "En desacuerdo", Idp9: 3},
                        {P9: "Muy en desacuerdo", Idp9: 4}

                    ],
                    dataTextField: "P9",
                    dataValueField: "Idp9"
                }

            },
            {
                field: "Pregunta10",
                editor: "DropDownList",
                label: "A veces creo que no soy buena persona.",
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P10: "Muy de acuerdo ", Idp10: 1},
                        {P10: "De acuerdo", Idp10: 2},
                        {P10: "En desacuerdo", Idp10: 3},
                        {P10: "Muy en desacuerdo", Idp10: 4}

                    ],
                    dataTextField: "P10",
                    dataValueField: "Idp10"
                }

            }
           

        ],
        buttonsTemplates: ""

    });
    $('#EscalaRosenberg').on('change', function () {

        $('#Total').val(total());
        $('#Resultado').val(Resultados());
       

    });
    
    function total (){
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
        
        var total = parseInt(p1)+ parseInt(p2)+ parseInt(p3)+parseInt(p4)+parseInt(p5)+ parseInt(p6)+ parseInt(p7)+ parseInt(p8)+ parseInt(p9)+ parseInt(p10);
       
        return total;
      
        
    }
    
    function Resultados (){
      
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
        
        var total = parseInt(p1)+ parseInt(p2)+ parseInt(p3)+parseInt(p4)+parseInt(p5)+ parseInt(p6)+ parseInt(p7)+ parseInt(p8)+ parseInt(p9)+ parseInt(p10);
       
       var escala;
        if(total <= 40 && total >= 30 ){
            escala= "Autoestima elevada, Considerada como autoestima normal";
            $('#Resultado').css("background-color","#42BC05");
        }
        else if(total <= 29 && total >= 26 ){
            escala= "Autoestima media. No presenta problemas de autoestima graves, pero es conveniente mejorarla";
            $('#Resultado').css("background-color","#F9E922");
        }
        else if(total <= 25  ){
            escala= "Autoestima baja. Existen problemas significativos de autoestima";
            $('#Resultado').css("background-color","#EA2D07");
        }
        return escala;
    }
    
    $('#GuardarEros').click(function (){
        var dataEros = Formulario.serializeArray();
        var totalData = dataEros.length;
        var Respuestas = JSON.stringify(dataEros);
        var dataenviar ={
            IdBeneficiaria: IdBene,
            NombreBene:NombreBene,
            Total:total(),
            Resultados:Resultados(),
            Fecha:dataEros[0].value,
            Respuestas: Respuestas
        };
        
        
        $.ajax({
            url: "createCuestionarioEROS.html",
            method: "POST",
            dataType: "text",
            data: dataenviar,
            success: function (data) {
                AlertPz("Guardado", data, "#00b347");
                console.log(data + "Guardado");
            },
            error: function (data) {
               /*AlertPz("Error al guardar los datos", data, "#00b347");*/
                AlertPz("Error", "Contesta todas las preguntas", "#cc0000");
                console.log(data + "error");
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



