//1
const productCards = document.querySelectorAll('.card');
const changeColorAllCard = document.querySelector('#change-color-all-card');
const darkGreenColorHash ='#006400';
const redColorRGB ='rgb(139, 0, 0)';

changeColorAllCard.addEventListener('click', () => {
  productCards.forEach((card) => card.style.background = darkGreenColorHash);
});
//2
const firstProductCard = document.querySelector('.card');
const changeFirstCard = document.querySelector('#changeFirstCard');

changeFirstCard.addEventListener('click' , () => {
    firstProductCard.style.background = redColorRGB
});
//3
const goToGoogleButton = document.querySelector('#goto-google');

goToGoogleButton.addEventListener('click' , openGoogle)


function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if(answer === true) {
        window.open('https://google.com')
    }else{
        return;
    }
}

//4
const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click',
    () => outputConsoleLog('привет мир'))

function outputConsoleLog(message) {
    alert('+99999999999')
    console.log(message)
};

//5
const hoverOverTitle = document.querySelector('.title');

hoverOverTitle.addEventListener('mouseover',
    () => outputConsoleTitle(hoverOverTitle) )

function outputConsoleTitle(message) {
    console.log(message)
};

//6
const changeColorLastButton = document.querySelector('#buttonChanger')

changeColorLastButton.addEventListener('click', () => {
    changeColorLastButton.classList.toggle('active')
})


