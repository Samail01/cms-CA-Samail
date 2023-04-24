let username ="ck_04f746c4aaacfaebea7986d0ee03d930311a53d7"
let password ="cs_5a49d84ca35d17c7bdf4b47e9f05c04e3c18f28b"

const queryString = document.location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")

const usedUrl ="https://sampug.no/cms/wp-json/wc/v3/products/" + id;
fetch(usedUrl, {

     method: 'GET',
    headers: new Headers({
    'Authorization': 'Basic ' + btoa(username + ":" + password)
    })
    
    })
    
    .then(response => response.json())
    .then(data => {
      
        specificJackets(data)
     })
    
    .catch(error => console.error(error));

    function specificJackets(data) {
    const specificJacketContainer = document.querySelector(".specific-jacket-container");
    const {name, price, regular_price, description, images} = data;
    const imagePath = images[0].src;

    specificJacketContainer.innerHTML += 
    `
    <div class="jacket-details-card">
    <div class="jacket-details-top-card">
      <img src="${imagePath}" alt="${name}" />
    </div>
    <div class="jacket-details-bottom">
      <h1>${name}</h1>
      <p>Price: ${price}</p>
      <p>Regular Price: ${regular_price}</p>
      <p>Description: ${description}</p>
      <a href="./orderconf.html" class="button">Buy now</a>
    </div>
  </div>
    
    
    
    `

}

    


