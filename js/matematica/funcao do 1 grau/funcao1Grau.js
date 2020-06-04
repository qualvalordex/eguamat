//Ferramentas para função de 1 Grau

function fun1(a,b){
    x = [b-4,b-3,b-2,b-1,b,b+1,b+2,b+3,b+4];
    f = x.map(function(x) { return ((x * a)+b); });
    return ['f(x) ='+f];
}

function fun1R(a,b){
    x = (-1*b)/a;
    return ['f(0) ='+x];
}

function linspace(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return arr;
}

function fun2(a,b,c){
    //x = matriz(linspace(-100,100,100))
    var arr = [];
    var step = (100 - (-100)) / (100- 1);
    for (var i = 0; i < 100; i++) {
        arr.push((-100) + (step * i));
    }
    x = arr;
    //x = [b-4,b-3,b-2,b-1,b,b+1,b+2,b+3,b+4];
    f = x.map(function(x) { return ((x * x * a)+(b * x)+c); });
    return ['f(x) ='+f];
}

function fun2R(a,b,c){
    var result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return ["Raíz 1: " + result + "<br>" + "Raíz 2: " + result2];
}


function taxVar(){
    var f = function(x){
        return Math.pow(2,x) + 7*x;
    }
    var derivada = function (f,x){
        var h = 0.0001;
        var dy = f(x+h)-f(x);
        var dx = h;
        return dy/dx;
    }
    return(derivada(f,2).toFixed(9));
}