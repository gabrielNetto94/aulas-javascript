
//alterar o h1 para cor vermelha
$(document).ready(function(){
    $('#btHide').click(function(){
        
        //desta maneira, altera todos os h1
        //$('h1').css("color","red");

        //alterar por id
        $('#titulo1').css("color","red");
    });
});


//alterar cor do p
$(function(){
    $('#btAzul').click(function(){
        $('p').css("color","blue");
    });

    $('#btVermelho').click(function(){
        $('p').css("color","red");
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