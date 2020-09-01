//Função cálculo da área do círculo
function acirculo(r){
    return ((Math.PI*r*r*100)/100);
}

//Função cálculo da área do quadrado
function aquad(l){
    return l*l;
}

//Função cálculo da área do retângulo
function aretan(la,lb){
    return la*lb;
}

//Função cálculo da área do losango
function alosan(D,d){
    return (D*d)/2;
}

//Função cálculo da área do trapézio
function atrap(B, b, h){
    return (B*b*h)/2;
}

//Função cálculo da área do triângulo
function atrian(b, h){
    return (b*h)/2;
}

//Função distância entre 2 pontos
function d2p(x1,x2,y1,y2){
    var x = (pot(x2, 2)) - 2 * x2 * x1 + (pot(x1, 2));
    console.log(x)
    var y = (pot(y2, 2)) - 2 * y2 * y1 + (pot(y1, 2));
    console.log(y)
    return raizq((x+y));
}

//Função ponto médio
function pm(x1,x2,y1,y2){
    var xm = (x2+x1)/2;
    var ym = (y2+y1)/2;
    return ['x médio='+xm,'y médio='+ym];
}