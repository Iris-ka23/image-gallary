const accessKey = '1-b5mPaA7tNUGgAB7phVVFcKICns3ZYT3Iln4MWqyyo';

const searchForm = document.getElementById ('search_form');
const searchBox = document.getElementById ('search_box');
const searchResult = document.getElementById ('search_result');
const showBtn = document.getElementById ('more_btn');
let key = "";
let page = 1;


async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

const response = await fetch (url);
const data = await response.json();
if (page === 1) {
    searchResult.innerHTML = '';
}

const results = data.results;
results.map((result)=> {
    const image = document.createElement('img');
    image.src = result.urls.small;
    const imageLink = document. createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = '_blank';
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
})
showBtn.style.display = 'block';
}


searchForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    page = 1;
    searchImage();
})
showBtn.addEventListener('click', ()=>{
    page++;
    searchImage()
})