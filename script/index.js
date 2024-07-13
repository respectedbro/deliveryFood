const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
const cartBtn = document.querySelector('#cart-button');


const openModal = () => {
    modal.classList.add('open')
}
const closeModal = () => {
    modal.classList.remove('open')
}

cartBtn.addEventListener('click', () => {
    openModal();
})

modal.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('cart-modal__overlay') ||
        e.target.closest('.cart-modal__header--close'))
    {
        closeModal();
    }
});
};

const restFunc = () => {
    const container = document.querySelector('#rests-container');

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image1.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image2.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image3.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image4.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image5.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'image6.jpg'
        }
    ]

     const loading = () => {
        container.innerHTML = '<p style = "width: 100%; text-align: center;">Загрузка</p>';
     }

     const renderRests = (arr) => {
        container.innerHTML = '';
       arr.forEach((card) => {
        container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id=${card.id}" class="products-card">
							<div class="products-card__image">
								<img src="images/rests/${card.image}" alt="${card.image}">
							</div>
							<div class="products-card__descript">
								<div class="products-card__descript--row">
									<h4 class="products-card__descript--title">${card.title}</h4>
									<div class="products-card__descript--badge">${card.time} мин</div>
								</div>
								<div class="products-card__descript--row">
									<div class="products-card__descript-info">
										<div class="products-card__descript-info-raiting">
											<img src="images/icons/star.svg" alt="star">
											${card.rating}
										</div>
										<div class="products-card__descript-info--price">
											${card.price}
										</div>
										<div class="products-card__descript-info--group">
											${card.type}
										</div>
									</div>
								</div>
							</div>
						</a>
            `)
       })
     }

    if(container) {
        loading();
    
        setTimeout(() => {
           renderRests(restArray)
        }, 1000);
    }
}

const goodsFunc = () => {
    const container = document.querySelector('#goods-container');

    const goodsArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            desc: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'goods1.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            desc: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'goods2.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            desc: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'goods3.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            desc: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'goods4.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            desc: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'goods5.jpg'
        },
        {
            id: 0,
            title: 'Ролл с креветкой стандарт',
            desc: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'goods5.jpg'
        }

    ]

    const loading = () => {
        container.innerHTML = '<p style = "width: 100%; text-align: center;">Загрузка</p>';
     }

     const renderGoods = (arr) => {
        container.innerHTML = '';
        arr.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
							<div class="products-card__image">
								<img src="images/goods/${card.image}" alt="${card.image}">
							</div>
							<div class="products-card__descript">
								<div class="products-card__descript--row">
									<h5 class="products-card__descript--name">
										${card.title}
									</h5>
								</div>
								<div class="products-card__descript--row">
									<p class="products-card__descript--text">
										${card.desc}
									</p>
								</div>
								<div class="products-card__descript--row">
									<div class="products-card__descript-controls">
										<button class="btn btn-primary">
											В корзину
											<img src="images/icons/shoping-cart-white.svg" alt="shoping-cart">
										</button>

										<span class="products-card__descript-controls--price">${card.price}</span>
									</div>
								</div>
							</div>
						</div>
                `)
           })
     }

     if(container) {
        loading();
    
        setTimeout(() => {
           renderGoods(goodsArray)
        }, 1000);
    }
}

modalFunc();
restFunc();
goodsFunc();