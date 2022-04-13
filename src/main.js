//Load Home Page with Top Headline News

axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
         .then(res => {
             console.log("res.data :",res.data);
  document.getElementById('data').innerHTML = render(res.data.articles);
});

//When user search with keyword and Enter key pressed
var searchInput = document.querySelector('input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      axios.get('https://newsapi.org/v2/everything?q='+searchInput.value.toLowerCase()+'&sortBy=publishedAt&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
          .then(res => {
              document.getElementById('data').innerHTML = render(res.data.articles); // Do something
})}});

    
//When user search keyword and click button
document.getElementById("button-search").addEventListener("click", function() {
  axios.get('https://newsapi.org/v2/everything?q='+searchInput.value.toLowerCase()+'&sortBy=publishedAt&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
        .then(res => {
            document.getElementById('data').innerHTML = render(res.data.articles);
})});

//Looping for cards data from JSON response
function render(result) {
  let cards = '';
  result.slice(0,9).forEach(data => {
             cards+= `<div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src=${data.urlToImage}>
                <div class="card-body">
                  <p class="card-text"><b>${data.title}</b></p>
                  <p class="card-text">${data.content}...
                  <a href=${data.url}>Read More</a></p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${data.author}</small>
                    <small class="text-muted">${data.publishedAt}</small>
                  </div>
                </div>
              </div>
            </div>`;
  })
  return cards;
} 