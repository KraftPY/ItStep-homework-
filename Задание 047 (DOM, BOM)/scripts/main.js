const   dom = {
            body : document.querySelector('body'),
            line : document.querySelector('.line'),
            TrackBar : document.querySelector('.blc'),
            pic : document.querySelector('.pic'),
            arrowLeft : document.querySelector('.left'),
            arrowRight : document.querySelector('.right'),
            title : document.querySelectorAll('.title'),
            text : document.querySelectorAll('.text'),
            newsList : document.querySelector('.task4'),
            inpMonth : document.querySelector('#inp_month'),
            inpYear : document.querySelector('#inp_year'),
            btnGen : document.querySelector('.btnGen'),
            calendar : document.querySelector('.output_date')
        },
        arrPic = ["img/HTML.png", "img/CSS.png", "img/JS.png", "img/PHP.png", "img/SQL.png"],
        arrNews = [ `<h3>What is HTML?</h3><p>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
                            Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                            HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <img /> and <input /> directly introduce content into the page. Other tags such as <p> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags, but use them to interpret the content of the page.
                            HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.</p>`,
                    `<hr><h3>What is CSS?</h3><p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
                            CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.
                            Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.
                            The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.
                            The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.</p>`,
                    `<hr><h3>What is JavaScript?</h3><p>JavaScript (/ˈdʒɑːvəˌskrɪpt/), often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
                            Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it.
                            As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities. It relies upon the host environment in which it is embedded to provide these features.
                            Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets.
                            The terms Vanilla JavaScript and Vanilla JS refer to JavaScript not extended by any frameworks or additional libraries. Scripts written in Vanilla JS are plain JavaScript code.
                            Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design. JavaScript was influenced by programming languages such as Self and Scheme. The JSON serialization format, used to store data structures in files or transmit them across networks, is based on JavaScript.</p>`,
                    `<hr><h3>What is PHP?</h3><p>PHP: Hypertext Preprocessor (or simply PHP) is a general-purpose programming language originally designed for web development. It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.
                            PHP code may be executed with a command line interface (CLI), embedded into HTML code, or used in combination with various web template systems, web content management systems, and web frameworks. PHP code is usually processed by a PHP interpreter implemented as a module in a web server or as a Common Gateway Interface (CGI) executable. The web server outputs the results of the interpreted and executed PHP code, which may be any type of data, such as generated HTML code or binary image data. PHP can be used for many programming tasks outside of the web context, such as standalone graphical applications and robotic drone control.
                            The standard PHP interpreter, powered by the Zend Engine, is free software released under the PHP License. PHP has been widely ported and can be deployed on most web servers on almost every operating system and platform, free of charge.
                            The PHP language evolved without a written formal specification or standard until 2014, with the original implementation acting as the de facto standard which other implementations aimed to follow. Since 2014, work has gone on to create a formal PHP specification.
                            As of September 2019, over 60% of sites on the web using PHP are still on discontinued/"EOLed" version 5.6 or older; versions prior to 7.1 are no longer officially supported by The PHP Development Team, but security support is provided by third parties, such as Debian.</p>`,
                    `<hr><h3>What is SQL?</h3><p>SQL (/ˌɛsˌkjuːˈɛl/ (About this soundlisten) S-Q-L, /ˈsiːkwəl/ "sequel"; Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS). It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables.
                            SQL offers two main advantages over older read–write APIs such as ISAM or VSAM. Firstly, it introduced the concept of accessing many records with one single command. Secondly, it eliminates the need to specify how to reach a record, e.g. with or without an index.
                            Originally based upon relational algebra and tuple relational calculus, SQL consists of many types of statements, which may be informally classed as sublanguages, commonly: a data query language (DQL), a data definition language (DDL), a data control language (DCL), and a data manipulation language (DML). The scope of SQL includes data query, data manipulation (insert, update and delete), data definition (schema creation and modification), and data access control. Although SQL is essentially a declarative language (4GL), it includes also procedural elements.
                            SQL was one of the first commercial languages to utilize Edgar F. Codd’s relational model. The model was described in his influential 1970 paper, "A Relational Model of Data for Large Shared Data Banks". Despite not entirely adhering to the relational model as described by Codd, it became the most widely used database language.
                            SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International Organization for Standardization (ISO) in 1987. Since then, the standard has been revised to include a larger set of features. Despite the existence of such standards, most SQL code is not completely portable among different database systems without adjustments.</p>`];

let     mDown = false,
        newsCount = 0;

// Task 1
dom.body.addEventListener('mousedown', (ev)=>{
    if (ev.target == dom.TrackBar) {
        if (ev.clientX < 30) {
            dom.TrackBar.style.left = 0 + 'px';
        } else if (ev.clientX > 510){
            dom.TrackBar.style.left = 480 + 'px';
        } else{
            dom.TrackBar.style.left = ev.clientX - 30 + 'px';
        }
        mDown = true;
    }
})

dom.body.addEventListener('mouseup', ()=> mDown = false);

dom.body.addEventListener('mousemove', (ev)=>{
    if (mDown) {
        if (ev.clientX < 30) {
            dom.TrackBar.style.left = 0 + 'px';
        } else if (ev.clientX > 510) {
            dom.TrackBar.style.left = 480 + 'px';
        } else {
            dom.TrackBar.style.left = ev.clientX - 30 + 'px';
        }
    }
});

dom.line.addEventListener('click', (ev)=>{
    if (ev.clientX < 40) {
        dom.TrackBar.style.left = 0 + 'px';
    } else if (ev.clientX > 510) {
        dom.TrackBar.style.left = 480 + 'px';
    } else {
        dom.TrackBar.style.left = ev.clientX - 30 + 'px';
    }
});

// Task 2
dom.arrowLeft.addEventListener('click', ()=>{
    let num = Number(dom.pic.getAttribute('data-num'));

    if (num > 0) {
        dom.pic.style.backgroundImage = `url(${arrPic[num - 1]})`;
        dom.pic.setAttribute('data-num', num - 1);
        opacityArrows(num - 1);
    }
});

dom.arrowRight.addEventListener('click', ()=>{
    let num = Number(dom.pic.getAttribute('data-num'));

    if (num < 4) {
        dom.pic.style.backgroundImage = `url(${arrPic[num + 1]})`;
        dom.pic.setAttribute('data-num', num + 1);
        opacityArrows(num + 1);
    }
});

function opacityArrows(num) {
    if (num == 0) {
        dom.arrowLeft.style.opacity = '0.3';
        dom.arrowRight.style.opacity = '1';
    } else if (num == 4) {
        dom.arrowRight.style.opacity = '0.3';
        dom.arrowLeft.style.opacity = '1';
    } else if (num < 4 & num > 0) {
        dom.arrowLeft.style.opacity = '1';
        dom.arrowRight.style.opacity = '1';
    }
}

// task 3
dom.title.forEach((el)=>{
    el.addEventListener('click', (ev)=>{
        let textBlock = ev.target.nextElementSibling;
        dom.text.forEach((el) => (ev.target.nextElementSibling != el) ? el.classList.add('none') : false);
        ev.target.nextElementSibling.classList.toggle('none');
    });
});

// task 4
dom.newsList.addEventListener('scroll', ()=>{
    if (dom.newsList.scrollTop == dom.newsList.scrollHeight - dom.newsList.clientHeight & newsCount < 4) {
        dom.newsList.innerHTML += arrNews[newsCount + 1];
        newsCount++;
    }
})

// task 5
dom.btnGen.addEventListener('click', ()=>{
    if (dom.inpYear.value !== '' & dom.inpMonth.value !== '' 
        & dom.inpYear.value >= 1900 & dom.inpYear.value <= 2100
        & dom.inpMonth.value >= 1 & dom.inpMonth.value <= 12) {
        genCalendar(dom.inpYear.value, dom.inpMonth.value);
    }else{
        dom.calendar.style.display = 'none';
    }
})

function genCalendar(year, month) {
    const   firstDateMonth = new Date(year, month - 1),
            lastDateMonth = new Date(year, month, 0);
    let     day = (firstDateMonth.getDay() == 0) ? 6 : firstDateMonth.getDay() - 1,
            dateNum = firstDateMonth.getDate(),
            start = false;

    dom.calendar.style.display = 'table';
    clearCalendar();
    [...dom.calendar.rows].forEach((tr, i)=>{
        [...tr.cells].map((td, j)=>{
            (i == 1 & j == day) ? start = true : false;
            if (i > 0 & start) {
                if (dateNum <= lastDateMonth.getDate()) {
                    td.innerText = dateNum++;    
                }else if (j == 0){
                    tr.style.display = 'none';
                }
            }
        });
    });
}

function clearCalendar() {
    [...dom.calendar.rows].forEach((tr, i)=>{
        [...tr.cells].map((td, j)=>{
            if (i > 0) {
                td.innerText = '';
                tr.style.display = '';
            }
        });
    });
}