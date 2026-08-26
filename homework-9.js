/* 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.*/
const numbers = [1,2,3,4,5,6,7,8,9,10]
const startFromFive = numbers.filter(number => number >= 5)
console.log(startFromFive)
/*3. Создать массив строк, относящихся к любой сущности 
(название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность. */
const films = [{name: "interstellar", year: 2014}, {name: "Rush Hour", year: 1998}, {name: "Avengers: Final", year: 2019}]
const searchFilm = films.find(film => film.name === "interstellar")
console.log(searchFilm)
/**4.Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") .
 Два вышеуказанных массива с помощью этой функции перевернуть. */
 const reverseArray = (nameOfArray) => nameOfArray.reverse()

 console.log(reverseArray(films))
