var NombreBene="";
var IdBene="";
function datosUsuario(sesionUser){
    IdBene=sesionUser.idUsuario;
    NombreBene=sesionUser.nombre + sesionUser.apellidoP + sesionUser.apellidoM;
}
$(document).ready(function(){
     $('#CuestionarioINVBK').kendoExpansionPanel({
        title: 'Cuestionario'
    });
    var Formulario = $("#CuestionarioINVBK").kendoForm({
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
                label: "Tristeza",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P1: "No me siento triste.", Idp1: 0},
                        {P1: "Me siento triste gran parte del tiempo", Idp1: 1},
                        {P1: "Me siento triste todo el tiempo.", Idp1: 2},
                        {P1: "Me siento tan triste o soy tan infeliz que no puedo soportarlo.", Idp1: 3}
                        

                    ],
                    dataTextField: "P1",
                    dataValueField: "Idp1"
                }

            },
             {
                field: "Pregunta2",
                editor: "DropDownList",
                label: "Pesimismo",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P2: "No estoy desalentado respecto del mi futuro.", Idp2: 0},
                        {P2: "Me siento más desalentado respecto de mi futuro que lo que solía estarlo.", Idp2: 1},
                        {P2: "No espero que las cosas funcionen para mi.", Idp2: 2},
                        {P2: "Siento que no hay esperanza para mi futuro y que sólo puede empeorar.", Idp2: 3}
                       

                    ],
                    dataTextField: "P2",
                    dataValueField: "Idp2"
                }

            },
             {
                field: "Pregunta3",
                editor: "DropDownList",
                label: "Fracaso",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P3: "No me siento como un fracasado.", Idp3: 0},
                        {P3: "He fracasado más de lo que hubiera debido.", Idp3: 1},
                        {P3: "Cuando miro hacia atrás, veo muchos fracasos.", Idp3: 2},
                        {P3: "Siento que como persona soy un fracaso total.", Idp3: 3}
                        

                    ],
                    dataTextField: "P3",
                    dataValueField: "Idp3"
                }

            },
             {
                field: "Pregunta4",
                editor: "DropDownList",
                label: "Pérdida de Placer",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P4: "Obtengo tanto placer como siempre por las cosas de las que disfruto.", Idp4: 0},
                        {P4: "No disfruto tanto de las cosas como solía hacerlo.", Idp4: 1},
                        {P4: "Obtengo muy poco placer de las cosas que solía disfrutar.", Idp4: 2},
                        {P4: "No puedo obtener ningún placer de las cosas de las que solía disfrutar.", Idp4: 3}
                        

                    ],
                    dataTextField: "P4",
                    dataValueField: "Idp4"
                }

            },
             {
                field: "Pregunta5",
                editor: "DropDownList",
                label: "Sentimientos de Culpa",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P5: "No me siento particularmente culpable.", Idp5: 0},
                        {P5: "Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.", Idp5: 1},
                        {P5: "Me siento bastante culpable la mayor parte del tiempo.", Idp5: 2},
                        {P5: "Me siento culpable todo el tiempo.", Idp5: 3}
                        

                    ],
                    dataTextField: "P5",
                    dataValueField: "Idp5"
                }

            },
             {
                field: "Pregunta6",
                editor: "DropDownList",
                label: "Sentimientos de Castigo",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P6: "No siento que este siendo castigado", Idp6: 0},
                        {P6: "Siento que tal vez pueda ser castigado.", Idp6: 1},
                        {P6: "Espero ser castigado.", Idp6: 2},
                        {P6: "Siento que estoy siendo castigado.", Idp6: 3}
                        

                    ],
                    dataTextField: "P6",
                    dataValueField: "Idp6"
                }

            },
             {
                field: "Pregunta7",
                editor: "DropDownList",
                label: "Disconformidad con uno mismo.",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P7: "Siento acerca de mi lo mismo que siempre.", Idp7: 0},
                        {P7: "He perdido la confianza en mí mismo.", Idp7: 1},
                        {P7: "Estoy decepcionado conmigo mismo.", Idp7: 2},
                        {P7: "No me gusto a mí mismo.", Idp7: 3}
                      

                    ],
                    dataTextField: "P7",
                    dataValueField: "Idp7"
                }

            },
             {
                field: "Pregunta8",
                editor: "DropDownList",
                label: "Autocrítica",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P8: "No me critico ni me culpo más de lo habitual", Idp8: 0},
                        {P8: "Estoy más crítico conmigo mismo de lo que solía estarlo", Idp8: 1},
                        {P8: "Me critico a mí mismo por todos mis errores", Idp8: 2},
                        {P8: "Me culpo a mí mismo por todo lo malo que sucede.", Idp8: 3}
                        

                    ],
                    dataTextField: "P8",
                    dataValueField: "Idp8"
                }

            },
             {
                field: "Pregunta9",
                editor: "DropDownList",
                label: "Pensamientos o Deseos Suicidas",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P9: "No tengo ningún pensamiento de matarme.", Idp9: 0},
                        {P9: "He tenido pensamientos de matarme, pero no lo haría", Idp9: 1},
                        {P9: "Querría matarme", Idp9: 2},
                        {P9: "Me mataría si tuviera la oportunidad de hacerlo.", Idp9: 3}
                        
                    ],
                    dataTextField: "P9",
                    dataValueField: "Idp9"
                }

            },
             {
                field: "Pregunta10",
                editor: "DropDownList",
                label: "Llanto",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P10: "No lloro más de lo que solía hacerlo.", Idp10: 0},
                        {P10: "Lloro más de lo que solía hacerlo", Idp10: 1},
                        {P10: "Lloro por cualquier pequeñez.", Idp10: 2},
                        {P10: "Siento ganas de llorar pero no puedo.", Idp10: 3}
                    

                    ],
                    dataTextField: "P10",
                    dataValueField: "Idp10"
                }

            },
             {
                field: "Pregunta11",
                editor: "DropDownList",
                label: "Agitación",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P11: "No estoy más inquieto o tenso que lo habitual.", Idp11: 0},
                        {P11: "Me siento más inquieto o tenso que lo habitual.", Idp11: 1},
                        {P11: "Estoy tan inquieto o agitado que me es difícil quedarme quieto", Idp11: 2},
                        {P11: "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.", Idp11: 3}
                 

                    ],
                    dataTextField: "P11",
                    dataValueField: "Idp11"
                }

            },
             {
                field: "Pregunta12",
                editor: "DropDownList",
                label: "Pérdida de Interés",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P12: "No he perdido el interés en otras actividades o personas.", Idp12: 0},
                        {P12: "Estoy menos interesado que antes en otras personas o cosas.", Idp12: 1},
                        {P12: "He perdido casi todo el interés en otras personas o cosas.", Idp12: 2},
                        {P12: "Me es difícil interesarme por algo.", Idp12: 3}
                        

                    ],
                    dataTextField: "P12",
                    dataValueField: "Idp12"
                }

            },
             {
                field: "Pregunta13",
                editor: "DropDownList",
                label: "Indecisión",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P13: "Tomo mis propias decisiones tan bien como siempre.", Idp13: 0},
                        {P13: "Me resulta más difícil que de costumbre tomar decisiones", Idp13: 1},
                        {P13: "Encuentro mucha más dificultad que antes para tomar decisiones.", Idp13: 2},
                        {P13: "Tengo problemas para tomar cualquier decisión.", Idp13: 3}
                    

                    ],
                    dataTextField: "P13",
                    dataValueField: "Idp13"
                }

            },
             {
                field: "Pregunta14",
                editor: "DropDownList",
                label: "Desvalorización",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P14: "No siento que yo no sea valioso", Idp14: 0},
                        {P14: "No me considero a mi mismo tan valioso y útil como solía considerarme", Idp14: 1},
                        {P14: "Me siento menos valioso cuando me comparo con otros.", Idp14: 2},
                        {P14: "Siento que no valgo nada.", Idp14: 3}
                     

                    ],
                    dataTextField: "P14",
                    dataValueField: "Idp14"
                }

            },
             {
                field: "Pregunta15",
                editor: "DropDownList",
                label: "Pérdida de Energía",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P15: "Tengo tanta energía como siempre.", Idp15: 0},
                        {P15: "Tengo menos energía que la que solía tener.", Idp15: 1},
                        {P15: "No tengo suficiente energía para hacer demasiado", Idp5: 2},
                        {P15: "No tengo energía suficiente para hacer nada.", Idp15: 3}
                       

                    ],
                    dataTextField: "P15",
                    dataValueField: "Idp15"
                }

            },
             {
                field: "Pregunta16",
                editor: "DropDownList",
                label: "Cambios en los Hábitos de Sueño",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P16: "No he experimentado ningún cambio en mis hábitos de sueño.", Idp16: 0},
                        {P16: "Duermo un poco más que lo habitual.", Idp16: 1},
                        {P16: "Duermo un poco menos que lo habitual.", Idp16: 2},
                        {P16: "Duermo mucho más que lo habitual.", Idp16: 3},
                        {P16: "Duermo la mayor parte del día", Idp16: 4},
                        {P16: "Me despierto 1-2 horas más temprano y no puedo volver a dormirme", Idp16: 5}

                    ],
                    dataTextField: "P16",
                    dataValueField: "Idp16"
                }

            },
             {
                field: "Pregunta17",
                editor: "DropDownList",
                label: "Irritabilidad",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P17: "No estoy tan irritable que lo habitual.", Idp17: 0},
                        {P17: "Estoy más irritable que lo habitual.", Idp17: 1},
                        {P17: "Estoy mucho más irritable que lo habitual.", Idp17: 2},
                        {P17: "Estoy irritable todo el tiempo.", Idp17:3}
                    

                    ],
                    dataTextField: "P17",
                    dataValueField: "Idp17"
                }

            },
             {
                field: "Pregunta18",
                editor: "DropDownList",
                label: "Cambios en el Apetito",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P18: "No he experimentado ningún cambio en mi apetito.", Idp18: 0},
                        {P18: "Mi apetito es un poco menor que lo habitual.", Idp18: 1},
                        {P18: "Mi apetito es un poco mayor que lo habitual.", Idp18: 2},
                        {P18: "Mi apetito es mucho menor que antes.", Idp18: 3},
                        {P18: "Mi apetito es mucho mayor que lo habitual", Idp18: 4},
                        {P18: "No tengo apetito en absoluto.", Idp18: 5},
                        {P18: "Quiero comer todo el día.", Idp18: 6}

                    ],
                    dataTextField: "P18",
                    dataValueField: "Idp18"
                }

            },
             {
                field: "Pregunta19",
                editor: "DropDownList",
                label: "Dificultad de Concentración",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P19: "Puedo concentrarme tan bien como siempre.", Idp19: 0},
                        {P19: "No puedo concentrarme tan bien como habitualmente", Idp19: 1},
                        {P19: "Me es difícil mantener la mente en algo por mucho tiempo.", Idp19: 2},
                        {P19: "Encuentro que no puedo concentrarme en nada.", Idp19: 3}
                      

                    ],
                    dataTextField: "P19",
                    dataValueField: "Idp19"
                }

            },
             {
                field: "Pregunta20",
                editor: "DropDownList",
                label: "Cansancio o Fatiga",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P20: "No estoy más cansado o fatigado que lo habitual.", Idp20: 0},
                        {P20: "Me fatigo o me canso más fácilmente que lo habitual.", Idp20: 1},
                        {P20: "Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.", Idp20: 2},
                        {P20: "Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer", Idp20: 3}
                       

                    ],
                    dataTextField: "P20",
                    dataValueField: "Idp20"
                }

            },
             {
                field: "Pregunta21",
                editor: "DropDownList",
                label: "Pérdida de Interés en el Sexo",
                
                validation: {required: true},
                editorOptions: {
                    autoBind: false,
                    optionLabel: "Seleccionar..",
                    dataSource: [
                        {P21: "No he notado ningún cambio reciente en mi interés por el sexo.", Idp21: 0},
                        {P21: "Estoy menos interesado en el sexo de lo que solía estarlo.", Idp21: 1},
                        {P21: "Estoy mucho menos interesado en el sexo.", Idp21: 2},
                        {P21: "He perdido completamente el interés en el sexo.", Idp21: 3}
                       

                    ],
                    dataTextField: "P21",
                    dataValueField: "Idp21"
                }

            }
            
        ],
          buttonsTemplates: ""
        
    });
    function totalINV(){
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
        var p18= $("#Pregunta18").val();
        var p19 = $("#Pregunta19").val();
        var p20 = $("#Pregunta20").val();
        var p21 = $("#Pregunta21").val();
        
      
        var total = parseInt(p1)+ parseInt(p2)+ parseInt(p3)+ parseInt(p4)+parseInt(p5)+ parseInt(p6)+ parseInt(p7)+ parseInt(p8)+ parseInt(p9)+ parseInt(p10)+ parseInt(p11)+ parseInt(p12)+ parseInt(p13)+ parseInt(p14)+ parseInt(p15)+ parseInt(p16)+ parseInt(p17)+ parseInt(p18)+ parseInt(p19)+ parseInt(p20)+ parseInt(p21);
        return total;
 }
 
 function escala(){
     var total = totalINV();
     var escala;
     if(total >= 0 && total <=18){
         escala="Leve";
     }
     else if(total >=19 && total <=27){
         escala="Moderado";
     }
     else if(total >=28 && total <=63){
         escala="Severo";
     }
     return escala;
 }
    $("#Regresar").click(function () {
        $(location).attr('href', "Cuestionarios.html");
    });
    
     $('#GuardarINV').click(function (){
        var dataINV = Formulario.serializeArray();
         var totalData= dataINV.length;
         console.log(totalData);
        var Respuestas = JSON.stringify(dataINV);
        var dataenviar ={
            IdBeneficiaria: IdBene,
            NombreBene:NombreBene,
            Fecha:dataINV[0].value,
            Respuestas:Respuestas,
            Total:totalINV(),
            Escala:escala()
           
        };

         
        $.ajax({
            url: "createCuestionarioINVBK.html",
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

