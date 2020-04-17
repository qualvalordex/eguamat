# MatEgua

## Introdução
O MatEgua, módulo originado a partir da linguagem Egua, é um instrumento para aplicações matemáticas e científicas. Essa ferramenta apresenta funções indispensáveis para a análise de dados e métodos para modelagem de fenômenos físicos.

## comandos

### ajuda()
Este comando mostra todas as 31 funções disponiveis editor, são elas: 

1. Função ajuda() retorna informações sobre o comando 
2. Função exemplo() retorna lista de exemplos com algumas das funções. Está função limpará tudo o que foi inserido anteriormente
3. Função rand(n1,n2,e) retorna uma matriz com dimensões n1 e n2 e com números aleatórios e valor esperado e
4. Função aprox(x,z) aproxima um número, de um vetor ou uma matriz bidimensional de x a z casas decimais
5. Função matrizn(z) retorna uma matriz javascript dos parâmetros da função z
6. Função pale(n) retorna um vetor com comprimento n com uma caminhada aleatória pura
7. Função vet(a,b) retorna um vetor com dados de a até b
8. Função qtd(a,b) conta o número de elementos b na matriz a. Se o parâmetro b não for especificado, a contagem de a é retornada
9. Função plot(z) retorna um gráfico de um vetor z.
10. Função limpar() retorna um espaço de trabalho limpo
11. Função salvar(x) onde x é um nome de um arquivo que termina com .html que salva uma cópia do trabalho atual localmente
12. Função carregar() carrega um arquivo .html de uma sessão anteriormente salva
13. Função matriz(z) cria e exibe uma tabela a partir de um vetor ou de uma matriz bidimensional z
14. Função matrizmult(a,b) multiplica duas matrizes a e b
15. Função matrizinv(m) calcula o inverso da matriz m a partir da eliminação gaussiana
16. Função matrizid(n) retorna uma matriz de identidade com n números de linhas e colunas
17. Função max(a) retorna o valor máximo de uma matriz
18. Função min(a) retorna o valor mínimo de uma matriz
19. Função intervalo(a) calcula o intervalo (max - min) de uma matriz a
20. Função mediana(a) calcula a mediana de uma matriz a
21. Função smtr(a) calcula a soma de determinada matriz a
22. Função ve(a) calcula o valor esperado (média aritmética) de uma matriz a
23. Função sqr(array) calcula a soma dos quadrados dos resíduos (sqr) of an array
24. Função variancia(array, flag) calcula a variação de uma matriz. Se flag = 0 então população. Se flag = 1 faça uma amostra
25. Função devpad(array, flag) calcula o desvio padrão de uma matriz. Se flag = 0 então população. Se flag = 1 faça a amostra
26. Função covar(array1, array2) calcula a covariância de duas matrizes
27. Função coefvar(array) calcula o coeficiente de variação para uma matriz
28. Função coefcorr(array1, array2) calcula o coeficiente de correlação de pearson para duas matrizes
29. Função coluna(a,c) retorna uma coluna específica c de uma matriz bidimensional a
30. Função linha(a,r) retorna uma coluna específica c de uma matriz bidimensional a
31. Função transposta(a) retorna a transposta de linhas de um vetor, uma coluna de um vetor ou uma matriz bidimensional


Observe que uma entrada que termina com: oculta a visualização da saída
Observe que uma entrada que começa com # é definida como texto 


### exemplo()
A função exemplo() retorna amostras do uso de todas as funções existentes e a combinação entre elas. 
O exemplo-8 mostra uma demostração de uma matriz transposta:
![](images/exemplo8.PNG)

No exemplo-12 ocorre a plotagem dos valores de uma linha de matriz aleatória;
    
    Exemplo 12: plot(linha(rand(10,5),2))
        rand(10,5) cria uma matriz aleatória X de 10 linha e 5 colunas;
        linha(X,2) retornar a segunda linha da matriz X;
        plot(linha(X,2)), neste exemplo, realiza a plotagem de um gráfico com os valores da linha da matriz X.

![](images/exemplo12.PNG)
