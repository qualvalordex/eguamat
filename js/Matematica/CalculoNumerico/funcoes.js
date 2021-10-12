function polyval (coefs, x) {
    let result = 0
    const degree = coefs.length - 1
    
    for (let i = degree; i >= 0; i--) {
        result += coefs[degree - i] * ( x**i )
    }
    
    return parseFloat(result.toFixed(4))
}

module.exports = { polyval }