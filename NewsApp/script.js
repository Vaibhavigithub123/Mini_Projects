const API_KEY = "ff116926d7de459a8d89bf87cc0e61be";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',()=> fetchNews("Technology"));


async function fetchNews(query){
    const result= await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await result.json();
    // console.log(data)
    bindData(data.articles);
}

function bindData(articles){

    //for cloning whole card
    const cardsContainer = document.getElementById('cardscontainer');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = "";
    articles.forEach((article) => {
        if(!article.urlToImage) return;

        const cardClone = newsCardTemplate.content.cloneNode(true); //clone all remaining div's from template
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article){
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title')
    const newSource = cardClone.querySelector('#news-source')
    const newsDesc = cardClone.querySelector('#news-desc')

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = `${article.title.slice(0,60)}...`;
    newsDesc.innerHTML = `${article.description.slice(0,150)}...`;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})
    newSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url, "_blank");
    })

}

let curSelectedNav = null;
function onItemClick(id){
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchText = document.getElementById('search-text')
const searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', ()=>{
    const query = searchText.value; 
    if(!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
    setTimeout(()=>{
        searchText.value = " "
    },1000)
})