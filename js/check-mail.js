// let input = document.getElementById('1');
// input.addEventListener('submit',checkOne)
// let wordsArray = [];
// let words;
// error.classList.add('error')
const form = document.querySelector('.input-group');
const mail = form.querySelector('.mail')
let email;
let wordsArray = [];

form.addEventListener('submit', (evt) => {
    // Отменяем действие по умолчанию
    evt.preventDefault();
    checkOne();
});


// проверяет массив на дубликаты
function checkOne(event) {
    email = document.getElementById('text-input').value;
    let valid;
    let key;
    for (key of wordsArray) {
        if (key == email) {
            error.textContent = 'Данный почтовый адрес уже зарегистрирован'
            mail.value = ''
            valid = false;
            break;
        }
    }
    if (valid != false) {
        checkTwo();
    }
}

// // если дубликатов не найдено проверяет вводимый текст
function checkTwo() {
    let isLetter = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);

    error.textContent = ''
    if (email == "") {
        error.textContent = 'Пустое поле'
        mail.value = ''
    }

    else if (email.length == 1) {
        error.textContent = 'Не достаточная длина почтового адреса '
        mail.value = ''

    }
    else if (isLetter) {
        mail.value = ''
        wordsArray.push(email);
        alert('Спасибо за участие')
    }
    else {
        error.textContent = 'Ошибка ввода данных'
        mail.value = ''
    }
}
