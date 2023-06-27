/* Escreva um teste para uma função que dado um índice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */
const fibonacci = require("./fibonacci")

describe("Fibonacci function", () => {
  it("should check fibonacci", () => {
    const output = 5;

    expect(fibonacci(2, 3)).toEqual(output);
  })
})