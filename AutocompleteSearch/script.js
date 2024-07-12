let availableKeywords = [
    'HTML',
    'CSS',
    'Javascript',
    'React',
    'Mongodb',
    'Express',
    'Nodejs',
    'Salesforce',
    'Tailwind',
    'Gsap',
    'Aws',
    'Where to learn online',
    'when to learn',
    'why to learn'
]

const searchResult = document.getElementById('search-result')
const searchInput = document.getElementById('search-input')

searchInput.onkeyup = function(){
    let result = [];
    let input = searchInput.value;
    if(input.length){
        result = availableKeywords.filter((keywords)=>{
            return keywords.toLowerCase().includes(input.toLowerCase())
        });
    
    }
    display(result)
}

function display(result){
    const content = result.map((list)=>{
        return `<li onclick =selectInput(this)> ${list} </li>`;
    })
    searchResult.innerHTML = `<ul> ${content} </ul>`
}

function selectInput(list){
    searchInput.value = list.innerHTML;
    searchResult.innerHTML = ''
}

