
import invoices, { invoiceByClientName, papel } from './assets/data/invoices.js';

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
//const invoiceByClient = invoices.find(i => i.client.firstName === 'Juan');
console.log(invoiceByClientName('Juan'));

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