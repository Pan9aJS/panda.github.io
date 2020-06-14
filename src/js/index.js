(() => {
    let hideArrow = () => {
        document.getElementById('scroll-alert').remove();
        setTimeout(() => {
            window.removeEventListener('scroll', hideArrow, false);
        }, 1000);
    };

    window.addEventListener('scroll', hideArrow);

    document.getElementById('scroll-alert')
        .onclick = () => {
            document.querySelector('.projects')
                .scrollIntoView({
                    block: "center",
                    behavior: "smooth"
                });
        };
})();