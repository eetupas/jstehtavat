lista = 
[
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
];

const nameValidation = (name) => {
    const pattern = /^((?=\S*?[A-Z])(?=\S*?[a-z]).{3,64})\S$/;
  
    if (pattern.test(name))
      return true;
    else
      return false;
};
console.log(nameValidation(lista[3]));



const sort = (lista) => {
let sorted = lista.sort((a, b) => a.price-b.price);
return(sorted);
};
console.log(sort(lista));

const filter = (lista) => {
let filtered = lista.filter(lista => lista.price < 5);
return(filtered);
};
console.log(filter(lista));


const raisePrices = (lista)  => {
    let multiplied = lista.map(lista => lista.price * 1.15);
    return multiplied;
};
console.log(raisePrices(lista));


const sum = (lista)  => {
    let hinnat = [];
    for (let ruoka of lista) {
        hinnat.push(ruoka.price);
    }
    const sum = hinnat.reduce((acc, current) => acc + current, 0);
    return(sum);
};
console.log(sum(lista));