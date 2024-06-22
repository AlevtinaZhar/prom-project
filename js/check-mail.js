let input = document.getElementById('text-input');
input.addEventListener('keypress', checkOne);
let wordsArray = [];
let words;
error.classList.add('error')

function buttonStart() {
    document.getElementById("buttonStart").style.display = "none";
    document.getElementById("input-form").style.display = "block";
    document.getElementById("buttonNewStart").style.display = "block";
}

function buttonNewStart(){
    wordsArray.splice(0, wordsArray.length);
}

// проверяет массив на дубликаты
function checkOne(event) {
    words = document.getElementById('text-input').value;
    let valid;
    let key;
    if (event.key == 'Enter') {
        for (key of wordsArray) {
            if (key == words) {
                error.textContent = 'А такое слово уже есть'
                input.value = ''
                valid = false;
                break;
            }
        }
        if (valid != false) {
            checkTwo();
        }
    }
}

// если дубликатов не найдено проверяет вводимый текст
function checkTwo() {
    let isLetter = /^[A-zА-Яа-я\-]+$/.test(words);
    let isNumber = /^\d+$/.test(words);
    error.textContent = ''
    if (words == "") {
        error.textContent = 'Данные не заполнены'
        input.value = ''
    }
    else if (isNumber) {
        error.textContent = 'Слово должно состоять из букв ;)'
        input.value = ''

    }
    else if (words.length == 1) {
        error.textContent = 'Вы уверены, что слово состоит из одной буквы? :)'
        input.value = ''

    }
    else if (isLetter) {
        input.value = ''
        wordsArray.push(words);
        console.log(wordsArray)
        if (wordsArray.length != 1) {
            finallyCheck();
        }
    }
    else {
        error.textContent = 'Вы написали что-то странное (скорее всего в слове есть цифры)'
        input.value = ''
    }
}

// поселдняя проверка на первую и последнюю букву
// если слово не подходит, удаляет его из массива
function finallyCheck() {
    let lastWord = wordsArray.at(-2);
    let lastLetter = lastWord.toString().slice(-1);
    let firstLetter = words.charAt(0);


    if (firstLetter != lastLetter) {
        wordsArray.pop();
        input.value = ''
        error.textContent = 'Ваше слово должно начинаться на ' + lastLetter;
    }

}
