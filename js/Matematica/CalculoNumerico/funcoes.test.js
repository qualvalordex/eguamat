const { polyval } = require('./funcoes.js')

// Polyval tests
console.log('Testing polyval...')
console.log('Se f(x) = x + 3, para x=2 espera-se f(2) = 5: ', polyval([1, 3], 2) === 5)
console.log('Se f(x) = x^2 + 3x + 10, para x=0, espera-se f(0) = 10: ', polyval([1, 3, 10], 0) === 10)
console.log('Se f(x) = 2x^5 + 6x^4 + x^3 + 4x + 1, para x=2.3, espera-se f(2.3) = 318.9985: ', polyval([2, 6, 1, 0, 4, 1], 2.3) === 318.9985)