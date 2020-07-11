<br />
<p align="center">
  <img src="./images/eg1.png" alt="egua" width="80px" height="80px">

  <h3 align="center">eguamat</h3>

  <p align="center">
    Ferramenta de programação matemática.
    <br />
    <a href="https://egua.tech/docs"><strong>Documentação »</strong></a>
    <br />
    <br />
    <a href="https://egua.tech/eguamat/">IDEgua</a>
    ·
    <a href="https://github.com/eguatech/eguamat/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/eguatech/eguamat/issues">Solicitar Funcionalidade</a>
    <br />
    <br />
    <img src="https://img.shields.io/github/issues/eguatech/eguamat" />
    <img src="https://img.shields.io/github/stars/eguatech/eguamat" />
    <img src="https://img.shields.io/github/forks/eguatech/eguamat" />
    <img src="https://img.shields.io/github/license/eguatech/eguamat" />
    <br />
  </p>
</p>

# eguamat

O MatEgua, módulo originado a partir da linguagem Egua, é um instrumento para aplicações matemáticas e científicas. Essa ferramenta apresenta funções indispensáveis para a análise de dados e métodos para modelagem de fenômenos físicos.

## ajuda()
Este comando mostra todas as 45 funções disponiveis no editor, são elas: 

## exemplo() 
Retorna lista de exemplos com algumas das funções. Está função limpará tudo o que foi inserido anteriormente.

# Funções 1 e 2 grau

## fun1(a,b)
Retorna uma lista com valores assumidos por X em dado momento da função.

## fun1R(a,b)
Retorna o valor de X que faz com que F(X) seja 0.

## linspace(Valor Inicial, Valor Final, Quantidade de elementos no vetor)
Retorna números espaçados uniformemente em um intervalo especificado.

## fun2(a,b,c)
Retorna o gráfico da função de segundo grau

## fun2R(a,b,c)
Retorna os valores de X que fazem com que F(X) seja 0.

## rand(n1,n2,e) 
Retorna uma matriz com dimensões n1 e n2 e com números aleatórios e valor esperado e.

## aprox(x,z) 
Aproxima um número, de um vetor ou uma matriz bidimensional de x a z casas decimais.

## matrizn(z) 
Retorna uma matriz javascript dos parâmetros da função z.

## pale(n) 
Retorna um vetor com comprimento n com uma caminhada aleatória pura.

## vet(a,b) 
Retorna um vetor com dados de a até b.

## qtd(a,b) 
Conta o número de elementos b na matriz a. Se o parâmetro b não for especificado, a contagem de a é retornada.

## plot(z)
Retorna um gráfico de um vetor z.

## limpar()
Retorna um espaço de trabalho limpo.

## salvar(x)
onde x é um nome de um arquivo que termina com .html que salva uma cópia do trabalho atual localmente.

## carregar()
Carrega um arquivo .html de uma sessão anteriormente salva.

## matriz(z)
Cria e exibe uma tabela a partir de um vetor ou de uma matriz bidimensional z.

## matrizmult(a,b)
Multiplica duas matrizes a e b.

## matrizinv(m)
Calcula o inverso da matriz m a partir da eliminação gaussiana.

## matrizid(n)
Retorna uma matriz de identidade com n números de linhas e colunas. 

# Estatística

## max(a)
Retorna o valor máximo de uma matriz.

## min(a)
Retorna o valor mínimo de uma matriz.

## intervalo(a)
Calcula o intervalo (max - min) de uma matriz a.

## mediana(a)
Calcula a mediana de uma matriz a.

## smtr(a)
Calcula a soma de determinada matriz a.

## media(a)


## ve(a)
Calcula o valor esperado (média aritmética) de uma matriz a. 

## sqr(array)
Calcula a soma dos quadrados dos resíduos (sqr) of an array.

## variancia(array, flag)
Calcula a variação de uma matriz. Se flag = 0 então população. Se flag = 1 faça uma amostra.

## devpad(array, flag)
Calcula o desvio padrão de uma matriz. Se flag = 0 então população. Se flag = 1 faça a amostra.

## covar(array1, array2)
Calcula a covariância de duas matrizes.

## coefvar(array)
Calcula o coeficiente de variação para uma matriz.

## coefcorr(array1, array2)
Calcula o coeficiente de correlação de pearson para duas matrizes.

# Matrizes

## coluna(a,c)
Retorna uma coluna específica c de uma matriz bidimensional a.

## linha(a,r)
Retorna uma coluna específica c de uma matriz bidimensional a.

## transposta(a)
Retorna a transposta de linhas de um vetor, uma coluna de um vetor ou uma matriz bidimensional. 

## sen(x) 
Retorna o seno de um número em radiano.

## cos(x)
Retorna o cosseno de um número em radiano.

## tan(x) 
Retorna a tangente de um número em radiano.

## arcos(x)
Retorna o arco cosseno de um número em radiano.

## arsen(x)
Retorna o arco tangente de um número em radiano.

## artan(x)
Retorna o arco tangente de um número em radiano.

## exp(x)
Retorna e^x, onde x é o argumento, e e é a Constante de Euler, a base dos logaritmos naturais.

## log(x)
Retorna o logaritmo natural(base e) de um número.

## pot(x,y)
Retorna a potenciação e radiciação.

## aleat()
Retorna um número pseudo-aleatório no intervalo [0, 1].

## raizq(x) 
Retorna a raíz quadrada de um número.

Observe que uma entrada que termina com: oculta a visualização da saída.

Observe que uma entrada que começa com # é definida como texto. 

# Cinemática
## vmed(distância,tempo)
Retorna o valor da velocidade média

## deltas(espaço inicial, espaço final)
Retorna o espaço percorrido

## deltat(tempo inicial, tempo final)
Retorna o tempo percorrido

## acel(Velocidade Final, Velocidade Inical, Tempo Final, Tempo Inicial)
Retorna o valor da aceleração

## mrufh(Posição Inicial, Velocidade Final, Tempo)
Função Horária do Movimento Retilíneo Uniforme

## mrufhp(Posição Inicial, Velocidade Final, Tempo)
Função Horária da Posição do Movimento Retilíneo Uniformemente Variado.

## mruvel(Posição Inicial, Posição Final, Tempo)
Função Gráfica para velocidade em MRU

## mruvfh(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
Função Horária da Posição MRUV

## mruvfhp(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
Função Gráfica para Velocidade em MRUV

## mruvvel(Posição Inicial, Posição Final, Aceleração)
Função Gráfico para velocidade em MRUV

# Controle e Servomecanismos

## pid(Overshoot, Tempo de Assentamento, Ganho Estático, Constante de tempo 1, Constante de Tempo 2)
Função para o cálculo dos valores de um controlador PID



## exemplo()
A função exemplo() retorna amostras do uso de todas as funções existentes e a combinação entre elas. 
O exemplo-8 mostra uma demostração de uma matriz transposta:
![](images/exemplo8.PNG)

No exemplo-12 ocorre a plotagem dos valores de uma linha de matriz aleatória;
    
    Exemplo 12: plot(linha(rand(10,5),2))
        rand(10,5) cria uma matriz aleatória X de 10 linha e 5 colunas;
        linha(X,2) retornar a segunda linha da matriz X;
        plot(linha(X,2)), neste exemplo, realiza a plotagem de um gráfico com os valores da linha da matriz X.

![](images/exemplo12.PNG)
