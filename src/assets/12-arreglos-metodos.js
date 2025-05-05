
const papel = {
    product: 'Papel',
    price: 10.0,
    quantity: 20,
  };

const invoices = [
  {
    id: 1,
    iname: 'Compras de oficina',
    client: {
      firstName:'Juan',
      lastName: 'Gomez',
    },
    items: [
      {
        product: 'Lapiz',
        price: 1.5,
        quantity: 10,
      },
      {
        product: 'Cuaderno',
        price: 2.5,
        quantity: 5,
      },
      {
        product: 'Borrador',
        price: 0.5,
        quantity: 20,
      },
      papel,
    ]
  },
    {
        id: 2,
        iname: 'Compras de computación',
        client: {
        firstName:'Maria',
        lastName: 'Lopez',
        },
        items: [
        {
            product: 'Monitor',
            price: 1.5,
            quantity: 10,
        },
        {
            product: 'Portatilno',
            price: 2.5,
            quantity: 5,
        },
        {
            product: 'Teclado',
            price: 0.5,
            quantity: 20,
        },
        ]
    },
    {
        id: 3,
        iname: 'Compras de papelería',
        client: {
        firstName:'Pedro',
        lastName: 'Martinez',
        },
        items: [
        {
            product: 'Papel',
            price: 1.5,
            quantity: 10,
        },
        {
            product: 'Grapadora',
            price: 2.5,
            quantity: 5,
        },
        {
            product: 'Tijeras',
            price: 0.5,
            quantity: 20,
        },
        papel,
        ]
    }
];

const invoicesClone = invoices.map(i => i.iname);

console.log(invoices);
console.log(invoicesClone);

const invoicesClient = invoices.map(i => {
    return i.client.firstName;
});

console.log(invoicesClient);

console.log('find');
const inoiceById = invoices.find(i => i.id === 3);
console.log(inoiceById);

console.log('find client name');
const invoiceByClient = invoices.find(i => i.client.firstName === 'Juan');
console.log(invoiceByClient);

console.log('filter');
const invoiceFilter = invoices.filter(i => i.id > 1);
console.log(invoiceFilter);

console.log('filter por nombre');
const invoiceFilter2 = invoices.filter(i => i.items.includes( papel ) );
console.log(invoiceFilter2);

console.log('some');
const result = invoices.some(i => i.client.firstName === 'Juan');
console.log(result);

console.log('filter eliminar elemento');
const invoiceDelete = invoices.filter(i => i.id !== 2 );
console.log(invoiceDelete);