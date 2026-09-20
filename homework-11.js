import { Form } from './Form.js';
const emailForm = document.getElementById("footer__submit-form");
const form = new Form ("registration__submit-form")

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
});

form.getFormData()
form.checkValidityForm()

