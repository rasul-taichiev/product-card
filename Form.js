/**
Создать файл Form.js и реализовать класс для формы под названием Form. Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:

I. Для получения всех значений формы.

II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).

III. Для сброса значений формы.

Используя данный класс - переписать логику задания №9, связанной с формами. Как? Используя внутренние методы - 
мы можем управлять через айди формы получением значений и всем, что должна делать модалка. */
let user = null;

class Form {
    

    constructor(formID){
        this.form = document.getElementById(formID);
    }

    getFormData () {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault()
            if(!this.checkValidityForm()) {
                console.log("Форма заполнена с ошибками!")
                return
            }
            const form = event.target
            const formData = new FormData(form)
            const data = Object.fromEntries(formData)
            data.createdOn = new Date().toLocaleString()
            console.log(data)
            this.user = data
            this.resetFormValue()
        })
    }
    checkValidityForm () {
        console.log(this.form.checkValidity())
        return this.form.checkValidity()
    }

    resetFormValue () {
        this.form.reset()
    }

}
   
const form = new Form ("registration__submit-form")
form.getFormData()
form.checkValidityForm()





