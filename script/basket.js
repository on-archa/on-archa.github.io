
class Basket{

    handleClear(){
        ROOT_BASKET.innerHTML = ''
    }

    sendForm(){
        localStorage.clear();
    }
    

    removeGood(id){
        let goods = localStorageUtil.getGoods();
        const index = goods.indexOf(id);

         goods.splice(index, 1);
        localStorage.setItem(localStorageUtil.keyName, JSON.stringify(goods));



        basket.render();
        const store = localStorageUtil.getGoods();
        header.render(store.length);
        catalog.render();
        catalog.showCatalog();
    }

    payForm(elem){
        const goodsStore = localStorageUtil.getGoods();
        console.log(goodsStore);
        if(elem !== 0){
            
        const html = `
        <div class="basket__window--item">
            <div class="goods--info">
                <div class="span" onclick="basket.handleClear()"></div>
                <div class="form__block">
                    <h3>Заполните форму</h3>
                    <form action="https://formspree.io/maypeqze" method="POST"> 
                        <input type="text" placeholder="Ваше имя" name="lastName">
                        <input placeholder="Ваша фамилия" name="firstName">
                        <input placeholder="Номер телефона" name="cellphone">
                        <input placeholder="Ваш адресс" name="adress">
                        <input class="order__list" name="order" value="${goodsStore}">
                        <button type="submit" onclick="basket.sendForm()">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
        `
        ROOT_BASKET.innerHTML = html;
    }

        else{
            alert('Вы не выбрали товар')
        }

        
    }


    render(){
        const goodsStore = localStorageUtil.getGoods();
        let popularItem = "";
        let sumCatalog = 0;
        let nameofGoods = goodsStore;


        DATA.forEach(({id, name, price, weight, image}) =>{
            if(goodsStore.indexOf(id) !== -1) {
                popularItem += `
                    <div class="basket__window--item__block">
                        <div class="good--info">
                            <img src="${image}">
                            <div class="good--info__name">
                                <span>${name}</span>
                                <span>${weight}г</span>
                            </div>
                        </div>
                        <div class="basket--price__block">
                        <span>${price}c</span>
                        <i class="fa fa-plus" aria-hidden="true" onclick="basket.removeGood('${id}')"></i>
                        </div>
                    </div>
                `;
                sumCatalog += price;
            }
        })

        const html =`
            <div class="basket__window--item">
                <div class="goods--info">
                <div class="span" onclick="basket.handleClear()"></div>
                ${popularItem}
                <div class="line"></div>
                <div class="total">
                    <span>Итого к оплате: <span>${sumCatalog}c</span></span>
                    <button onclick="basket.payForm(${sumCatalog})">Перейти к оплате</button>
                </div>
                </div>              
            </div>
        `;
        ROOT_BASKET.innerHTML = html;
        }
}



const basket = new Basket();