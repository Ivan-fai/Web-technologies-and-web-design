class Product {
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    addToBasket() {
        console.log(`Товар "${this.name}" додано до кошика`);
    }
}

//клас для кардіо та фітнес-інвентар
class CardioEquipment extends Product {
    constructor(name, amount, image_path) {
        super(name, 'cardio');
        this.amount = amount;
        this.image_path = image_path;
    }
}

//клас для силового обладнання
class StrengthEquipment extends Product {
    constructor(name, amount, image_path) {
        super(name, 'strength');
        this.amount = amount;
        this.image_path = image_path;
    }
}

function productFactory(jsonObject) {
    if (jsonObject.category === 'cardio') {
        return new CardioEquipment(jsonObject.name, jsonObject.amount, jsonObject.image_path);
    } else {
        return new StrengthEquipment(jsonObject.name, jsonObject.amount, jsonObject.image_path);
    }
}

class Basket {
    products = [];

    add(product) {
        const currentTime = new Date().toLocaleTimeString();
        const itemWithTime = {
            name: product.name,
            category: product.category,
            addedTime: currentTime
        };
        this.products.push(itemWithTime);
        this.showAddedItem(itemWithTime);

        document.getElementById('basket-count').textContent = this.products.length;
    }

    showAddedItem(product) {
        const basketContainer = document.getElementById('basket-list');
        const categoryName = product.category === 'cardio' ? 'Кардіо та фітнес' : 'Силове обладнання';
        
        const itemElement = document.createElement('p');
        itemElement.className = 'basket-item';
        itemElement.textContent = `[${product.addedTime}] Додано: ${product.name} (${categoryName})`;
        basketContainer.appendChild(itemElement);
    }
}

class Store {
    products = [];

    constructor() {
        this.basket = new Basket();
    }

    fillStoreWithProducts(jsonList) {
        for (const item of jsonList) {
            let itemProduct = productFactory(item);
            this.products.push(itemProduct);
        }
    }

    addToBasket(productName) {
        let foundProduct;

        for (const item of this.products) {
            if (item.name === productName) {
                foundProduct = item;
                break;
            }
        }

        if (foundProduct && foundProduct.amount > 0) {
            foundProduct.amount -= 1;
            this.basket.add(foundProduct);
            this.showProducts();
        } else {
            console.log(`Товар "${foundProduct.name}" закінчився на складі`);
        }
    }

    showProducts() {
        const storeContainer = document.getElementById('store-grid');
        storeContainer.innerHTML = '';

        for (const item of this.products) {
            const categoryLabel = item.category === 'cardio' ? 'Кардіо / Фітнес' : 'Силове';

            storeContainer.innerHTML += `
                <div class="card">
                    <img src="${item.image_path}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <ul>
                        <li>Категорія: <b>${categoryLabel}</b></li>
                        <li>В наявності: <b>${item.amount} шт.</b></li>
                    </ul>
                    <button onclick="store.addToBasket('${item.name}')"
                     ${item.amount === 0 ? 'disabled' : ''}>
                        ${item.amount === 0 ? 'Немає в наявності' : 'Додати до кошика'}
                    </button>
                </div>
            `;
        }
    }
}

function toggleView(view) {
    const storeSection = document.getElementById('store-section');
    const basketSection = document.getElementById('basket-section');

    if (view === 'basket') {
        storeSection.style.display = 'none';
        basketSection.style.display = 'block';
    } else {
        storeSection.style.display = 'block';
        basketSection.style.display = 'none';
    }
}

async function start() {
    const response = await fetch('./products.json');
    const jsonList = await response.json();

    store.fillStoreWithProducts(jsonList);
    store.showProducts();
}

const store = new Store();
start();