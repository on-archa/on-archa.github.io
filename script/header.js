
class Header{

    openBasket(){
        basket.render();
    }

    render(elem){
        const html =`
        <a href="/index.html"><img src="/icons/logo.png"></a>
        <input placeholder="Поиск..." class="searchInp" onkeyup="catalog.searchCatalog()">
        <div class="basket" onclick="header.openBasket()">
        
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>          
            <span>${elem}</span>
        </div>

        `
        ROOT_HEADER.innerHTML = html;
    }
}



const header = new Header();


