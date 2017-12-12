let orderCount = 0;
let pizzaPrice = 15;
let taxRate = 0.10;

const takeOrder = (sauce, topping, cheese) => {
  orderCount = orderCount + 1;
  return (`Pizza order: ${sauce}, ${topping}, ${cheese}`);
};
const getSubTotal = (itemCount) => {return itemCount * pizzaPrice;}; 
const getTax = () => {return getSubTotal(orderCount) * taxRate;};
const getTotal = () => {return getSubTotal(orderCount) + getTax();};

console.log('Order 1: ', takeOrder('Pesto', 'Pepperoni', 'Mozzarella'));
console.log('Order 2: ', takeOrder('Bechamel', 'Mushrooms', 'Parmesan'));
console.log('Order 3: ', takeOrder('Salsa', 'Sausage', 'Provolone'));

console.log('Before Tax: ',  getSubTotal(orderCount),'$');
console.log('Tax: ',  getTax(orderCount),'$');
console.log('After Tax: ',  getTotal(orderCount),'$');
