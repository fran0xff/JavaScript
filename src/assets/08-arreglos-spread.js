

const products = ['apple', 'banana', 'orange'];

const products2 =products.concat('grape', 'kiwi');

const fruits = ['manzana', 'pera', 'sandia'];

const mercado = [...products, ...fruits, 'mango', 'piña'];
const mercado2 = products2.concat(fruits).concat('mango', 'piña');


console.log(mercado2);
console.log(products2);


