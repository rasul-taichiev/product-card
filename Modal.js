/**4.
Создать файл Modal.js и в нем создать класс для модального окна под названием Modal. 
Он будет принимать 1 параметр через конструктор - айди модального окна. 
Внутри класса будут методы:

I. Для открытия модального окна.

II. Для закрытия модального окна.

III. Для проверки, открыто ли сейчас модальное окно.

IV. Метод, который слушает кнопку (крестик) 
для закрытия модалки и закрывает модалку 
(реализовать через eventListener) и вызывать в конструкторе
*/
const isModalOpen = false;
class Modal {
    constructor(modalID){
        this.modal = document.getElementById(modalID);
        const modalOpen = document.getElementById('footer__button-open')
        const modalClose = document.getElementById('footer__button-close')
        const overlay = document.querySelector('.overlay')
        
        modalOpen.addEventListener('click', () => {
            this.open()
        })

        modalClose.addEventListener('click', () => {
            this.close()
        })

        overlay.addEventListener('click', (event) => {
            if(event.target === overlay) {
                this.close()
            }
        })

    }

    open () {
        this.modalID.classList.add('active')
        this.isModalOpen = true;
        console.log("Модульное окно открыто.")
    }

    close () {
        this.modalID.classList.remove('active')
        this.isModalOpen = false;
        (console.log("Модульное окно закрыто."))
    }
/**Используя данный класс - переписать логику задания №9, 
 * связанной с модальными окнами. Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.*/
}

const modalWindow = new Modal('modalWindow');
