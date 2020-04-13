// Para ajudá-lo em relação a diferentes funções.
function ajuda() {
  var x =
    "1) Function ajuda() retorna informações sobre o comando" + "<br>" +
    "2) Function exemplo() retorna lista de exemplos com algumas das funções. Está função limpará tudo o que foi inserido anteriormente" + "<br>" +
    "3) Function rand(n1,n2,e) retorna uma matriz com dimensões n1 e n2 e com números aleatórios e valor esperado e" + "<br>" +
    "4) Function aprox(x,z) aproxima um número, de um vetor ou uma matriz bidimensional de x a z casas decimais" + "<br>" +
    "5) Function matrizn(z) retorna uma matriz javascript dos parâmetros da função z" + "<br>" +
    "6) Function pale(n) retorna um vetor com comprimento n com uma caminhada aleatória pura" + "<br>" +
    "7) Function vet(a,b) retorna um vetor com dados de a até b" + "<br>" +
    "8) Function qtd(a,b) conta o número de elementos b na matriz a. Se o parâmetro b não for especificado, a contagem de a é retornada" + "<br>" +
    "12) Function plot(z) retorna um gráfico de um vetor z." + "<br>" +
    "13) Function limpar() retorna um espaço de trabalho limpo" + "<br>" +
    "14) Function salvar(x) onde x é um nome de um arquivo que termina com .html que salva uma cópia do trabalho atual localmente" + "<br>" +
    "15) Function carregar() carrega um arquivo .html de uma sessão anteriormente salva" + "<br>" +
    "16) Function matriz(z) cria e exibe uma tabela a partir de um vetor ou de uma matriz bidimensional z" + "<br>" +
    "17) Function matrizmult(a,b) multiplica duas matrizes a e b" + "<br>" +
    "18) Function matrizinv(m) calcula o inverso da matriz m a partir da elimincação gaussiana" + "<br>" +
    "19) Function matrizid(n) retorna uma matriz de identidade com n números de linhas e colunas" + "<br>" +
    "20) Function max(a) retorna o valor máximo de uma matriz" + "<br>" +
    "21) Function min(a) retorna o valor mínimo de uma matriz" + "<br>" +
    "22) Function intervalo(a) calcula o intervalo (max - min) de uma matriz a" + "<br>" +
    "23) Function mediana(a) calcula a mediana de uma matriz a" + "<br>" +
    "24) Function smtr(a) calcula a soma de determinada matriz a" + "<br>" +
    "25) Function ve(a) calcula o valor esperado (média aritmética) de uma matriz a" + "<br>" +
    "26) Function sqr(array) calcula a soma dos quadrados dos resíduos (sqr) of an array" + "<br>" +
    "27) Function variancia(array, flag) calcula a variação de uma matriz. Se flag = 0 então população. Se flag = 1 faça uma amostra" + "<br>" +
    "28) Function devpad(array, flag) calcula o desvio padrão de uma matriz. Se flag = 0 então população. Se flag = 1 faça a amostra" + "<br>" +
    "29) Function covar(array1, array2) calcula a covariância de duas matrizes" + "<br>" +
    "30) Function coefvar(array) calcula o coeficiente de variação para uma matriz" + "<br>" +
    "31) Function coefcorr(array1, array2) calcula o coeficiente de correlação de pearson para duas matrizes" + "<br>" +
    "32) Function coluna(a,c) retorna uma coluna específica c de uma matriz bidimensional a" + "<br>" +
    "33) Function linha(a,r) retorna uma coluna específica c de uma matriz bidimensional a" + "<br>" +
    "34) Function transposta(a) retorna a transposta de linhas de um vetor, uma coluna de um vetor ou uma matriz bidimensional" + "<br>" +
    "Observe que uma entrada que termina com: oculta a visualização da saída" + "<br>" +
    "Observe que uma entrada que começa com # é definida como texto";
  return x;
}

// Fornece uma nova planilha com exemplos das funções
function exemplo() {
  clear();
  function createExample(a,b) {
     if(cc !== 1){ CreateInputDiv(); }
     CreateOutputDiv();
     document.getElementById("input" + cc).innerHTML = "#" + a;
     CreateInputDiv();
     CreateOutputDiv();
     document.getElementById("input" + cc).innerHTML = b;
     outId = "output" + cc;
     let result = eval(b);
     if(!toggleOrCheckIfFunctionCall())
     document.getElementById("output" + cc).innerHTML = result;   
  }
  createExample("Example-1. Um número aleatório entre -1 e +1", "rand()");
  createExample("Example-2. Um vetor horizontal de 5 elementos com números aleátorios ", "matrix(rand(1,5))");
  createExample("Example-3. Um vetor vertical de 5 elementos com números aleátorios", "matrix(rand(5,1))");
  createExample("Example-4. Um vetor bidimensional de 3 linhas e 4 colunas com números aleátorios", "matrix(rand(3,4))");
  createExample("Example-5. Um vetor bidimensional de 3 linhas e 4 colunas com números aleátorios com o valor esperado 0.5", "matrix(rand(3,4,0.5))");
  createExample("Example-6. Obter uma linha específica de uma matriz bidimensional", "matrix(getRow(rand(4,4),2))");
  createExample("Example-7. Obter uma coluna específica de uma matriz bidimensional", "matrix(getColumn(rand(4,4),2))");
  createExample("Example-8. Obter a matriz transposta", "transpose(rand(3,4))"); 
  createExample("Example-9. Obter o vetor horizontal transposto com números aleátorios", "transpose(rand(1,3))");
  createExample("Example-10. Obter o vetor vertical transposto com números aleátorios", "transpose(rand(3,1))");
  createExample("Example-11. Plotar uma coluna a partir de uma matriz aleatória", "plot(transpose(getColumn(rand(10,5),1)))");
  createExample("Example-12. Plotar uma linha a partir de uma matriz aleatória", "plot(getRow(rand(10,5),2))");
  createExample("Example-13. Plotar uma passeio aleatória pura", "plot(rw(50))");
  createExample("Example-14. Plotar uma passeio aleatória com um valor esperado de 0.1", "plot(rw(50,0.1))");
  createExample("Example-15. Obter o inverso de uma matriz com eliminação gaussiana", "matrixInv([[4,7],[2,6]])");
  createExample("Example-16. Multiplica uma matriz por sua inversa", "matrixMult(matrixInv([[4,7],[2,6]]),matrix([[4,7],[2,6]]))");
  createExample("Example-17. Obtenha uma matriz de identidade em 4 dimensões", "matrixId(4)");
  createExample("Example-18. Multiplica uma matriz identidade com uma matriz de 2 linhas e 4 colunas", "matrixMult(matrixId(2),matrix([[1,2,3,4],[5,6,7,8]]))");
  createExample("Example-19. Obter o valor esperado de uma matriz", "ev([4,2,5,8,6])");
  createExample("Example-20. Obter o valor esperado de um vetor aleatório", "ev(rand(1,25,0.5))");
  createExample("Example-21. Obter o desvio padrão de população de uma matriz", "stdev([4,2,5,8,6],0)");
  createExample("Example-22. Obter a variação populacional de uma matriz", "variance([4,2,5,8,6],0)");
  createExample("Example-23. Obter o desvio padrão de amostra de uma matriz", "stdev([4,2,5,8,6],1)");
  createExample("Example-24. Obter a variação de amostra de uma matriz", "variance([4,2,5,8,6],1)");
  createExample("Example-25. Obter a correlação de duas matrizes", "correlation([1, 2, 4, 5, 8],[5, 20, 40, 80, 100])");
  createExample("Example-26. Obter a covaruância de duas matrizes", "covariance([5, 12, 18, 23, 45],[2, 8, 18, 20, 28])");
  createExample("Example-27. Obter um vetor com números de 0 a 25", "matrix(seq(0,25))");

  return "";
}
