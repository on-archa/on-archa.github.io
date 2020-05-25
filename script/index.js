

function render(){

    const store = localStorageUtil.getGoods();
    header.render(store.length);
    catalog.render();


    //search input 
    let searchInp = document.querySelector('.searchInp');
    searchInp.addEventListener('keyup', () =>{
     catalog.searchCatalog(searchInp.value.toLowerCase());
         })

}

DATA = [];



fetch('https://demo5030744.mockable.io/data')
    .then(res => res.json())
    .then(res => {
        DATA = res;
        render();
        })
    .catch(error =>{
            console.log(error);
    })