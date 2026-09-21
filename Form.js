/**
Создать файл Form.js и реализовать класс для формы под названием Form. Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:

I. Для получения всех значений формы.

II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).

III. Для сброса значений формы.

Используя данный класс - переписать логику задания №9, связанной с формами. Как? Используя внутренние методы - 
мы можем управлять через айди формы получением значений и всем, что должна делать модалка. */

export class Form {
    
    constructor(formID){
        this.form = document.getElementById(formID)
        let user = null
    }

    getFormData () {
        const formData = new FormData(this.form)
        const data = Object.fromEntries(formData)
        data.createdOn = new Date().toLocaleString()
        console.log(data)
        this.user = data
    }

    submitForm () {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault()
            this.isValid()
            if(!this.checkValidityForm()) {
                console.log("Форма заполнена с ошибками!")
                return
            }
            this.getFormData()
            this.resetFormValue()
            }
        )}

    isValid () {
        const userPassword = document.querySelector(".registration__password")
        const userPasswordConfirm = document.querySelector(
            ".registration__password-confirm",
            )
        userPasswordConfirm.addEventListener("input", () => {
            userPasswordConfirm.setCustomValidity("");
        });
        if (userPasswordConfirm.value !== userPassword.value) {
            userPasswordConfirm.setCustomValidity("Пароли не совпадают");
            return
        } else {
            userPasswordConfirm.setCustomValidity("");
        }
    }

    checkValidityForm () {
        return this.form.checkValidity()
    }

    resetFormValue () {
        this.form.reset()
    }

}
   






