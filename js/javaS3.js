// gives you help regarding different functions.
function ajuda() {
  var x =
    "1) Function ajuda() gives you command help" + "<br>" +
    "2) Function exemplo() gives you a worksheet with all working functions. This function will clear everything previously entered" + "<br>" +
    "3) Function rand(n1,n2,e) returns an array with dimensions n1 and n2 and with random numbers and expected value e" + "<br>" +
    "4) Function aprox(x,z) rounds a number, 1D array or a 2D array x to z decimal points" + "<br>" +
    "5) Function matrizn(z) returns a javascript array from the function's parameters z" + "<br>" +
    "6) Function pale(n) returns a 1D array with length n with a pure random walk" + "<br>" +
    "7) Function vet(a,b) gives you a 1D array with data from a to b" + "<br>" +
    "8) Function qtd(a,b) counts the number of elements b in array a. If parameter b is not specified then the count of a is return" + "<br>" +
    "12) Function plot(z) gives you a plot of a 1D array z." + "<br>" +
    "13) Function limpar() gives you a clean workspace" + "<br>" +
    "14) Function salvar(x) where x is a file name that ends with .html in enclosed in a string will save a copy of the current workspace locally" + "<br>" +
    "15) Function carregar() loads a html workspace file from a previous session" + "<br>" +
    "16) Function matriz(z) creates and displays a html table from a 1D or 2D dimensional array z and returns z" + "<br>" +
    "17) Function matrizmult(a,b) multiplies two matrices a and b" + "<br>" +
    "18) Function matrizinv(m) calculates the inverse of matrix m with gaussian elimination " + "<br>" +
    "19) Function matrizid(n) returns an identity matrix with n number of rows and columns" + "<br>" +
    "20) Function max(a) returns the maximum value of an array a" + "<br>" +
    "21) Function min(a) returns the minimum value of an array a" + "<br>" +
    "22) Function intervalo(a) calculates the range (max - min) of an array a" + "<br>" +
    "23) Function mediana(a) calculates the median of an array a" + "<br>" +
    "24) Function smtr(a) calculates the sum of a given array a" + "<br>" +
    "25) Function ve(a) calculates the expected value (arithmetic mean) of an array a" + "<br>" +
    "26) Function sqr(array) calculates the sum of squared errors (sse) of an array" + "<br>" +
    "27) Function variancia(array, flag) calculates the variance of an array. If flag = 0 then population. If flag = 1 then sample" + "<br>" +
    "28) Function devpad(array, flag) calculates the standard deviation of an array. If flag = 0 then population. If flag = 1 then sample" + "<br>" +
    "29) Function covar(array1, array2) calculates the covariance of two arrays" + "<br>" +
    "30) Function coefvar(array) calculates the coefficient of variation for an array" + "<br>" +
    "31) Function coefcorr(array1, array2) calculates the pearson's correlation coefficient for two arrays" + "<br>" +
    "32) Function coluna(a,c) gives you a specific column c from a 2D array a" + "<br>" +
    "33) Function linha(a,r) gives you a specific row r from a 2D array a" + "<br>" +
    "34) Function transposta(a) gives you the transpose of a 1D row array, a 1D column array or a 2D array a" + "<br>" +
    "Please note that an input that ends with : hiddes output from view" + "<br>" +
    "Please note that an input that starts with # is defined as text";
  return x;
}

// gives you a new worksheet with examples of different working functions 
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
  createExample("Example-1. One random number between -1 and +1", "rand()");
  createExample("Example-2. A 1D array with 1 row and 5 columns with random numbers", "matrix(rand(1,5))");
  createExample("Example-3. A 1D array with 5 rows and 1 column with random numbers", "matrix(rand(5,1))");
  createExample("Example-4. A 2D array with 3 rows and 4 columns with random numbers", "matrix(rand(3,4))");
  createExample("Example-5. A 2D array with 3 rows and 4 columns with random numbers with expected value 0.5", "matrix(rand(3,4,0.5))");
  createExample("Example-6. Get a specific row from a 2D matrix", "matrix(getRow(rand(4,4),2))");
  createExample("Example-7. Get a specific column from a 2D matrix", "matrix(getColumn(rand(4,4),2))");
  createExample("Example-8. Get the transpose of a matrix", "transpose(rand(3,4))"); 
  createExample("Example-9. Get the transpose of a matrix with 1 row and 3 columns with random numbers", "transpose(rand(1,3))");
  createExample("Example-10. Get the transpose of a matrix with 3 rows and 1 column with random numbers", "transpose(rand(3,1))");
  createExample("Example-11. Plot a column from a random matrix", "plot(transpose(getColumn(rand(10,5),1)))");
  createExample("Example-12. Plot a row from a random matrix", "plot(getRow(rand(10,5),2))");
  createExample("Example-13. Plot historical price data for the crypto-currency bitcoin", "plot(crypto('BTC'))");
  createExample("Example-14. Plot a pure random walk", "plot(rw(50))");
  createExample("Example-15. Plot a random walk with an expected value of 0.1", "plot(rw(50,0.1))");
  createExample("Example-16. Get the inverse of a matrix with gaussian elimination", "matrixInv([[4,7],[2,6]])");
  createExample("Example-17. Multiply a matrix by its inverse", "matrixMult(matrixInv([[4,7],[2,6]]),matrix([[4,7],[2,6]]))");
  createExample("Example-18. Get a 4 dimensional identity matrix", "matrixId(4)");
  createExample("Example-19. Multiply an identity matrix with a 2 row and 4 column matrix", "matrixMult(matrixId(2),matrix([[1,2,3,4],[5,6,7,8]]))");
  createExample("Example-20. Get the expected value of an array", "ev([4,2,5,8,6])");
  createExample("Example-21. Get the expected value of a 1D random matrix", "ev(rand(1,25,0.5))");
  createExample("Example-22. Get the population standard deviation of an array", "stdev([4,2,5,8,6],0)");
  createExample("Example-23. Get the population variance of an array", "variance([4,2,5,8,6],0)");
  createExample("Example-24. Get the sample standard deviation of an array", "stdev([4,2,5,8,6],1)");
  createExample("Example-25. Get the sample variance of an array", "variance([4,2,5,8,6],1)");
  createExample("Example-26. Get the correlation of two arrays", "correlation([1, 2, 4, 5, 8],[5, 20, 40, 80, 100])");
  createExample("Example-27. Get the covariance of two arrays ", "covariance([5, 12, 18, 23, 45],[2, 8, 18, 20, 28])");
  createExample("Example-28. Get a 1D matrix with numbers from 0 to 25", "matrix(seq(0,25))");

  return "";
}

