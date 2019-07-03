
//alterar o h1 para cor vermelha
$(document).ready(function(){
    $('#btHide').click(function(){        
        //$('h1').css("color","red");//desta maneira, altera todos os h1
        $('#titulo1').css("color","red");//alterar por id
    });
});

$(function(){//função    
    $('#btAzul').click(function(){//no click do #btAzul realiza tal rotina
        $('p').css("color","blue");//altera a cor do parágrafo para azul
        $('p').css("background-color","#993388");//altera cor de fundo
        $('p').fadeOut(2000);//soma suavemente o p
        $('p').delay(3000);//delay 3s
        $('p').fadeIn(2000);//aparece suavemente
    });
    
    //no click do #btVermelho realiza tal rotina
    $('#btVermelho').click(function(){
        $('#mensagem')//altera o span de id "mensagem"
            .text("Olá") //seta o span para "Olá"
            .css({color:'red', border:'1px solid red'}) //altera as cores dele
            .fadeOut(2000)//some 
            .addClass('green') //adiciona a classe green
            

        $('p').css("color","red");//altera a cor do parágrafo para vermelho
        //$('p').fadeOut();//some suavemente o p
        //$('p').delay(3000);//delay
        //$('p').fadeIn();//aparece suavemente o p
    });
});

$(function(){
    $('#l1').click(function(){
        $('#img1').show();
    });
});


//forma mais simplificada da mesma função
/*
$(function(){
    $('button').click(function(){
        $('h1').hide();        
    });
});
*/