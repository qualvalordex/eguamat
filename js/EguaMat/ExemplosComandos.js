// Para ajudá-lo em relação a diferentes funções.
function ajuda() {
  var x =
    "1) Função ajuda() retorna informações sobre o comando" + "<br>" +
    "2) Função exemplo() retorna lista de exemplos com algumas das funções. Está função limpará tudo o que foi inserido anteriormente" + "<br>" +
    "3) Função rand(n1,n2,e) retorna uma matriz com dimensões n1 e n2 e com números aleatórios e valor esperado e" + "<br>" +
    "4) Função aprox(x,z) aproxima um número, de um vetor ou uma matriz bidimensional de x a z casas decimais" + "<br>" +
    "5) Função matrizn(z) retorna uma matriz javascript dos parâmetros da função z" + "<br>" +
    "6) Função pale(n) retorna um vetor com comprimento n com uma caminhada aleatória pura" + "<br>" +
    "7) Função vet(a,b) retorna um vetor com dados de a até b" + "<br>" +
    "8) Função qtd(a,b) conta o número de elementos b na matriz a. Se o parâmetro b não for especificado, a contagem de a é retornada" + "<br>" +
    "12) Função plot(z) retorna um gráfico de um vetor z." + "<br>" +
    "13) Função limpar() retorna um espaço de trabalho limpo" + "<br>" +
    "14) Função salvar(x) onde x é um nome de um arquivo que termina com .html que salva uma cópia do trabalho atual localmente" + "<br>" +
    "15) Função carregar() carrega um arquivo .html de uma sessão anteriormente salva" + "<br>" +
    "16) Função matriz(z) cria e exibe uma tabela a partir de um vetor ou de uma matriz bidimensional z" + "<br>" +
    "17) Função matrizmult(a,b) multiplica duas matrizes a e b" + "<br>" +
    "18) Função matrizinv(m) calcula o inverso da matriz m a partir da elimincação gaussiana" + "<br>" +
    "19) Função matrizid(n) retorna uma matriz de identidade com n números de linhas e colunas" + "<br>" +
    "20) Função max(a) retorna o valor máximo de uma matriz" + "<br>" +
    "21) Função min(a) retorna o valor mínimo de uma matriz" + "<br>" +
    "22) Função intervalo(a) calcula o intervalo (max - min) de uma matriz a" + "<br>" +
    "23) Função mediana(a) calcula a mediana de uma matriz a" + "<br>" +
    "24) Função smtr(a) calcula a soma de determinada matriz a" + "<br>" +
    "25) Função ve(a) calcula o valor esperado (média aritmética) de uma matriz a" + "<br>" +
    "26) Função sqr(array) calcula a soma dos quadrados dos resíduos (sqr) of an array" + "<br>" +
    "27) Função variancia(array, flag) calcula a variação de uma matriz. Se flag = 0 então população. Se flag = 1 faça uma amostra" + "<br>" +
    "28) Função devpad(array, flag) calcula o desvio padrão de uma matriz. Se flag = 0 então população. Se flag = 1 faça a amostra" + "<br>" +
    "29) Função covar(array1, array2) calcula a covariância de duas matrizes" + "<br>" +
    "30) Função coefvar(array) calcula o coeficiente de variação para uma matriz" + "<br>" +
    "31) Função coefcorr(array1, array2) calcula o coeficiente de correlação de pearson para duas matrizes" + "<br>" +
    "32) Função coluna(a,c) retorna uma coluna específica c de uma matriz bidimensional a" + "<br>" +
    "33) Função linha(a,r) retorna uma coluna específica c de uma matriz bidimensional a" + "<br>" +
    "34) Função transposta(a) retorna a transposta de linhas de um vetor, uma coluna de um vetor ou uma matriz bidimensional" + "<br>" +
    "35) Função sen(x) retorna o seno de um número em radiano" + "<br>" +
    "36) Função cos(x) retorna o cosseno de um número em radiano" + "<br>" +
    "37) Função tan(x) retorna a tangente de um número em radiano" + "<br>" +
    "38) Função arcos(x) retorna o arco cosseno de um número em radiano" + "<br>" +
    "39) Função arsen(x) retorna o arco tangente de um número em radiano" + "<br>" +
    "40) Função artan(x) retorna o arco tangente de um número em radiano" + "<br>" +
    "41) Função exp(x) retorna e^x, onde x é o argumento, e e é a Constante de Euler, a base dos logaritmos naturais" + "<br>" +
    "42) Função log(x) retorna o logaritmo natural(base e) de um número" + "<br>" +
    "43) Função pot(x,y) retorna a potenciação e radiciação" + "<br>" +
    "44) Função aleat() retorna um número pseudo-aleatório no intervalo [0, 1]" + "<br>" +
    "45) Função raizq(x) retorna a raíz quadrada de um número" + "<br>" +
    "Observe que uma entrada que termina com: oculta a visualização da saída" + "<br>" +
    "Observe que uma entrada que começa com # é definida como texto";
  return x;
}

// Fornece uma nova planilha com exemplos das funções
function exemplo() {
  limpar();
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
  createExample("Exemplo-1. Um número aleatório entre -1 e +1", "rand()");
  createExample("Exemplo-2. Um vetor horizontal de 5 elementos com números aleatórios ", "matriz(rand(1,5))");
  createExample("Exemplo-3. Um vetor vertical de 5 elementos com números aleatórios", "matriz(rand(5,1))");
  createExample("Exemplo-4. Um vetor bidimensional de 3 linhas e 4 colunas com números aleatórios", "matriz(rand(3,4))");
  createExample("Exemplo-5. Um vetor bidimensional de 3 linhas e 4 colunas com números aleatórios com o valor esperado 0.5", "matriz(rand(3,4,0.5))");
  createExample("Exemplo-6. Obter uma linha específica de uma matriz bidimensional", "matriz(linha(rand(4,4),2))");
  createExample("Exemplo-7. Obter uma coluna específica de uma matriz bidimensional", "matriz(coluna(rand(4,4),2))");
  createExample("Exemplo-8. Obter a matriz transposta", "transposta(rand(3,4))");
  createExample("Exemplo-9. Obter o vetor horizontal transposto com números aleatórios", "transposta(rand(1,3))");
  createExample("Exemplo-10. Obter o vetor vertical transposto com números aleatórios", "transposta(rand(3,1))");
  createExample("Exemplo-11. Plotar uma coluna a partir de uma matriz aleatória", "plot(transposta(coluna(rand(10,5),1)))");
  createExample("Exemplo-12. Plotar uma linha a partir de uma matriz aleatória", "plot(linha(rand(10,5),2))");
  createExample("Exemplo-13. Plotar uma passeio aleatória pura", "plot(pale(50))");
  createExample("Exemplo-14. Plotar uma passeio aleatória com um valor esperado de 0.1", "plot(pale(50,0.1))");
  createExample("Exemplo-15. Obter o inverso de uma matriz com eliminação gaussiana", "matrizinv([[4,7],[2,6]])");
  createExample("Exemplo-16. Multiplica uma matriz por sua inversa", "matrizmult(matrizinv([[4,7],[2,6]]),matriz([[4,7],[2,6]]))");
  createExample("Exemplo-17. Obtenha uma matriz de identidade em 4 dimensões", "matrizid(4)");
  createExample("Exemplo-18. Multiplica uma matriz identidade com uma matriz de 2 linhas e 4 colunas", "matrizmult(matrizid(2),matriz([[1,2,3,4],[5,6,7,8]]))");
  createExample("Exemplo-19. Obter o valor esperado de uma matriz", "ve([4,2,5,8,6])");
  createExample("Exemplo-20. Obter o valor esperado de um vetor aleatório", "ve(rand(1,25,0.5))");
  createExample("Exemplo-21. Obter o desvio padrão de população de uma matriz", "devpad([4,2,5,8,6],0)");
  createExample("Exemplo-22. Obter a variação populacional de uma matriz", "variancia([4,2,5,8,6],0)");
  createExample("Exemplo-23. Obter o desvio padrão de amostra de uma matriz", "devpad([4,2,5,8,6],1)");
  createExample("Exemplo-24. Obter a variação de amostra de uma matriz", "variancia([4,2,5,8,6],1)");
  createExample("Exemplo-25. Obter a correlação de duas matrizes", "coefcorr([1, 2, 4, 5, 8],[5, 20, 40, 80, 100])");
  createExample("Exemplo-26. Obter a covaruância de duas matrizes", "covar([5, 12, 18, 23, 45],[2, 8, 18, 20, 28])");
  createExample("Exemplo-27. Obter um vetor com números de 0 a 25", "matriz(vet(0,25))");

  return "";
}
