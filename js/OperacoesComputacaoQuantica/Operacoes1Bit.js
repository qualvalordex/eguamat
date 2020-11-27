//Aplica a Função Identidade em um vetor a
function id(a){
    matrizid = matriz([[1,0],[0,1]]);
    id = matrizmult(matrizid,a);
    return matriz(id);
}

//Aplica a Função Negação em um vetor a
function neg(a){
    matrizneg = matriz([[0,1],[1,0]]);
    neg = matrizmult(matrizneg,a);
    return matriz(neg);
}

//Aplica a Função Constante-0 em um vetor a
function const0(a) {
    matrizconst0 = matriz([[1, 1], [0, 0]]);
    const0 = matrizmult(matrizconst0, a);
    return matriz(const0);
}

//Aplica a Função Constante-1 em um vetor a
function const1(a){
    matrizconst1 = matriz([[0,0],[1,1]]);
    const1 = matrizmult(matrizconst1, a);
    return matriz(const1);
}

//Aplica a Função Hadamard em um vetor a
function hadamard(a){
    matrizhada = matriz([[(1/raizq(2)),(1/raizq(2))],[(1/raizq(2)),(-1/raizq(2))]]);
    hada = matrizmult(matrizhada, a);
    return matriz(hada);
}

//Aplica a Função CNOT (Controlled NOT) em um vetor a
function cnot(a,b){
    if (a == 0){
        b = b;
        return ['a:'+a,'<br/>','b:'+b];
    }else{
        if(b == 0){
            b = 1;
        }else{
            b = 0;
        }return ['a:'+a,'<br/>'+'&nbsp b:'+b];
    }
}


