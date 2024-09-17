//Manipulação de Arrays de Objetos com for of
/* 6. Filtrando Arrays de Objetos 
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto 
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico. */

const funcionarios = [
    { nome: 'Ana', cargo: 'Gerente', salario: 4500 },
    { nome: 'Carlos', cargo: 'Supervisor', salario: 3000 },
    { nome: 'Beatriz', cargo: 'Analista II', salario: 2500 },
    { nome: 'Bernardo', cargo: 'Analista I', salario: 1450 },
    { nome: 'Joseph', cargo: 'Operador', salario: 1200 },
    { nome: 'Bruna', cargo: 'Estagiário', salario: 1000 }
];

function filtrarFuncionariosPorSalario(funcionarios, salarioMinimo) {
    const resultado = [];
    
    
    for (let funcionario of funcionarios) {
        if (funcionario.salario > salarioMinimo) {
            resultado.push(funcionario);
        }
    }
    
    return resultado;
}

const salarioMinimo = 1400;

const funcionariosFiltrados = filtrarFuncionariosPorSalario(funcionarios, salarioMinimo);

console.log('Funcionários com salário acima de ' + salarioMinimo + ':');
for (let funcionario of funcionariosFiltrados) {
    console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
}
