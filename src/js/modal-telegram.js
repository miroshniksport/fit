const TOKEN = "5747023535:AAHZqWUgYIO9mprxjGZVMpq59VcQiIZrx-E";
const CHATID = "-1001796692586";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const modalHero = document.querySelector('[data-modal-hero]');
const modalPrograms1 = document.querySelector('[data-modal-programs1]');
const modalPrograms2 = document.querySelector('[data-modal-programs2]');
const modalPrograms3 = document.querySelector('[data-modal-programs3]');

document.getElementById('form-hero').addEventListener('submit', function (event) {
    event.preventDefault();
    modalHero.classList.toggle('is-hidden');
    
    let message = `<b>Заявка на безкоштовну консультацію</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});

document.getElementById('form-programs1').addEventListener('submit', function (event) {
    event.preventDefault();
    modalPrograms1.classList.toggle('is-hidden');
    
    let message = `<b>Персональні тренування Zoom/Skype</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});

document.getElementById('form-programs2').addEventListener('submit', function (event) {
    event.preventDefault();
    modalPrograms2.classList.toggle('is-hidden');
    
    let message = `<b>Онлайн марафон «Пружні сідниці + Струнка талія»</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});

document.getElementById('form-programs3').addEventListener('submit', function (event) {
    event.preventDefault();
    modalPrograms3.classList.toggle('is-hidden');
    
    let message = `<b>Раціон харчування</b>\n`;
    message += `<b>Ім'я: ${this.name.value}</b>\n`;
    message += `<b>Телефон: ${this.tel.value}</b>`;
 
    axios.post(URL_API, {
        chat_id: CHATID,
        parse_mode: 'html',
        text: message
    })
        .then((response) => {
            this.name.value = "";
            this.tel.value = "";
        })
        .catch((error) => {
            console.warn(error);
        })
});