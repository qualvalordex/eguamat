//Funçao Seno, Cosseno, e Tangente
function sen(x) {
    return Math.sin(x);
}


//Coseno
function cos(x){
    return Math.cos(x);
}
function cosplot(a,b){
    var s = new Array();
    var x = new Array();
    var index = 0;
    for(var i=0;i<14;i++){
        s[index]=a*cos(x)+b;
        x[index] = i;
        index++;
        console.log(s[i]);
    }
    s = s;
    x = x;
    plot(x,s);
}

//Tangente
function tan(x){
    return Math.tan(x);
}

//Arco Cosseno
function arcos(x){
    return Math.acos(x);
}

//Arco Seno
function arsen(x){
    return Math.asin(x);
}

//Arco Tangente
function artan(x){
    return Math.atan(x)
}