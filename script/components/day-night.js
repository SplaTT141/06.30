const dayBtnDOM = document.querySelector('.fa.fa-sun-o');
const nightBtnDOM = document.querySelector('.fa.fa-moon-o');
const analogClockDOM = document.querySelector('.clock-analog');
const bodyDOM = document.querySelector('body');

const changingElements = [
    timeElement,
    dateElement,
    hoursElement,
    minutesElement,
    secondsElement,
    analogClockDOM,
    bodyDOM,
];

dayBtnDOM.addEventListener('click', () => {
    nightBtnDOM.classList.add('active');
    dayBtnDOM.classList.remove('active');

    changingElements.forEach(element => element.classList.add('day'))

    if (nightBtnDOM.classList.contains('active')) {
        nightBtnDOM.style.color = '#333';
    }
})

nightBtnDOM.addEventListener('click', () => {
    nightBtnDOM.classList.remove('active');
    dayBtnDOM.classList.add('active');

    changingElements.forEach(element => element.classList.remove('day'))
})



