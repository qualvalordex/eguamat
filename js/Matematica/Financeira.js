function jsimples(capital,taxa_de_juros,tempo){
    taxa_de_juros = taxa_de_juros/100;
    Juros = capital*taxa_de_juros*tempo;
    Montante = capital+Juros;
    return ['Juros: '+Juros,'<br/>'+'&nbsp Montante: '+Montante,'<br/>'];
};

function jsimplesplot(capital,taxa_de_juros,tempo){
    taxa_de_juros = taxa_de_juros/100;


    var vj = new Array();
    var vt = new Array();
    var index = 0;
    for(var i=0;i<tempo;i++){
        Juros = capital*taxa_de_juros*i;
        Montante = capital+Juros;
        vj[index]=capital+Juros;
        vt[index]=i;
        index++;
    }
    return plot(vt,vj);
};

function jcompostos(capital,taxa_de_juros,tempo){
    taxa_de_juros = taxa_de_juros/100;
    Montante = capital*(pot(1+taxa_de_juros,tempo));
    Juros = Montante-capital;
    return ['Juros: '+Juros,'<br/>'+'&nbsp Montante: '+Montante];
};

function jcompostosplot(capital,taxa_de_juros,tempo){
    taxa_de_juros = taxa_de_juros/100;

    var vj = new Array();
    var vt = new Array();
    var index = 0;
    for(var i=0;i<tempo;i++){
        Montante = capital*(pot(1+taxa_de_juros,i));
        Juros = Montante-capital;
        vj[index]=Montante;
        vt[index]=i;
        index++;
    }
    return plot(vt,vj);
};