//Manipulação de Objetos
/*2. Verificando Propriedades 
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.  */

let livro = {
    titulo: 'Pollyanna',
    autor: 'Eleanor H. Porter',
    anoPublicacao: '1913',
}

console.log('Antes de adicionar a editora:');
for (let objeto in livro) {
    console.log(objeto + ': ' + livro[objeto]);
}

//verificar se editora existe
let propriedadeEditoraExiste = false;

for (let objeto in livro) {
    if (objeto === 'editora') {
        propriedadeEditoraExiste = true;

    }
}

// Se "editora" não existir, adiciona a propriedade
if (!propriedadeEditoraExiste) {
    livro['editora'] = 'Autentica';
}

console.log('\nApós adicionar a editora:');
for (let objeto in livro) {
    console.log(objeto + ':' + livro[objeto]);
}