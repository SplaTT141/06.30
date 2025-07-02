import { cities } from "../data/otherCitiesData.js";

export function homeFunction() {

    const dateElement = document.getElementsByClassName('date')[0];
    const timeElement = document.getElementsByClassName('time')[0];
    const hoursElement = document.getElementsByClassName('hours')[0];
    const minutesElement = document.getElementsByClassName('minutes')[0];
    const secondsElement = document.getElementsByClassName('seconds')[0];
    const citiesDOM = document.querySelectorAll('.city');

    const months = [
        'Sausio',
        'Vasario',
        'Kovo',
        'Balandzio',
        'Geguzes',
        'Birzelio',
        'Liepos',
        'Rugpjucio',
        'Rugsejo',
        'Spalio',
        'Lapkricio',
        'Gruodzio',
    ];

    const weekdays = [
        'Sekmadienis',
        'Pirmadienis',
        'Antradienis',
        'Treciadienis',
        'Ketvirtadienis',
        'Penktadienis',
        'Sestadienis',
    ];

    function clockArrowsRotation(h, min, s) {
        hoursElement.style.transform = 'rotate(' + h * 30 + 'deg)';
        minutesElement.style.transform = 'rotate(' + min * 6 + 'deg)';
        secondsElement.style.transform = 'rotate(' + s * 6 + 'deg)';
    }

    function clock() {
        const now = new Date();

        let h = now.getHours();
        let min = now.getMinutes();
        let s = now.getSeconds();
        h = addZero(h);
        min = addZero(min);
        s = addZero(s);

        let year = now.getFullYear();
        let month = now.getMonth();
        let weekday = now.getDay();
        let day = now.getDate();

        timeElement.textContent = h + ':' + min + ':' + s;
        dateElement.textContent = weekdays[weekday] + ', ' + months[month] + ' ' + day + ' ' + ' d.'

        clockArrowsRotation(h, min, s);
    }

    const intervalId = setInterval(clock, 1000);
    clock();

    function stopClock() {
        clearInterval(intervalId);
    }

    function addHours(hourNumber) {

        const now = new Date();

        let h = now.getHours();
        let min = now.getMinutes();
        let s = now.getSeconds();

        h = h + hourNumber;

        h = addZero(h);
        min = addZero(min);
        s = addZero(s);

        timeElement.textContent = h + ':' + min + ':' + s;

        clockArrowsRotation(h, min, s);
        // setInterval(addHours, 1000);
        console.log(typeof h);
    }

    function addZero(t) {
        if (t < 10) {
            t = '0' + t;
        }

        return t;
    }

    for (const city of citiesDOM) {
        city.addEventListener('click', () => {
            stopClock();
            const cityName = city.textContent.toLowerCase().trim();
            addHours(cities[cityName]);
        });
    }
}