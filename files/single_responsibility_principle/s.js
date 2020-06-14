// Single responcibility principle
// Принцип единственной обязанности

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }
}



class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
            <div class = "news">
                <h2>${this.news.title}</h2>
                <p>${this.news.text}</p>
            </div>`;
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2);
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>`;
    }
}



class AppendHTML {
    constructor(parent) {
        this.parent = parent;
    }

    beforeBegin(arrNews) {
        for (let i in arrNews) {
            let { title, text } = arrNews[i];
            let news = new News(title, text);
            let printer = new NewsPrinter(news);
            document.querySelector(this.parent)
                .insertAdjacentHTML('beforeBegin', printer.html());
        }
    }
    afterBegin(arrNews) {
        for (let i in arrNews) {
            let { title, text } = arrNews[i];
            let news = new News(title, text);
            let printer = new NewsPrinter(news);
            document.querySelector(this.parent)
                .insertAdjacentHTML('afterBegin', printer.html());
        }
    }
    beforeEnd(arrNews) {
        for (let i in arrNews) {
            let { title, text } = arrNews[i];
            let news = new News(title, text);
            let printer = new NewsPrinter(news);
            document.querySelector(this.parent)
                .insertAdjacentHTML('beforeEnd', printer.html());
        }
    }
    afterEnd(arrNews) {
        for (let i in arrNews) {
            let { title, text } = arrNews[i];
            let news = new News(title, text);
            let printer = new NewsPrinter(news);
            document.querySelector(this.parent)
                .insertAdjacentHTML('afterEnd', printer.html());
        }
    }

}




let arrNews = [{
        title: 'Коронавирус',
        text: 'В дагестане погибло 2267 человек'
    },
    {
        title: 'Standoff 2 обновление 0.13.0',
        text: 'Добавлены новые персонажи, перчатки и другая одежда для героев'
    },
    {
        title: 'Просто новый тайтл.',
        text: 'И какой-то текст чтобы заполнить место. Понедельник.'
    },
    {
        title: 'Неудержимый «Гром».',
        text: '«Гром». Такое имя не даётся за красивую броню. Его нужно заслужить, а затем доказывать битву за битвой, что «Гром» — не пустой звук. Какой же танк достоин этого грозного названия? Тот, что сражается с невиданной яростью, устрашает противника и безжалостно расправляется с вражеской обороной.'
    },
];