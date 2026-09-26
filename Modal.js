
export class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
    }
    open() {
        this.modal.classList.add("active");
        this.isModalOpen = true;
        console.log("Модульное окно открыто.");
    }

    close() {
        this.modal.classList.remove("active");
        this.isModalOpen = false;
        console.log("Модульное окно закрыто.");
    }
}