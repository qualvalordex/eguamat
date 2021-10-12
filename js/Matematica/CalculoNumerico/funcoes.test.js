const { polyval, bissec } = require('./funcoes.js')

// Polyval tests
console.log('Testing polyval...')
console.log('Se f(x) = x + 3, para x=2 espera-se f(2) = 5: ', polyval([1, 3], 2) === 5)
console.log('Se f(x) = x^2 + 3x + 10, para x=0, espera-se f(0) = 10: ', polyval([1, 3, 10], 0) === 10)
console.log('Se f(x) = 2x^5 + 6x^4 + x^3 + 4x + 1, para x=2.3, espera-se f(2.3) = 318.9985: ', polyval([2, 6, 1, 0, 4, 1], 2.3) === 318.9985)

// Bissec tests
console.log('Testing bissec...')
console.log('Se f(x) = 2x + 1, para o intervalo [-2,2], espera-se x=-0.5: ', bissec([2, 1], -2, 2, 0.0001, 20) === -0.5)
console.log('Se f(x) = x^2 - x - 2, para o intervalo [0,5], para 10 iterações, espera-se x=1.9971: ', bissec([1, -1, -2], 0, 5, 0.0001, 10) === 1.9971)
console.log('Se f(x) = 0.28x^4 + 2x^2 - 4x -100, para o intervalo [0,10], para 30 iterações, espera-se x=4.1402: ', bissec([0.28, 0, 2, -4, -100], 0, 10, 0.0001, 30) === 4.1402)