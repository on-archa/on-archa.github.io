

class Catalog {

    constructor(){
        this.classNameActBtn = 'active-plus-btn';
    }

    render(){
        const goodsStore = localStorageUtil.getGoods();
        let popularItem = "";
            
        
        DATA.forEach(({type, name, id, price, weight, discription, sale, image, popular}) => {
            if(popular == true){

                let activeClass = ' ';

                if(goodsStore.indexOf(id) !== -1){
                    activeClass = this.classNameActBtn;
                }

                popularItem += `
                    <li id="${id}">
                        <div class="popular__card">
                            <img src="${image}" alt="img">
                            <div class="good--name">
                                <h4>${name}</h4>
                                <span>${weight}г</span>
                            </div>
                            <p>${discription}</p>
                            <div class="price--block">
                                <span>${price}c</span>
                                <div class="plus ${activeClass}" onclick="catalog.addGood(this, '${id}')">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </li>
                `
            }
        })
        const html =`
            <ul>
                ${popularItem}
            </ul>
        `
        ROOT_POPULAR.innerHTML = html;
    }

    addGood(elem, id){
        let { pushGoods, goods} = localStorageUtil.putGoods(id);
        
        if(pushGoods){
            elem.classList.add(this.classNameActBtn);
        }
        else{
            elem.classList.remove(this.classNameActBtn);
        }
        catalog.render();
        header.render(goods.length);
    }

    searchCatalog(elem){
        
        let search = ''
        const goodsStore = localStorageUtil.getGoods();
        
        if(elem !== ''){
        DATA.forEach(({name, id, price, weight, discription, image})=>{
            
            if(name.toLowerCase().search(elem) !== -1){

                let activeClass = ' ';

                if(goodsStore.indexOf(id) !== -1){
                    activeClass = this.classNameActBtn;
                }

                search += `
                <li id="${id}">
                <div class="popular__card">
                    <img src="${image}" alt="img">
                    <div class="good--name">
                        <h4>${name}</h4>
                        <span>${weight}г</span>
                    </div>
                    <p>${discription}</p>
                    <div class="price--block">
                        <span>${price}c</span>
                        <div class="plus ${activeClass}" onclick="catalog.addGood(this, '${id}')">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        </div>
                    </div>
                </li>
                `
            }
        })};

        const searchBlock = `<ul>${search}</ul>`
        ROOT_SEARCH_BLOCK.innerHTML = searchBlock;      
    }
    
    showCatalog(elem){

        let catalogItem = "";
        const goodsStore = localStorageUtil.getGoods();

        DATA.forEach(({type, name, id, price, weight, discription, sale, image, popular})=>{
            if(elem == type){

                let activeClass = ' ';

                if(goodsStore.indexOf(id) !== -1){
                    activeClass = this.classNameActBtn;
                    
                }

                catalogItem += `
                <li id="${id}">
                <div class="popular__card">
                    <img src="${image}" alt="img">
                    <div class="good--name">
                        <h4>${name}</h4>
                        <span>${weight}г</span>
                    </div>
                    <p>${discription}</p>
                    <div class="price--block">
                        <span>${price}c</span>
                        <div class="plus ${activeClass}" onclick="catalog.addGood(this, '${id}')">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        </div>
                    </div>
                </li>
                `
            }
        })
        const catalogItems = `
            <ul>
                ${catalogItem}    
            </ul>
    `
        ROOT_CATALOG_ITEMS.innerHTML = catalogItems;

    }

    

}

const catalog = new Catalog();

const goodsStore = localStorageUtil.getGoods();



let catalogBlocks = document.querySelectorAll('.catalog__card'),
    plusBtn = document.querySelectorAll('.plus');

catalogBlocks.forEach(elem =>{
    elem.addEventListener('click',()=>{
        catalog.showCatalog(elem.classList[1]);
    })
});
