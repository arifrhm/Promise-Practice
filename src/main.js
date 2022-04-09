//======================== FETCH ======================//
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function() {

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('https://newsapi.org/v2/everything?q=Apple&from=2022-03-24&sortBy=popularity&apiKey=d958c95dc14d45e0bdfbc42bd8069923' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const berita = response.Search;
//             let cards = '';
//             berita.forEach(b => cards += showCards(b));
//             const beritaContainer = document.querySelector('.berita-container');
//             beritaContainer.innerHTML = cards;
//         });
// });



// const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e43a771c30c4b81aa1d0c1f5aaba310';
// fetch(url) //404 error
//      .then( res => {
//           if (res.ok) {
//                 return res.json( );
//           } else {
//                 return Promise.reject(res.status); 
//            }
//       })
//       .then(res => {
//                 const berita = res.Search;
//                 let cards = '';
//                 berita.forEach(b => cards += showCards(b));
//                 const beritaContainer = document.querySelector('.berita-container');
//                 beritaContainer.innerHTML = cards;
//             });
//     //   .catch(err => console.log('Error with message: ${err}') ); 





// function showCards(b) {
//     return `<div class="col-md-4 my-5">
//                 <div class="card">
//                     <img src="${b.urlToImage}" class="card-img-top">
//                     <div class="card-body">
//                     <h5 class="card-title">${b.tittle}</h5>
//                     <h6 class="card-subtitle mb-2 text-muted">${b.author}</h6>
//                     <p class="card-text">${b.content}</p>
//                     <a href="#" class="btn btn-primary">Read More...</a>
//                     </div>
//                 </div>
//             </div>`;
// }






// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function() {

// 	const inputKeyword = document.querySelector('.input-keyword');
// 	fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9e43a771c30c4b81aa1d0c1f5aaba310' + inputKeyword.value)
// 		.then(response => console.log(response.json()))
// 		.then(data => {
// 			document.getElementById('data').innerHTML = render(response)
// 		})
// 		.catch(err => console.error(err));
// });


fetch('https://newsapi.org/v2/everything?q=tesla&\
from=2022-03-08&sortBy=publishedAt&apiKey=f14a4c4312d0401eb354cd0d3739f8f1'
).then(console.log("From fetch :"))
		.then(response => console.log(response.json()));


axios.get('https://newsapi.org/v2/everything?q=tesla&\
from=2022-03-08&sortBy=publishedAt&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
.then(function (response) {
	// handle success
	console.log("from Axios.get :");
	console.log(response.data);
})