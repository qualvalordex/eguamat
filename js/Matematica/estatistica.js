// Retorna o valor máximo de um array a
function max(a) {
    return Math.max.apply(null, a);
}

// Retorna o valor mínimo de um array a
function min(a) {
    return Math.min.apply(null, a);
}

// Calcula o intervalo de um array a
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
    return devpad(array, 1) / media(array);
};

// calculates the pearson's correlation coefficient
function coefcorr(array1, array2) {
    return aprox(covar(array1, array2) / devpad(array1, 1) / devpad(array2, 1));
};

function findLineByLeastSquares(values_x, values_y) {
    var x_sum = 0;
    var y_sum = 0;
    var xy_sum = 0;
    var xx_sum = 0;
    var count = 0;

    /*
     * The above is just for quick access, makes the program faster
     */
    var x = 0;
    var y = 0;
    var values_length = values_x.length;

    if (values_length != values_y.length) {
        throw new Error('The parameters values_x and values_y need to have same size!');
    }

    /*
     * Above and below cover edge cases
     */
    if (values_length === 0) {
        return [ [], [] ];
    }

    /*
     * Calculate the sum for each of the parts necessary.
     */
    for (let i = 0; i< values_length; i++) {
        x = values_x[i];
        y = values_y[i];
        x_sum+= x;
        y_sum+= y;
        xx_sum += x*x;
        xy_sum += x*y;
        count++;
    }

    /*
     * Calculate m and b for the line equation:
     * y = x * m + b
     */
    var m = (count*xy_sum - x_sum*y_sum) / (count*xx_sum - x_sum*x_sum);
    var b = (y_sum/count) - (m*x_sum)/count;

    /*
     * We then return the x and y data points according to our fit
     */
    var result_values_x = [];
    var result_values_y = [];

    for (let i = 0; i < values_length; i++) {
        x = values_x[i];
        y = x * m + b;
        result_values_x.push(x);
        result_values_y.push(y);
    }

    return [result_values_x, result_values_y];
}