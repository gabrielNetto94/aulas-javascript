var xhr = new XMLHttpRequest();

//faz a requisição para a api
xhr.open('GET','https://api.github.com/users/gabrielnetto94');
xhr.send(null);

//teste para quando a requisição finalizou
xhr.onreadystatechange = function(){
    //se igual a 4 que é código informando que terminou
    if(xhr.readyState === 4){
        //printa no a resposta
        console.log(JSON.parse(xhr.responseText));
    }
}