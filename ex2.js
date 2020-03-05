  
  //Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
  
  const usuarios = [
      { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
      { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
      { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
     ];


const newUsers = usuarios.map(function(item){
    return item.idade;
});

console.log(newUsers);

//[23, 15, 30]

const filterUsers = usuarios.filter(function(item){
    return item.idade > 18;
});
console.log(filterUsers);

//[{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const findUser = usuarios.find(function(item){
    return item.empresa === 'Google';
});
console.log(findUser);

//undefined



//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:
// Resultado:
/*[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
*/

const mult2 = usuarios.map(function(item){
    item.idade *= 2;
    return item;
});

console.log(mult2);

const ate50 = mult2.filter(function(item){
    if (item.idade <= 50)
    {
        return item;
    }
});

console.log(ate50);



