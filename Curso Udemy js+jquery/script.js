function mensagem(nome){
    alert("Você clicou em mim "+nome);
}

function mudaCor(cor){
    //pega o objeto pelo id 
    var elemento = document.getElementById("mensagem");
    elemento.style.color = cor;
    elemento.style.backgroundColor = 'black';
}

function validaForm(){
    //pega o elemtno no campo e printa o valor dele
    var nome = document.getElementById("nome");
    
    if(nome.value == ""){
        alert("Campo vazio!");
    }else{
        alert(nome.value);
    }
    
    
}
/*
var num = 10;
var numInt = 1;

var lista = [1,2,3,4,5];

console.log(lista)

function soma(x,y){
    return x+y;
}

console.log(soma(1,3))
*/

//print de lista
/*
for (i in lista){
    alert(lista[i]);
}

if(num%2 == 0){
    alert("Par");
}else{
    alert("Impar")
}

var i = 0;

while(i<10){
    alert(i);
    i++;
}

for(i=0;i<4;i++){
    alert(i);
}
*/