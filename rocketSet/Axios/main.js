
//faz uma requisição para uma url, e o método ".then" e ".catch" é como se fosse um try catch, ambos retornam um método
axios.get('https://api.github.com/users/gabrielnetto94')
    .then(function(response) {//se tudo ok, mostra o response
        console.log(response);
    })
    .catch(function(error) {//catch é executado caso aconteça algum erro 
        console.warn(error);
    });
