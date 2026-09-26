export class Form {
    constructor(formID) {
        this.form = document.getElementById(formID);
    }

    getFormData() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        data.createdOn = new Date().toLocaleString();
        console.log(data);
        return data;
    }

    submitForm() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.isValid();
            if (!this.checkValidityForm()) {
                console.log("Форма заполнена с ошибками!");
                return;
            }
            this.getFormData();
            this.resetFormValue();
        });
    }

    isValid() {
        const userPassword = document.querySelector(".registration__password");
        const userPasswordConfirm = document.querySelector(
            ".registration__password-confirm",
        );
        userPasswordConfirm.addEventListener("input", () => {
            userPasswordConfirm.setCustomValidity("");
        });
        if (userPasswordConfirm.value !== userPassword.value) {
            userPasswordConfirm.setCustomValidity("Пароли не совпадают");
            return;
        } else {
            userPasswordConfirm.setCustomValidity("");
        }
    }

    checkValidityForm() {
        return this.form.checkValidity();
    }

    resetFormValue() {
        this.form.reset();
    }
}
