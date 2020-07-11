let dayText = document.querySelector(".day-of-the-week");
let languages = document.querySelector(".languages");
let mainHeading = document.querySelector(".main-heading");

let date = new Date();
let day = date.getDay();



let dayList = {
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', "Today is:"],
    sl: ['Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Zbota', 'Nedelja', "Danes je:"]
};

let selectDay = () => {

    let selectedLanguage = languages.options[languages.selectedIndex].value;

    pickDay(day, selectedLanguage);
}

let pickDay = (day, lang) => {
    changeDayText(dayList[lang][day - 1], lang);
};

let changeDayText = (name, lang) => {
    let mainHeadingIndex = dayList[lang].length;
    console.log(mainHeadingIndex);
    mainHeading.innerHTML = dayList[lang][mainHeadingIndex - 1];
    dayText.innerHTML = name;
}

languages.addEventListener("change",  selectDay);

let dayOfTheWeek = pickDay(day, "sl");

