/* Напиши функцию, которая принимает параметр money и возвращает список 
доступных автомобилей в рамках бюджета money. Если нет ни одной доступной 
по цене машины, функция возвращает оповещение о недостатке средств.

const buyCar = function(money) {
  const cars = [
    { name: 'ferrari', cost: 100 },
    { name: 'lambo', cost: 90 },
    { name: 'bmw', cost: 80 },
    { name: 'subaru', cost: 60 }
  ];
}

*/

//THE SOLUTION
/*const buyCar = function(money) {
  const cars = [
    { name: 'ferrari', cost: 100 },
    { name: 'lambo', cost: 90 },
    { name: 'bmw', cost: 80 },
    { name: 'subaru', cost: 60 }
  ];
  const ableToBuy = [];
  const prices = [];
  for (const car of cars) {
    prices.push(car.cost);
  }
  console.log(`Доступно средств ${money}`);
  console.log(`самая дешевая машина стоит ${Math.min(...prices)}`);
  for (const car of cars) {
    if (money < Math.min(...prices)) {
      return 'Недостаточно средств';
    }
    if (car.cost <= money) {
      ableToBuy.push(car.name);
    }
  }
  return `Доступные авто ${ableToBuy}`;
}*/