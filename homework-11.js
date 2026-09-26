import { Form } from './Form.js';
import { Modal } from './Modal.js';
const emailForm = document.getElementById("footer__submit-form");
const registrationForm = new Form ("registration__submit-form")
const modalOpen = document.getElementById('footer__button-open')
const modalClose = document.getElementById('footer__button-close')
const overlay = document.querySelector('.overlay')
const modalWindow = new Modal('modalWindow')

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
});

registrationForm.submitForm()

if(modalOpen){
    modalOpen.addEventListener('click', () => {
        modalWindow.open()
    })
} 

if(modalClose){
    modalClose.addEventListener('click', () => {
        modalWindow.close()
    })
}

if(overlay){
    overlay.addEventListener('click', (event) => {
        if(event.target === overlay){
        modalWindow.close()
        }
    })
}
