/*№8 
Написати гру Камінь Ножиці Папір.
Варіанти вибору потрібно зберігати в масиві
Користувач вводить свій варіант
Компютер вибирає свій рандомний варівант з масиву
Первіряємо вибір користувача і вибір компютера. 
Опрацювати всі варіанти:
1) Варіанти де виграє користувач
2) Варіанти де виграє компютер
3) Варіанти де виходить нічия.*/
function game() {
  const options = ['Камень', 'Ножиницы', 'Бумага']
  const user = prompt('Введите Камень, Ножницы или Бумага');
  console.log('user', user);
  const computer = options[Math.floor(Math.random() * 3)];
  console.log('computer', computer);
  const resalt = [user, computer];
  if (resalt.includes('Камень') && resalt.includes('Ножницы')) return (`Победил ${resalt[resalt.indexOf('Камень')]}`);
  if (resalt.includes('Камень') && resalt.includes('Бумага')) return(`Победил ${resalt[resalt.indexOf('Бумага')]}`);
  if (resalt.includes('Ножницы') && resalt.includes('Бумага')) return(`Победил ${resalt[resalt.indexOf('Ножницы')]}`);
  return "Ничья";
}
console.log(game());
