export function dayNight() {

    const dateElement = document.getElementsByClassName('date')[0];
    const timeElement = document.getElementsByClassName('time')[0];
    const hoursElement = document.getElementsByClassName('hours')[0];
    const minutesElement = document.getElementsByClassName('minutes')[0];
    const secondsElement = document.getElementsByClassName('seconds')[0];
    const analogClockDOM = document.querySelector('.clock-analog');
    const bodyDOM = document.querySelector('body');
    const clockMarkDOM = document.querySelectorAll('.mark');
    const citiesDOM = document.querySelectorAll('.city');
    const dayBtnDOM = document.querySelector('.fa.fa-sun-o');
    const nightBtnDOM = document.querySelector('.fa.fa-moon-o');

    const changingElements = [
        timeElement,
        dateElement,
        hoursElement,
        minutesElement,
        secondsElement,
        analogClockDOM,
        bodyDOM,
        ...clockMarkDOM,
        ...citiesDOM,
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
}
