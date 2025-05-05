

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

  const invoiceByClientName = (clientName) => {
    return invoices.find(i => i.client.firstName === clientName);
  };

export {
    invoices as default,
    papel,
    invoiceByClientName,
};