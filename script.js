const cardsContainer = document.getElementById('cards-container');
const Input = document.getElementById("input");
const NewsCardTemplate = document.getElementById('News-Card');

const url = 'https://newsapi.org/v2/everything?q=';
const apiKey = '8aeed9e210e1426fa21bf17f4c230b54';

const FetchData = async (query) => {

    try {
        const Data = await fetch(`${url}${query}&apiKey=${apiKey}`);
        const response = await Data.json();
        console.log(response);
        return response;
    } catch (er) {
        console.log(er);
    }
}

const SearchQuery = () => {

    document.getElementById('btn').addEventListener('click', async (e) => {
        e.preventDefault();
        if (!Input.value) return;
        cardsContainer.innerHTML = '';
        const response = await FetchData(Input.value.trim());
        if (response.articles[0] == null) {
            cardsContainer.textContent = 'No Result';
        }
        else {
            FillDataInCard(response);
        }
    });
}

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

const FillDataInCard = (response) => {

    document.getElementById('results').textContent = `Total Results: ${response.totalResults}`

    response.articles.forEach(article => {
        if (!article.urlToImage && !article.url) return;

        const NewsCardTemplate = document.getElementById('news-card');
        const Clone = NewsCardTemplate.content.cloneNode(true);

        const newsimg = Clone.querySelector('#newsimg');
        const NewsDesc = Clone.querySelector('#news-desc');
        const newslink = Clone.querySelector('#newslink');
        const publishedat = Clone.querySelector('#publishedat');

        newsimg.src = article.urlToImage;
        NewsDesc.textContent = truncateText(article.description, 100);
        newslink.href = article.url;
        newslink.textContent = "Read more";
        publishedat.textContent = `PublishedAt: ${new Date(article.publishedAt).toLocaleDateString()}`;

        cardsContainer.appendChild(Clone);
    })
}

const ReloadPage = () => {
    
    document.getElementById('reload').addEventListener('click', () => {
        window.location.reload();
        Input.value = '';
    });
    
    window.addEventListener('load', function () {
        window.scrollTo(0, 0);
    });
}

window.addEventListener('DOMContentLoaded', async () => {
    const data = await FetchData('usa');
    FillDataInCard(data);
})

SearchQuery();
ReloadPage();



