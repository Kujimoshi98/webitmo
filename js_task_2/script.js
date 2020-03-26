function createtable(x, y) { // функция создания таблицы
    let newtable = document.createElement("table")

    for (let i = 0; i < x; i++) {
        let newstroka = document.createElement("tr")//создание строчек
        for (let j = 0; j < y; j++) {
            let newstolbec = document.createElement("td")//создание столбцов
            newstroka.appendChild(newstolbec)//добавление столбцов к строчке

            let forma = document.createElement("form") // 3 задание; создаю форму для поля ввода и кнопки
            newstolbec.appendChild(forma) // добавление формы к столбцу

            let text = document.createElement("textarea") // создаю поле ввода
			text.rows = 5
			text.cols = 8
            forma.appendChild(text)//добавление текста к форме

            let soxran = document.createElement("input")  // создаю кнопку подтверждения
            soxran.type = "submit"
            soxran.value = "Сохранить"
            forma.appendChild(soxran)// добавление кнопки к форме

            forma.onsubmit = function (event) { // что происходит при отправке формы
                event.target.parentNode.innerText = event.target.elements[0].value//текст формы заменяется на текст в поле
                return false
            }

        }
        newtable.appendChild(newstroka) //добавление строки к таблице
    }

    document.body.appendChild(newtable)//добавление к таблицы к документу
}

function getRandomInt(max) { // генерация числа от 0 до макс
    return Math.floor(Math.random() * Math.floor(max));
}
function randomInteger(min, max) { // генерация случайного числа от мин до макс
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

let newform = document.createElement("form") // создаю новую форму
newform.classList.add("newform")//добавляем класс newform
document.body.appendChild(newform)//добаляем newform к документу

let newparagraph = document.createElement("p") // создаю параграф внутри формы
newform.appendChild(newparagraph)
newparagraph.innerText = "Введите количество строк и столбцов"

let newinput1 = document.createElement("input") // создаю поля ввода 1
newform.appendChild(newinput1)
newinput1.type = "number"

let newinput2 = document.createElement("input") // создаю поля ввода 2
newform.appendChild(newinput2)
newinput2.type = "number"

let newbutton = document.createElement("input") //создаю кнопку
newform.appendChild(newbutton)
newbutton.type = "submit"
newbutton.value = "Сохранить"
newform.onsubmit = function (event) { // функция события
    createtable(event.target.elements[0].value, event.target.elements[1].value) // функция создания таблицы
    newform.classList.add("no_show") //убираем форму
    newform.reset()
    functions.classList.remove("no_show") // убираем невидимость с 5ти блоков
    return false // без обновления
}

let functions = document.createElement("div")//создания блока с функциями
functions.classList.add("functions")//присваивание класса functions
functions.classList.add("no_show")  //скрытый изначально
document.body.appendChild(functions)

let h2 = document.createElement("h2") // создание заголовока
document.body.appendChild(h2)

let div1 = document.createElement("div") // создаю первый блок функции
functions.appendChild(div1)

let paragraph1 = document.createElement("p")// название первого блока
paragraph1.innerHTML = "Изменить границы таблицы"
div1.appendChild(paragraph1)

let shir = document.createElement("input") // создаю поле ввода первого блока
shir.type = "text"
shir.oninput = function () {//при изменении поля
    shir.parentNode.querySelector("button").innerHTML = "Применить " + shir.value + " px и рамка " + shir.parentNode.querySelector("select").value
}//изменение названия кнопки
shir.maxLength = 3 //ограничение на введенное кол-во символов
div1.appendChild(shir)

let ramki = document.createElement("select") // создаю выпадающий список
ramki.onchange = function () {
    ramki.parentNode.querySelector("button").innerHTML = "Применить " + ramki.parentNode.querySelector("input").value + " px и рамка " + ramki.value
}//изменение названия кнопки
div1.appendChild(ramki)

let ramki_1 = document.createElement("option")//создание 1 варианта выпадающего списка
ramki_1.innerHTML = "dotted"//надпись
ramki.appendChild(ramki_1)

let ramki_2 = document.createElement("option")//создание 2 варианта выпадающего списка
ramki_2.innerHTML = "dashed"//надпись
ramki.appendChild(ramki_2)

let ramki_3 = document.createElement("option")//создание 3 варианта выпадающего списка
ramki_3.innerHTML = "solid"//надпись
ramki.appendChild(ramki_3)

let ramki_4 = document.createElement("option")//создание 4 варианта выпадающего списка
ramki_4.innerHTML = "double"//надпись
ramki.appendChild(ramki_4)

let newbutt = document.createElement("button") // создаю кнопку применения 1 блока
newbutt.innerHTML = "Применить"
newbutt.onclick = function () {
    document.querySelector("table").style.width = newbutt.parentNode.querySelector("input").value + "px"//изменение значения ширины границы таблицы
    document.querySelector("table").style.borderStyle = newbutt.parentNode.querySelector("select").value//изменение стиля границы таблицы
}
div1.appendChild(newbutt)

let div2 = document.createElement("div") // создаю второй блок функции
functions.appendChild(div2)

let paragraph2 = document.createElement("p")//добавление заголовка второго блока
paragraph2.innerHTML = "Добавление заголовка"
div2.appendChild(paragraph2)

let pole_vvoda = document.createElement("input")//поле ввода для второго блока
pole_vvoda.type = "text"
div2.appendChild(pole_vvoda)

let knopka = document.createElement("button")//добавление кнопки во второй блок
knopka.innerHTML = "Добавить"
knopka.onclick = function () {
    document.querySelector("h2").innerText = knopka.parentNode.querySelector("input").value //присваивает заголовку текстовое значение из поля
}
div2.appendChild(knopka)

let div3 = document.createElement("div") // создаю третий блок функции
functions.appendChild(div3)

let paragraph3 = document.createElement("p")//название 3ей функции
paragraph3.innerHTML = "Выберите номер строки для удаления"
div3.appendChild(paragraph3)

let pole_vvoda2 = document.createElement("input")//создаем поле ввода 3ей функции
pole_vvoda2.type = "number"
div3.appendChild(pole_vvoda2)

let knopka2 = document.createElement("button")//кнопка удаления строки
knopka2.innerHTML = "Удалить"
knopka2.onclick = function () {
if ((knopka2.parentNode.querySelector("input").value <= document.getElementsByTagName("tr").length) && (knopka2.parentNode.querySelector("input").value > 0)){ //если введенное значение меньше общего кол-ва строк и больше 0
        document.getElementsByTagName("tr")[knopka2.parentNode.querySelector("input").value - 1].remove()//убирает строчку
    } else {
        alert("Некорректные данные!")//вывод ошибки
    }
}
div3.appendChild(knopka2)

let div4 = document.createElement("div") // создаю 4ый блок функии
functions.appendChild(div4)

let paragraph4 = document.createElement("p")//создание названия 4 ого блока
paragraph4.innerHTML = "Случайное изменение"
div4.appendChild(paragraph4)

let knopka3 = document.createElement("button")//создаем кнопку
knopka3.innerHTML = "Magic"
knopka3.onclick = function () {
    let magic = document.getElementsByTagName("tr")[getRandomInt(document.getElementsByTagName("tr").length )].getElementsByTagName("td")[getRandomInt(document.getElementsByTagName("tr")[0].getElementsByTagName("td").length)]//выбор случайной ячейки
    magic.style.backgroundColor = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"//применяем случаный фон
    magic.style.color = "rgb(" + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ")"//применяем случайный цвет текста
    magic.style.fontSize = randomInteger(15, 25) + "pt"//применяем размер шрифта от 15 до 25
    if (getRandomInt(100) > 50) { //замена на форму для добавления нового содержимого
        magic.innerText = ""//убираем записанный текст
        let forma = document.createElement("form")
        magic.appendChild(forma)

        let text = document.createElement("textarea")
        text.rows = 5
        text.cols = 8
        forma.appendChild(text)

        let soxran = document.createElement("input") 
        soxran.type = "submit"
        soxran.value = "Сохранить"
        forma.appendChild(soxran)

        forma.onsubmit = function (event) { 
            event.target.parentNode.innerText = event.target.elements[0].value
            return false
        }

    }
}
div4.appendChild(knopka3)

let div5 = document.createElement("div") // создаю 5ый блок функции
functions.appendChild(div5)

let paragraph5 = document.createElement("p")//создание названия 5 ого блока
paragraph5.innerHTML = "Удаление таблицы"
div5.appendChild(paragraph5)

let knopka4 = document.createElement("button")//создание кнопки 5 ого блока
knopka4.innerHTML = "Удалить таблицу"
functions.appendChild(knopka4)
knopka4.onclick = function(){//при нажатии на кнопку

    newform.classList.remove("no_show")//видимость начальной формы
    document.querySelector("table").remove()//удаление таблицы
    let inputs = functions.getElementsByTagName("input")//сбор всех инпутов
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""//приравнивание инпутов к 0
};
    newbutt.innerText = "Применить"//вернуть текст на кнопке 1 ого блока к исходному виду
    h2.innerText = ""//обнуление заголовка
    functions.classList.add("no_show")//невидимость блока функций
};
div5.appendChild(knopka4)
