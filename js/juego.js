$(document).ready(function(){

      //con draggable() pueden moverse las imagenes 
      //revert:"invalid" vuelven las imagenes a su posicion original
        $("#arrastrar1").draggable({revert:"invalid"});
        $("#arrastrar2").draggable({revert:"invalid"});
        $("#arrastrar3").draggable({revert:"invalid"});
      //droppable() --> Capacita a la img de recibir otros elementos,admitiendo sólo a la imagen
      // cuyo 'id' es 'arrastrar1','arrastrar2' y 'arrastrar3', y con la condición tolerance:"intersect" de que sea soltada estando el 50% dentro    
        $("#destino1").droppable({
            accept:"#arrastrar2",tolerance:"intersect",drop:elementoSoltado1
        });
        $("#destino2").droppable({
            accept:"#arrastrar3",tolerance:"intersect",drop:elementoSoltado2
        });
        $("#destino3").droppable({
            accept:"#arrastrar1",tolerance:"intersect",drop:elementoSoltado3
        }); 

    });
     // Al haber definido la propiedad 'accept' para que admita sólo las piezzas de puzzle correspondientes, no
    // se producirá efecto alguno si soltamos la otra imagen al no ser admitida.

    var contador=0;

    function elementoSoltado1( event, ui )
    {
        $("#arrastrar2").attr("src","img/ficha3_relleno_roja.png");
        $("#mensaje").text("LA PIEZA HA SIDO SOLTADA Y ACEPTADA").css("color","red");
        document.getElementById("sonido1").play();
        contador++;
        ganador(contador);
    }
    function elementoSoltado2( event, ui )
    {
        $("#arrastrar3").attr("src","img/ficha1_relleno_morado.png");
        $("#mensaje").text("LA PIEZA HA SIDO SOLTADA Y ACEPTADA").css("color","purple");
        document.getElementById("sonido1").play();
        contador++;
        ganador(contador);
    }
    function elementoSoltado3( event, ui )
    {
        $("#arrastrar1").attr("src","img/ficha2_relleno_azul.png");
        $("#mensaje").text("LA PIEZA HA SIDO SOLTADA Y ACEPTADA").css("color","blue");
        document.getElementById("sonido1").play();
        contador++;
        ganador(contador);
    }

    function ganador(contador){

        if(contador==3){

            $("#ganado").text("¡HAS GANADO!"); 
            $("#unicornio").attr("src","img/lop-ganaste.gif");
            document.getElementById("sonido2").play();
        }   

    }
 