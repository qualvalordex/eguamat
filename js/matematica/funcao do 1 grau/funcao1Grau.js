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
    var lista = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + (step * i));
    }
    return lista;
}

function fun2(a,b,c){
    n = 2.5;
    var arr = [];
    var step = (n - (-n)) / (n- 1);
    for (var i = 0; i < n; i=i+0.01) {
        arr.push(((-n-1.945) + (step * i)));
    }
    x = arr;
    f = x.map(function(x) { return ((x * x * a)+(b * x)+c); });
    plot(x,f);//['f(x) ='+f];
}

function fun2R(a,b,c){
    r1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    r2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    xv = (-1*b)/(2*a);
    yv = (-1*(Math.pow(b, 2) - (4 * a * c)))/4*a;
    return ["Raíz 1: " + r1 + "<br>" + "Raíz 2: " + r2];
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