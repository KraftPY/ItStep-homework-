// ------------------------------------------ Task 1 ----------------------------------------------
function task_1() {
    const circle = new Circle(5);

    console.log(circle.radius);
    circle.radius = 10;
    console.log(circle.diameter);
    console.log(circle.square());
    console.log(circle.len());
}

// ------------------------------------------ Task 2 ----------------------------------------------

function task_2() {
    // Создаем главный Div c id = wrapper
    const wrapperDiv = new HtmlElement('div', false);
    wrapperDiv.addAttributes(`id='wrapper'`);
    wrapperDiv.addStyles('display: flex;');
    
    // Создаем вложенный childDiv, со своими вложенными тегами
    const childDiv = new HtmlElement('div', false);
    childDiv.addStyles('width: 300px;', 'margin: 30px;');

        // Создаем вложенные теги
    const tag_h3 = new HtmlElement('h3', false, 'Что такое CSS?');
    const tag_img = new HtmlElement('img', true);
    const tag_p = new HtmlElement('p', false, 'CSS - формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.');
    const tag_a = new HtmlElement('a', false, 'Более подробно...');
        // Устанавливаем им атрибуты и стили
    tag_img.addAttributes(`src="img/css3.jpg"`,`alt="CSS3"`);
    tag_img.addStyles('width: 100%;');
    tag_p.addStyles('text-align: justify;');
    tag_a.addAttributes(`href="https://ru.wikipedia.org/wiki/CSS"`,`target="_blank"`);
        // Вставляем тег <a> в тег <p>
        tag_p.addToStartElements(tag_a.getHtml());

    // Вставляем все теги в childDiv
    childDiv.addToEndElements(tag_img.getHtml(), tag_p.getHtml());
    childDiv.addToStartElements(tag_h3.getHtml());

    // Вставляем два childDiv в главный Div
    wrapperDiv.addToEndElements(childDiv.getHtml(), childDiv.getHtml());

    // Добавим ссылку возврата на главную страницу
    const linkBack = new HtmlElement('a', true, 'Вернуться на главную страницу!');
    linkBack.addAttributes(`href="index.html"`);
    linkBack.addStyles('font-size: 22px;','color: maroon;', 'font-weight: bold;', 'position: absolute;');
    wrapperDiv.addToEndElements(linkBack.getHtml());


    document.write(wrapperDiv.getHtml());
}

// ------------------------------------------ Task 3 ----------------------------------------------
function task_3() {
    const cssClass = new CssClass('selector');

    cssClass.addStyles('color: red;','width: 100px;','height: 100px;');

    cssClass.deleteStyles('width');

    console.log(cssClass.getCss());
}

// ------------------------------------------ Task 4 ----------------------------------------------
function task_4() {
    const wrapperDiv = new HtmlElement('div', false);
    wrapperDiv.addAttributes(`id='wrapper'`,`class='wrap'`);
    
    // Создаем вложенный childDiv, со своими вложенными тегами
    const childDiv = new HtmlElement('div', false);
    childDiv.addAttributes(`class='block'`);

        // Создаем вложенные теги
    const tag_h3 = new HtmlElement('h3', false, 'Что такое CSS?');
    const tag_img = new HtmlElement('img', true);
    const tag_p = new HtmlElement('p', false, 'CSS - формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.');
    const tag_a = new HtmlElement('a', false, 'Более подробно...');
        // Устанавливаем им атрибуты и стили
    tag_img.addAttributes(`src="img/css3.jpg"`,`alt="CSS3"`, `class="img"`);
    tag_p.addAttributes(`class='text'`);
    tag_a.addAttributes(`href="https://ru.wikipedia.org/wiki/CSS"`,`target="_blank"`);
        // Вставляем тег <a> в тег <p>
        tag_p.addToStartElements(tag_a.getHtml());

    // Вставляем все теги в childDiv
    childDiv.addToEndElements(tag_img.getHtml(), tag_p.getHtml());
    childDiv.addToStartElements(tag_h3.getHtml());

    // Вставляем два childDiv в главный Div
    wrapperDiv.addToEndElements(childDiv.getHtml(), childDiv.getHtml());

    // Добавим ссылку возврата на главную страницу
    const linkBack = new HtmlElement('a', true, 'Вернуться на главную страницу!');
    linkBack.addAttributes(`href="index.html"`);
    linkBack.addStyles('font-size: 22px;','color: maroon;', 'font-weight: bold;', 'position: absolute;');
    wrapperDiv.addToEndElements(linkBack.getHtml());

    // Добавляем стили с именами селекторов
    let colectionStyle = []; 

    const selWrap = new CssClass('wrap');
    selWrap.addStyles('display: flex;');
    colectionStyle.push(selWrap.getCss());

    const selBlock = new CssClass('block');
    selBlock.addStyles('width: 300px;','margin: 30px;');
    colectionStyle.push(selBlock.getCss());

    const selImg = new CssClass('img');
    selImg.addStyles('width: 100%;');
    colectionStyle.push(selImg.getCss());

    const selText = new CssClass('text');
    selText.addStyles('text-align: justify;');
    colectionStyle.push(selText.getCss());

    const htmlBlock = new HtmlBlock(colectionStyle, wrapperDiv.getHtml());

    document.write(htmlBlock.getCode());
}