//Manipulação de Objetos
/* 3. Filtrando Propriedades de Objetos 
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades. */

const produto = {
    nome: "Smartv",
    preco: 1200,
    estoque: 50,
    desconto: 0.10,
    garantia: 12, 
  };
  
  function filtrarPropriedades(obj, valorMinimo) {
    const novoObjeto = {};
  
    for (let propriedade in obj) {
      if (
        typeof obj[propriedade] === "number" &&
        obj[propriedade] > valorMinimo
      ) {
        novoObjeto[propriedade] = obj[propriedade];
      }
    }
  
    return novoObjeto;
  }
  
  const resultado = filtrarPropriedades(produto, 50.1);
  console.log(resultado);