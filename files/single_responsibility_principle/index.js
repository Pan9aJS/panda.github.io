window.onload = function() {
    let append = new AppendHTML('#news');
    append.beforeEnd(arrNews);

    let news1 = new News('Тайтл', 'текст1 текст2, текст3');
    news1.update('Новый текст. ');

    let print = new NewsPrinter(news1);
    console.log(print.html());
};