import userData from './comments.js';
/*Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.*/
const numbers = [1,2,3,4,5,6,7,8,9,10]
const startFromFive = numbers.filter(number => number >= 5)
console.log(startFromFive)
/*Создать массив строк, относящихся к любой сущности 
(название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность. */
const films = [{name: "interstellar", year: 2014}, {name: "Rush Hour", year: 1998}, {name: "Avengers: Final", year: 2019}]
const searchFilm = (array, filmName) => {
    if(typeof filmName !== String){
        return("Название фильма должно быть строкой")
    }
    return array.some(
        (film) => film.name.toLowerCase() === filmName.toLowerCase()
    )

}

searchFilm(films, "interstellar") 

/*Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") .
 Два вышеуказанных массива с помощью этой функции перевернуть. */
 const reverseArray = (nameOfArray) => nameOfArray.reverse()

 console.log(reverseArray(films))

 // Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
 const checkEmailCom = userData.filter(user => user.email.includes(".com"))
 console.log(checkEmailCom)
 // Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
 const sortPostId = userData.map(user => {
     if(user.id <= 5){
         user.postId = 2
     }else if(user.id > 5){
         user.postId = 1
     }
     return user
 })
 console.log(sortPostId)
 
 // Перебрать массив, что бы объекты состояли только из айди и имени
 
 const getMainKeys = userData.map(user => {return{name: user.name, id: user.id} })
 console.log(getMainKeys)
 
 /* если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */  
 
 const symbolAmountCheck = userData.map(user => {
     return user.body.length >= 180 ? {...user, isInvalide: true} : {...user, isInvalide: false}
 })
 
 console.log(symbolAmountCheck)
 
 //Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
 const emailData = userData.reduce(function(accumulator, user) {
     accumulator.push(user.email)
     return accumulator
 },[])
 console.log(emailData)

 const emailDataWithMap = userData.map(user => user.email)
 console.log(emailDataWithMap)

 //Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
 const toString = emailData.toString();
 const joinArray = emailDataWithMap.join(" --")

 
