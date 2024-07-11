const accessKey = "ECFH-sqWWaO5er0TAF8MYnYrHNle4K4SsrSzOvcepeY"

const form = document.getElementById('search-form')
const searchBox = document.getElementById('search-box')
const button =  document.getElementById('btn')
const searchResult=  document.getElementById('search-result')
const showmore =  document.getElementById('show-more')

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    

    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)

    const results = data.results;


    if(page === 1){
        searchResult.innerHTML = "";
    }
    results.map((results)=>{
        const image = document.createElement('img')
        image.src = results.urls.small;
        const imageLink = document.createElement('a')
        imageLink.href = results.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink)

    })
    showmore.style.display = "block"


}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages()
    searchBox.value = "";
})


showmore.addEventListener('click',()=>{
    page++;
    searchImages();
})