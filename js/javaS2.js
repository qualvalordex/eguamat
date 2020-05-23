//Funçao  retorna ex, onde x é o argumento, e e é a Constante de Euler
function exp(x){
	return Math.exp(x);
}

function expo(x){
  x = parseFloat(x);
  var pos = new Array();
  var y = new Array();
  var n=0.01;
  var index = 0;
  for (i = 0; i < x; i+=n) {
    pos[index] = Math.exp(i);
    y[index] = i;
    index++;
    console.log(pos[i]);
  }
  return plot(y,pos);
}

//Funçao de log
function log(x) {
	return Math.log(x);
}

//Funçao de elevação que falta trocar o nome da função
function pot(x,y){
	return Math.pow(x,y);
}

//Funçao que gera um valor aleatório
function aleat(){
	return Math.random();
}

//Função de raiz quadrada
function raizq(x){
	return Math.sqrt(x);
}



//Função Dilatação Térmica
function dterm(d, c, t){
    return d*c*t;
}
//Função Calor Sensível
function calsen(m, c, t){
    return m*c*t;
}
//Função Calor Latente
function callat(m, l){
    return m*l;
}

function heic(){
  return plot(posicoesmruv, posicoesmru);
}

