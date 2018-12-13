var pontos = {
    a:{
      b:50,
      d:50,
      e:40
     },
     b:{
      c: 40
     },
     c:{
      d:40,
      e:20
     },
     d:{
      c:40,
      e:80
     },
     e:{
      b:30
     },
}


function espacoEntre2PontosComIntervalo (pontoInicial, pontoFinal, intervalo) { 
    return ((pontos[pontoInicial][intervalo])+(pontos[intervalo][pontoFinal] ));
}
    
function espacoEntre2Pontos (pontoInicial, pontoFinal) { 
    return (pontos[pontoInicial][pontoFinal]);
}
    



function informaRotas(origem)  {
        var destino = (Object.keys(pontos[origem]));
        var resultado = {};
            for(i = 0; i <= (destino.length - 1); i++){
                resultado[destino[i]] = pontos[origem][destino[i]]
            }
        return resultado;
}
   
   

   
function tracarCaminhoCusto(inicio, fim, limiteCusto) {
       var rotaHistorico = {};
       var destinoEncontrado = "";

       rotaHistorico = informaRotas(inicio) 
       rotaHistoricoTemporario = {};
       var continueBuscaRota = false;
   
       iniciaContinuaBusca();

    function iniciaContinuaBusca(){
        continueBuscaRota = false;
   
        for (var i = 0; i < (Object.keys(rotaHistorico).length); i++) {
            var letras = (Object.keys(rotaHistorico)[i]);
            var qtd = rotaHistorico[Object.keys(rotaHistorico)[i]];
            var ultimaLetra = letras[letras.length-1];
            var novasRotas = informaRotas(ultimaLetra);
   
            for (var j = 0; j < (Object.keys(novasRotas).length); j++){
                var num = novasRotas[Object.keys(novasRotas)[j]];
                var letra = (Object.keys(novasRotas)[j])
                rotaHistoricoTemporario[letras+letra] = (qtd+num)
            }
       }
   
       rotaHistorico = rotaHistoricoTemporario;
       rotaHistoricoTemporario = {}
   
       for (var k = 0; k < (Object.keys(rotaHistorico).length); k++) {
            letrasRota =  Object.keys(rotaHistorico)[k];
            valorRota = rotaHistorico[(Object.keys(rotaHistorico)[k])];      
                if (valorRota <= limiteCusto){
                    continueBuscaRota = true;
                    if(letrasRota[letrasRota.length-1] == fim){
                        if(destinoEncontrado == ""){
                            destinoEncontrado = letrasRota;
                        }else{
                            destinoEncontrado = destinoEncontrado+", "+letrasRota;         
                        } 
                    }
                }else{
                    delete rotaHistorico[Object.keys(rotaHistorico)[k]];
                }
        }
       if (continueBuscaRota == true){
            iniciaContinuaBusca();
        }else{
            console.log(destinoEncontrado)
        }
    } //fim iniciaContinuaBusca
     return destinoEncontrado
}




   
   
function tracarCaminhoLimiteSalto(inicio, fim, limiteSalto) {
       var rotaHistorico = {};
       var destinoEncontrado = "";
       var qtdeEncontrado = 0;
       rotaHistorico = informaRotas(inicio)
       rotaHistoricoTemporario = {};     
       var continueBuscaRota = false;
   
       iniciaContinuaBusca();
   
       function iniciaContinuaBusca(){
            continueBuscaRota = false;
       
            for (var i = 0; i < (Object.keys(rotaHistorico).length); i++) {
        
                var letras = (Object.keys(rotaHistorico)[i]);
                var qtd = rotaHistorico[Object.keys(rotaHistorico)[i]];
                var ultimaLetra = letras[letras.length-1];
                var novasRotas = informaRotas(ultimaLetra);
   
                for (var j = 0; j < (Object.keys(novasRotas).length); j++){
                    var num = novasRotas[Object.keys(novasRotas)[j]];
                    var letra = (Object.keys(novasRotas)[j]);
                    rotaHistoricoTemporario[letras+letra] = (qtd+num);
                }
   
            }
   
       rotaHistorico = rotaHistoricoTemporario;
       rotaHistoricoTemporario = {};
   
       for (var k = 0; k < (Object.keys(rotaHistorico).length); k++) {
              
             letrasRota =  Object.keys(rotaHistorico)[k];
             valorRota = rotaHistorico[(Object.keys(rotaHistorico)[k])];      
   
                if ((letrasRota.length+1) <= limiteSalto){
                    continueBuscaRota = true;

                    if(letrasRota[letrasRota.length-1] == fim){
                        qtdeEncontrado++
                        if(destinoEncontrado == ""){
                            destinoEncontrado = letrasRota;
                        }else{
                            destinoEncontrado = destinoEncontrado+", "+letrasRota;         
                        } 
                    }
                }else{
                    delete rotaHistorico[Object.keys(rotaHistorico)[k]];
                }
        }
   
       if (continueBuscaRota == true){
            iniciaContinuaBusca();
       } else {
       }
    }
    return (qtdeEncontrado+"\n"+destinoEncontrado)
}
   






function tracarCaminhoMenorCusto(inicio, fim) {
       var rotaHistorico = {};
       var destinoEncontrado = {};
       var qtdeEncontrado = {};
       rotaHistorico = informaRotas(inicio)
       rotaHistoricoTemporario = {};     
       var continueBuscaRota = false;
   
       iniciaContinuaBusca();
   
       function iniciaContinuaBusca(){
            continueBuscaRota = false;
       
            for (var i = 0; i < (Object.keys(rotaHistorico).length); i++) {
        
                var letras = (Object.keys(rotaHistorico)[i]);
                var qtd = rotaHistorico[Object.keys(rotaHistorico)[i]];
                var ultimaLetra = letras[letras.length-1];
                var novasRotas = informaRotas(ultimaLetra);
   
                for (var j = 0; j < (Object.keys(novasRotas).length); j++){
                    var num = novasRotas[Object.keys(novasRotas)[j]];
                    var letra = (Object.keys(novasRotas)[j]);
                    rotaHistoricoTemporario[letras+letra] = (qtd+num);
                }
   
            }
   
              rotaHistorico = rotaHistoricoTemporario;
              rotaHistoricoTemporario = {};

              console.log("rotaHistorico :")
              console.log(rotaHistorico)
   
       for (var k = 0; k < (Object.keys(rotaHistorico).length); k++) {
              
             letrasRota =  Object.keys(rotaHistorico)[k];
             valorRota = rotaHistorico[(Object.keys(rotaHistorico)[k])];   

              console.log("letrasRota+valorRota");
              console.log(letrasRota+valorRota)
              
                if ((Object.keys(rotaHistorico)).length > 0){
                  
                    if(letrasRota[letrasRota.length-1] == fim){

                        if ((Object.keys(destinoEncontrado)).length == 0){
                            destinoEncontrado[letrasRota] = valorRota;
                            console.log("destinoEncontrado[letrasRota]")
                            console.log(destinoEncontrado)
                        }else{
                            if(destinoEncontrado[0] > valorRota){
                              destinoEncontrado = {};
                              destinoEncontrado[letrasRota] = valorRota;
                              
                            }else if(destinoEncontrado[0] == valorRota ) {
                              destinoEncontrado[letrasRota] = valorRota;
                              console.log("excluiu"+letrasRota)
                             // console.log(rotaHistorico[letrasRota])
                              delete rotaHistorico[letrasRota];
                              console.log(rotaHistorico);
                            }else if(destinoEncontrado[0] < valorRota ) {
                              delete rotaHistorico[letrasRota];
                            }
                        }
                    } else{
                      //else de if ((Object.keys(destinoEncontrado)).length == 0){
                      if ((Object.keys(rotaHistorico)).length != 0){
                        
                              if(destinoEncontrado[Object.keys(destinoEncontrado)[0]] < valorRota ){
                                  delete rotaHistorico[letrasRota];
                              }else{
                                continueBuscaRota = true;
                                console.log("chegou aqui1");
                              }
                      }else{
                          continueBuscaRota = true;
                      }  
                    }

                }


        }
   
       if (continueBuscaRota == true){
           iniciaContinuaBusca();
       } else {
       }
    }
    

    return (Object.keys(destinoEncontrado))
}




function questao1(){
 let a =  document.getElementById('q1a').value;
 let b = document.getElementById('q1b').value;
 let c = document.getElementById('q1c').value;

let resultado = espacoEntre2PontosComIntervalo(a, b ,c);
console.log(resultado)

 document.getElementById('r1').value = ("A distancia do ponto '" + a + "' até '"+ b +"', passando por "+c+" é "+resultado);
}


function questao2(){
    let a =  document.getElementById('q2a').value;
    let b = document.getElementById('q2b').value;
   
  let  resultado = espacoEntre2Pontos(a, b);
   console.log(resultado)

    document.getElementById('r2').value = ("A distancia entre os pontos '" + a + "' e '"+ b +"' é "+resultado);
}



function questao3(){
    let a =  document.getElementById('q3a').value;
    let b = document.getElementById('q3b').value;
    let c = document.getElementById('q3c').value;
   
   let resultado = espacoEntre2PontosComIntervalo(a, b ,c);
   console.log(resultado)
   
    document.getElementById('r3').value = ("A distancia do ponto '" + a + "' até '"+ b +"', passando por "+c+" é "+resultado);
   }



function questao4(){
    let a =  document.getElementById('q4a').value;
    let b = document.getElementById('q4b').value;
    let c = document.getElementById('q4c').value;
   
   let resultado = tracarCaminhoLimiteSalto(a, b ,c);
   //alert(resultado)
   
    document.getElementById('r4').value = ("rotas posiveis: "+resultado);
}

function questao5(){
    let a =  document.getElementById('q5a').value;
    let b = document.getElementById('q5b').value;
    let c = document.getElementById('q5c').value;
   
   let resultado = tracarCaminhoLimiteSalto(a, b ,c);
   //alert(resultado)
   
    document.getElementById('r5').value = ("rotas posiveis: "+resultado);
}


function questao6(){
    let a =  document.getElementById('q6a').value;
    let b = document.getElementById('q6b').value;
   

    let resultado = tracarCaminhoMenorCusto(a, b);
   //alert(resultado)
   
    document.getElementById('r6').value = ("Menor(es) rota(s): "+resultado);
}


function questao7(){
    let a =  document.getElementById('q7a').value;
    let b = document.getElementById('q7b').value;
   
   let resultado = tracarCaminhoMenorCusto(a, b);
   //alert(resultado)
   
    document.getElementById('r7').value = ("Menor(es) rota(s): "+resultado);
}


function questao8(){
    let a =  document.getElementById('q8a').value;
    let b = document.getElementById('q8b').value;
    let c = document.getElementById('q8c').value;
   
   let resultado = tracarCaminhoCusto(a, b ,c);
   //alert(resultado)
   
    document.getElementById('r8').value = ("rotas posiveis: "+resultado);
   }   