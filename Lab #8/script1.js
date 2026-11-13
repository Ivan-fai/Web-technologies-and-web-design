let activeTab = null;

function info_for_tab (tab) {
    let mainBox = document.getElementById(`content`);

    if (activeTab !== null) {
        document.getElementById('col' + activeTab).style.backgroundColor = '#e0e0e0';
    }
    activeTab = tab;


    switch(tab){
    case 1:
        document.getElementById(`col1`).style.backgroundColor = '#78c73c';
        document.getElementById(`content`).style.backgroundColor = '#78c73c';
        mainBox.innerHTML = "<p>DOM - це об'єктна модель документа, яка представляє HTML-сторінку"
                + "у вигляді дерева вузлів. Кожен тег, атрибут або фрагмент тексту є "
                + "окремим об'єктом, до якого можна звернутися з JavaScript</p>";
        break;
    case 2:
        document.getElementById(`col2`).style.backgroundColor = '#d1b768';
        document.getElementById(`content`).style.backgroundColor = '#d1b768';
        mainBox.innerHTML = "<p>Метод <code>document.getElementById('id')</code>"
               +"дозволяє миттєво знайти потрібний HTML-тег на сторінці"
               +"за його унікальним ідентифікатором, щоб далі змінювати його вміст або вигляд</p>"
        break;
    case 3:
        document.getElementById(`col3`).style.backgroundColor = '#ef1f22';
        document.getElementById(`content`).style.backgroundColor = '#ef1f22';
        mainBox.innerHTML = "<p>Властивість <b>innerHTML</b> дає змогу повністю"
                + "перезаписати внутрішню розмітку знайденого елемента - вставити"
                + "новий текст, заголовки, списки або зображення без перезавантаження сторінки</p>";
        break;
    case 4:
        document.getElementById(`col4`).style.backgroundColor = '#ddd23d';
        document.getElementById(`content`).style.backgroundColor = '#ddd23d';
        mainBox.innerHTML = "<p>Через властивість <code>element.style</code>" 
                +"можна керувати зовнішнім виглядом елементів прямо з коду:"
                +"змінювати колір фону, розміри шрифту або рамки</p>";
        break;
    case 5:
        document.getElementById(`col5`).style.backgroundColor = '#5ea8e0';
        document.getElementById(`content`).style.backgroundColor = '#5ea8e0';
        mainBox.innerHTML = "<p>Подія 'onclick' реагує на натискання користувача"
                +"мишкою по елементу та запускає вказану JavaScript-функцію,"
                +"роблячи вебсторінку інтерактивною</p>"
        break;
    }
}