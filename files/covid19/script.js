window.onload = () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };


    class News {
        constructor(data = {}) {
            let { confirmed, recovered, deaths } = data;
            this.confirmed = confirmed;
            this.recovered = recovered;
            this.deaths = deaths;
        }
    }

    class PrintNews {
        constructor(data) {
            this.data = data;
        }

        html() {
            return `<div class = "coronavirusNews">
                <p class="confirmed">Заражено:${this.data.confirmed}</p>
                <p class="recovered">Вылечено:${this.data.recovered}</p>
                <p class="deaths">Погибло:${this.data.deaths}</p>
            </div>`;
        }
    }




    fetch('https://covid19.mathdro.id/api', requestOptions)
        .then(response => response.json())
        .then(result => {
            let obj = {};
            for (let i in result) {
                if (result[i].value) obj[i] = result[i].value;
            }

            let news = new News(obj);
            let print = new PrintNews(news);
            document.querySelector('#root')
                .insertAdjacentHTML('afterbegin', print.html());
        })
        .then(err => err ? console.log(err) : '');
};