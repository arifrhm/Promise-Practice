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
// 	fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f14a4c4312d0401eb354cd0d3739f8f1' + inputKeyword.value)
// 		.then(response => console.log(response.json()))
// 		.then(data => {
// 			document.getElementById('data').innerHTML = render(response)
// 		})
// 		.catch(err => console.error(err));
// });


fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f14a4c4312d0401eb354cd0d3739f8f1'
).then(console.log("From fetch :"))
		.then(response => console.log(response.json()));


axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
.then(function (response) {
	// handle success
	console.log("from Axios.get :");
	console.log(response.data);
}).catch(err => console.error(err));

//Menampilkan semua 9 cards berita utama ketika halaman Home dimuat
// axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
//   document.getElementById('data').innerHTML = render(res.data);
// })

// function render(result) {
//   let table = '';
//   result.forEach(data => {
//     table += `<tr>
//                 <td>${data.id}</td>
//                 <td>${data.name}</td>
//                 <td>${data.username}</td>
//                 <td>${data.email}</td>
//                 <td>
//                   ${data.address.street},
//                   ${data.address.suite}, 
//                   ${data.address.city}
//                  </td>
//                 <td>${data.phone}</td>
//                 <td>${data.website}</td>
//                 <td>${data.company.name}</td>
//               </tr>`;
//   })
//   return table;
// } 
//Menampilkan 9 cards berita berdasarkan kata kunci yang diketik



//select data from search

// search = document.getElementsByClassName('form-control').onchange;
// console.log('search element:',search);
// // console.log('search[0] element:',search[0]);

// search.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         axios.get('https://newsapi.org/v2/everything?q='+tesla+'&from=\
//         2022-03-10&sortBy=publishedAt&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
//         .then(function (response) {
//             // handle success
//             console.log("from Axios.get :");
//             console.log(response.data);
//         }).catch(err => console.error(err));
//     }
// });
// 'https://newsapi.org/v2/everything?q='+'tesla'+'&from=2022-03-10&sortBy=publishedAt&apiKey=f14a4c4312d0401eb354cd0d3739f8f1'
https://newsapi.org/v2/top-headlines/sources?apiKey=
axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
         .then(res => {
             console.log("res.data :",res.data);
  document.getElementById('data').innerHTML = render(res.data.articles);
});

//When user search with keyword
var searchInput = document.querySelector('input');
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            console.log("this search have value");

        axios.get('https://newsapi.org/v2/everything?q='+searchInput.value.toLowerCase()+'&sortBy=publishedAt&apiKey=f14a4c4312d0401eb354cd0d3739f8f1')
            .then(res => {
                console.log("Res data from change event on search input :",res.data);
                document.getElementById('data').innerHTML = render(res.data.articles); // Do something
    })}});

    

function render(result) {
  let table = '';
  result.slice(0,9).forEach(data => {
    // table += `<tr>
    //             <td>${data.author}</td>
    //             <td>${data.title}</td>
    //             <td>${data.content}</td>
    //             <td>${data.description}</td>
    //             <td>${data.publishedAt}</td>
    //             <td>${data.url}</td>
    //             <td>${data.urlToImage}</td>
    //           </tr>`;
             table+= `<div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src=${data.urlToImage}>
                <div class="card-body">
                  <p class="card-text"><b>${data.title}</b></p>
                  <p class="card-text">${data.content.slice(0,145)}...
                  <a href=${data.url}>Read More</a></p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${data.author}</small>
                    <small class="text-muted">${data.publishedAt}</small>
                  </div>
                </div>
              </div>
            </div>`;
  })
  return table;
} 

// function message(msg) {
//   return `<tr>
//             <td class="text-center" colspan="8">${msg}</td>
//         </tr>`;
// }