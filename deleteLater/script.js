let username ="ck_04f746c4aaacfaebea7986d0ee03d930311a53d7"
let password ="cs_5a49d84ca35d17c7bdf4b47e9f05c04e3c18f28b"

const usedUrl ="https://sampug.no/cms/wp-json/wc/v3/products";


fetch(usedUrl, {

     method: 'GET',
    
     headers: new Headers({
    
     'Authorization': 'Basic ' + btoa(username + ":" + password)
    
     })
    
    })
    
    .then(response => response.json())
    
    .then(data =>
    
     {
    listData(data)
    
     })
    
    .catch(error => console.error(error));

    console.log(usedUrl);


function listData(jacket) {
  jacket.filter(jackets => {
  const {name, price, featured  } = jackets 

  
    
  })
}

