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

// creates an array from the functions's parameters
function matrizn() {
    n = arguments.length;
    console.log("n = " + n);
    var data = Array.from(Array(1),() => new Array(n));
// the benefit from creating array this way is a.length = number of rows and a[0].length = number of columns
    for (var i = 0; i < n; i++) { data[0][i] = arguments[i];}
    return matriz(data);
}

// an array with data from a to b
function vet(a, b) {
    var data = Array.from(Array(1),() => new Array(b-a+1));
    // the benefit from creating array this way is a.length = number of rows and a[0].length = number of columns
    for (var i = 0; i < data[0].length; i++) {
        data[0][i]= a + i;
    }
    return matrizn(data);
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
    if (m.length !== m[0].length) { return "n??o ?? uma matriz quadrada"; }

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

//aqui jaz media, mediana, devpad

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

function deter(a){
    determinante = (a[0][0]*a[1][1])-(1*(a[0][1]*a[1][0]));
    //return determinante;
}

function csl(a1,a2,b1,b2,c1,c2){

    D = matriz([[a1,b1],[a2,b2]]);

    Dx = matriz([[c1,b1],[c2,b2]]);

    Dy = matriz([[a1,c1],[a2,c2]]);


    D = deter(D);
    Dx = deter(Dx);
    Dy = deter(Dy);

    x = Dx/D;
    y = Dy/D;

    return x;
}