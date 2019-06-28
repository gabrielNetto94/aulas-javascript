var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/gabrielnetto94');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro requisição');
                }
            }
        }
    });
}

//teste do método minhaPromise 
var resultado = minhaPromise() 
    .then(function(response) {//se tudo ok, mostra o response
        console.log(response);
    })
    .catch(function(error) {//catch é executado caso aconteça algum erro 
        console.warn(error);
    });
