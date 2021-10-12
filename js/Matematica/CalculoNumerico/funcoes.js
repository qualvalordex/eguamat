function polyval (coefs, x) {
    let result = 0
    const degree = coefs.length - 1
    
    for (let i = degree; i >= 0; i--) {
        result += coefs[degree - i] * ( x**i )
    }
    
    return parseFloat(result.toFixed(4))
}

function bissec (coefs, a, b, tol, nmax) {
    let pm = 0 // pm = ponto médio
    for (let n = 1; n <= nmax; n++) {
        const fa = polyval(coefs, a) // Calcular f(a)
        const fb = polyval(coefs, b) // Calcular f(b)

        if (fa * fb > 0) return NaN // Garante que o intervalo possui uma raíz

        pm = (a + b)/2 // Cálculo do ponto médio do intervalo
        const fpm = polyval(coefs, pm) // Calcular f(pm)
        
        if (fpm === 0 || Math.abs((b-a))/2 < tol) return parseFloat(pm.toFixed(4)) // Solução encontrada

        if (fa * fpm > 0) { // Verifica se f(a) e f(pm) possuem o mesmo sinal
            a = pm
        } else {
            b = pm
        }
    }
    return parseFloat(pm.toFixed(4))
}

module.exports = { polyval, bissec }