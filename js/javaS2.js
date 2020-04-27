// displays a html table and returns a 1D or 2D array
function matriz(z) {
  if (z[0].length == undefined) { // 1D array 
    var table = document.createElement('table');
    table.setAttribute("class", "matrix");
    var tableBody = document.createElement('tbody');
    var row = document.createElement("tr");
    tableBody.appendChild(row);
    for (var i = 0; i < z.length; i++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(z[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    table.appendChild(tableBody);
  } else { // 2D array 
    var table = document.createElement('table');
    table.setAttribute("class", "matrix");
    var tableBody = document.createElement('tbody');
    z.forEach(function (rowData) {
      var row = document.createElement('tr');
      rowData.forEach(function (cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
  }
  document.getElementById(outId).innerHTML = table.outerHTML;
  toggleOrCheckIfFunctionCall(true);
  console.log(z);
  return z;
}

// multiply two matricies a and b
function matrizmult(a, b) {
  var data = [];  // maybe change this to array of array 
  console.log("a.length = " + a.length); 
  console.log("a[0].length = " + a[0].length); 
  console.log("b.length = " + b.length); 
  console.log("b[0].length = " + b[0].length); 

  // if a is a 1D row array and b is a 1D column array
  if (a.length == 1 && b[0].length == 1) {
    for (var i = 0; i < a[0].length; i++) { data[i] = a[0][i] * b[i][0]; }
  }
  // if a is a 1D column array and b is a 1D row array
  else if (a[0].length == 1 && b.length == 1) { 
    for (var i = 0; i < a.length; i++) { data[i] = a[i][0] * b[0][i]; }
  }
  // if a is a 1D column array and b is a 1D column array 
  else if (a[0].length == 1 && b[0].length == 1) {
    for (var i = 0; i < a.length; i++) { data[i] = a[i][0] * b[i][0]; }
  }
  // if a is a 1D row array and b is a 1D row array
  else if (a.length == 1 && b.length == 1) { 
    for (var i = 0; i < a[0].length; i++) { data[i] = a[0][i] * b[0][i]; }
  }
  // if a is a 2D array and b is a 2D array 
  else {
    for (var r = 0; r < a.length; ++r) {
      data[r] = new Array(b[0].length); // initialize the current row
      for (var c = 0; c < b[0].length; ++c) {
        data[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < a[0].length; ++i) {
          data[r][c] += a[r][i] * b[i][c];
        }
      }
    }
  }
  return matriz(aprox(data));
}

// calculates the inverse of matrix m with gaussian elimination 
function matrizinv(m) {
  // if the matrix isn't square: exit (error)
  if (m.length !== m[0].length) { return "not a square matrix"; }

  //create the identity matrix (I), and a copy (C) of the original
  var i = 0, ii = 0, j = 0, dim = m.length, e = 0, t = 0;
  var I = [], C = [];
  for (i = 0; i < dim; i += 1) {
    // Create the row
    I[I.length] = [];
    C[C.length] = [];
    for (j = 0; j < dim; j += 1) {

      //if we're on the diagonal, put a 1 (for identity)
      if (i == j) { I[i][j] = 1; }
      else { I[i][j] = 0; }

      // Also, make the copy of the original
      C[i][j] = m[i][j];
    }
  }

  // Perform elementary row operations
  for (i = 0; i < dim; i += 1) {
    // get the element e on the diagonal
    e = C[i][i];

    // if we have a 0 on the diagonal (we'll need to swap with a lower row)
    if (e == 0) {
      //look through every row below the i'th row
      for (ii = i + 1; ii < dim; ii += 1) {
        //if the ii'th row has a non-0 in the i'th col
        if (C[ii][i] != 0) {
          //it would make the diagonal have a non-0 so swap it
          for (j = 0; j < dim; j++) {
            e = C[i][j];       //temp store i'th row
            C[i][j] = C[ii][j];//replace i'th row by ii'th
            C[ii][j] = e;      //repace ii'th by temp
            e = I[i][j];       //temp store i'th row
            I[i][j] = I[ii][j];//replace i'th row by ii'th
            I[ii][j] = e;      //repace ii'th by temp
          }
          //don't bother checking other rows since we've swapped
          break;
        }
      }
      //get the new diagonal
      e = C[i][i];
      //if it's still 0, not invertable (error)
      if (e == 0) { return }
    }

    // Scale this row down by e (so we have a 1 on the diagonal)
    for (j = 0; j < dim; j++) {
      C[i][j] = C[i][j] / e; //apply to original matrix
      I[i][j] = I[i][j] / e; //apply to identity
    }

    // Subtract this row (scaled appropriately for each row) from ALL of
    // the other rows so that there will be 0's in this column in the
    // rows above and below this one
    for (ii = 0; ii < dim; ii++) {
      // Only apply to other rows (we want a 1 on the diagonal)
      if (ii == i) { continue; }

      // We want to change this element to 0
      e = C[ii][i];

      // Subtract (the row above(or below) scaled by e) from (the
      // current row) but start at the i'th column and assume all the
      // stuff left of diagonal is 0 (which it should be if we made this
      // algorithm correctly)
      for (j = 0; j < dim; j++) {
        C[ii][j] -= e * C[i][j]; //apply to original matrix
        I[ii][j] -= e * I[i][j]; //apply to identity
      }
    }
  }
  console.log(I);  // C should be the identity and matrix I should be the inverse:
  return matriz(aprox(I, 2));
}

// creates an identity matrix with n number of rows and columns
function matrizid(n) {
  var data = Array.from(Array(n), () => new Array(n));
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) { data[i][j] = 1; }
      else { data[i][j] = 0; }
    }
  }
  return matriz(data);
}

// returns the maximum value of an array a
function max(a) {
  return Math.max.apply(null, a);
}

// returns the minimum value of an array a
function min(a) {
  return Math.min.apply(null, a);
}

// calculates the range of an array a
function intervalo(a) {
  return max(a) - min(a);
}

// calculates the median of an array a
function mediana(a) {
  a.sort(function (a, b) { return a - b; });
  var mid = a.length / 2;
  return mid % 1 ? a[mid - 0.5] : (a[mid - 1] + a[mid]) / 2;
}

// calculates the sum of a given array a 
function smtr(a) {
  var z = 0 ;
  if (a.length == 1) {   // a is a 1D row array
    for (var j = 0; j < a[0].length; j++) {z = z + a[0][j]; }
  }
  else if (a[0].length == 1) {   // a is a 1D column array
   console.log("column array");
    for (var i = 0; i < a.length; i++) {z = z + a[i][0]; }
  }
  else {
    for (var j = 0; j < a.length; j++) {z = z + a[j]; }
  } 
  toggleOrCheckIfFunctionCall(false);  
  return aprox(z,2);
}

function media(a){
    return smtr(a)/a.length;
}

// calculates the expected value (arithmetic mean) of an array
function ve(a) {
if(a.length == 1){return aprox(smtr(a) / a[0].length,4);} // a is a row array
if(a[0].length == 1){return aprox(smtr(a) / a.length,4);} // a is a column array
if(a[0].length == undefined){return aprox(smtr(a) / a.length,4);}
}

// calculates the sum of squared errors (sse) of an array
function sqr(array) {
  var mean = ve(array);
  var sum = 0;
  var i = array.length;
  var tmp;
  while (--i >= 0) {
    tmp = array[i] - mean;
    sum += tmp * tmp;
  }
  return sum;
};

// calculates the variance of an array. If flag = 0 then population. If flag = 1 then sample. 
function variancia(array, flag) {
  if (flag == undefined) { flag = 1; }
  return sqr(array) / (array.length - (flag ? 1 : 0));
};

// calculates standard deviation of an array. If flag = 0 then population. If flag = 1 then sample. 
function devpad(array, flag) {
  if (flag == undefined) { flag = 1; }
  return aprox(Math.sqrt(variancia(array, flag)));
};

// calculates the covariance of two arrays
function covar(array1, array2) {
  var u = ve(array1);
  var v = ve(array2);
  var arr1Len = array1.length;
  var sq_dev = new Array(arr1Len);
  for (var i = 0; i < arr1Len; i++)
    sq_dev[i] = (array1[i] - u) * (array2[i] - v);
  return smtr(sq_dev) / (arr1Len - 1);
};

// calculates the coefficient of variation for an array
function coefvar(array) {
  return devpad(array, 1) / ex(array);
};

// calculates the pearson's correlation coefficient
function coefcorr(array1, array2) {
  return aprox(covar(array1, array2) / devpad(array1, 1) / devpad(array2, 1));
};

// gives you a specific column c from a 2D array a
function coluna(a, c) {
  var column = Array.from(Array(a.length), () => new Array(1));
  for (var i = 0; i < a.length; i++) {
    column[i][0] = a[i][c - 1];
  }
  return matriz(column);
}

// gives you a specific row r from a 2D array a
function linha(a, r) {
  console.log(a[0].length);
  var row = [];
  for (var j = 0; j < a[0].length; j++) {
    row.push(a[r - 1][j]);
  }
  return matriz(row);
}

// gives you the transpose of a 1D row array, a 1D column array or a 2D array a
function transposta(a) {
  console.log("a.length = " + a.length); 
  console.log("a[0].length = " + a[0].length); 

  if (a[0].length == undefined) { // a is a 1D row array
    var data = Array.from(Array(a.length), () => new Array(1));
    for (var j = 0; j < a.length; j++) {
      data[j][0] = a[j];
    }
  } else if (a[0].length == 1) { // a is a 1D column array
    var data = [];
    for (var i = 0; i < a.length; i++) {
      data[i] = a[i][0];
    }
  } else { // a is a 2D array
    var data = [];
    for (var j = 0; j < a[0].length; j++) {
      data[j] = Array(a.length);
    }
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[0].length; j++) {
        data[j][i] = a[i][j];
      }
    }
  }
  return matriz(data);
}

//Funçao Seno, Cosseno, e Tangente
function sen(x) { 
	return Math.sin(x);
}

function cos(x){
	return Math.cos(x);
}

function tan(x){
	return Math.tan(x);
}

//Funçao Arco Seno, Cosseno e Tangente
function arcos(x){
	return Math.acos(x);
}

function arsen(x){
	return Math.asin(x);
}

function artan(x){
	return Math.atan(x)
}

//Funçao  retorna ex, onde x é o argumento, e e é a Constante de Euler
function exp(x){
	return Math.exp(x);
}

function expo(x){
  x = parseFloat(x);
  var pos = new Array();
  var y = new Array();
  var n=0.01;
  var index = 0;
  for (i = 0; i < x; i+=n) {
    pos[index] = Math.exp(i);
    y[index] = i;
    index++;
    console.log(pos[i]);
  }
  return plot(y,pos);
}

//Funçao de log
function log(x) {
	return Math.log(x);
}

//Funçao de elevação que falta trocar o nome da função
function pot(x,y){
	return Math.pow(x,y);
}

//Funçao que gera um valor aleatório
function aleat(){
	return Math.random();
}

//Função de raiz quadrada
function raizq(x){
	return Math.sqrt(x);
}

//Função cálculo da área do círculo
function acirculo(r){
    return ((Math.PI*r*r*100)/100);
}

//Função cálculo da área do quadrado
function aquad(l){
    return l*l;
}

//Função cálculo da área do retângulo
function aretan(la,lb){
    return la*lb;
}

//Função cálculo da área do losango
function alosan(D,d){
    return (D*d)/2;
}

//Função cálculo da área do trapézio
function atrap(B, b, h){
    return (B*b*h)/2;
}

//Função cálculo da área do triângulo
function atrian(b, h){
    return (b*h)/2;
}

//Função velocidade média
function vmed(s,t){
    return (s/t);
}

//Função Dilatação Térmica
function dterm(d, c, t){
    return d*c*t;
}
//Função Calor Sensível
function calsen(m, c, t){
    return m*c*t;
}
//Função Calor Latente
function callat(m, l){
    return m*l;
}
//Função Espaço Percorrido
function deltas(s0, s){
    return ds=s-s0;
}

//Função Tempo Percorrido
function deltat(t0, t){
  return dt=t-t0;
}

//Função Velocidade Média
function vmed(){
    return ds/dt;
}
//Função Aceleração
function acel(v, v0, t, t0) {
    return (v-v0)/(t-t0)+'m/s²';

}

//Função Horária da Posição MRUV (output: Espaços)
function mruvfh(s0,v0, t, a){
  var posicoes = new Array(t);
    for(var i=0;i<t;i++){
    posicoes[i]=s0+v0*i+((a*i*i)/2);
    console.log(posicoes[i]);
    }
  return posicoes;
}
//Função Horária da Posição MRUV (output: Plotagem Gráfica)
function mruvposd(s0,v0, t, a){
  var posicoes = new Array(t);
  for(var i=0;i<t;i++){
    posicoes[i]=s0+v0*i+((a*i*i)/2);
    console.log(posicoes[i]);
  }
  return plot(posicoes);

}
//Função Horária MRU
function mrufh(s0,v,t){
  var posicoesmru = new Array(t);
  for(var i=0;i<t;i++){
    posicoesmru[i]=s0+v*t;
    console.log(posicoesmru[i]);
  }
  return posicoesmru;
}
//Função Horária da Posição MRUV (output: Plotagem Gráfica)
function mruposd(s0,v0, t, a){
  var posicoes = new Array(t);
  for(var i=0;i<t;i++){
    posicoes[i]=s0+v*t;
    console.log(posicoes[i]);
  }
  return plot(posicoes);
}

function heic(){
  return plot(posicoesmruv, posicoesmru);
}

