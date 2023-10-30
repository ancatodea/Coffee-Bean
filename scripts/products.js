const cartCounterElement = document.getElementById("cart-counter");
const favoritesCounterElement = document.getElementById("favorites-counter");
const cartElement = document.getElementById('cart')
const cart = [];
const favourites = [];
const products = [
    {
        id: 1,
        name: "CoffeeBean - Coffee 1 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-1.png",
    },
    {
        id: 2,
        name: "CoffeeBean - Coffee 2 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-2.png",
    },
    {
        id: 3,
        name: "CoffeeBean - Coffee 3 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-3.png",
    },
    {
        id: 4,
        name: "CoffeeBean - Coffee 4 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-4.png",
    },
    {
        id: 5,
        name: "CoffeeBean - Coffee 5 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-5.png",
    },
    {
        id: 6,
        name: "CoffeeBean - Coffee 6 0.25l",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-6.png",
    },
    {
        id: 7,
        name: "CoffeeBean - Coffee Pack 1 2x 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-pack-1.png",
    },
    {
        id: 8,
        name: "CoffeeBean - Coffee Pack 2 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-pack-2.png",
    },
    {
        id: 9,
        name: "CoffeeBean - Coffee Pack 3 3x 0.5kg",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis minus quos adipisci, perferendis dolore nostrum ducimus vel rem assumenda maiores inventore qui commodi ipsum nisi fugit! Reprehenderit, neque earum.",
        image: "./assets/images/Coffee-pack-3.png",
    },
];

const productsListElement = document.getElementById("products-list");

products.forEach((product) => {
    const productCardElement = document.createElement("div");
    productCardElement.classList.add("product-card");

    productCardElement.appendChild(
        createProductImage(product.image, product.name)
    );
    productCardElement.appendChild(createProductName(product.name));
    productCardElement.appendChild(
        createProductDescription(product.description)
    );
    productCardElement.appendChild(createProductAddToCartButton(product.id));
    productCardElement.appendChild(
        createProductAddToFavouritesButton(product.id)
    );

    productsListElement.appendChild(productCardElement);
});

function createProductImage(src, alt) {
    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.setAttribute("src", src);
    productImage.setAttribute("alt", alt);

    return productImage;
}

function createProductName(name) {
    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.innerHTML = name;

    return productName;
}

function createProductDescription(description) {
    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.innerText = description;

    return productDescription;
}

function createProductAddToCartButton(productId) {
    const productAddToCartButton = document.createElement("a");
    productAddToCartButton.classList.add("product-add-to-cart-button");
    productAddToCartButton.innerHTML =
        ' <i class="fa-solid fa-shopping-basket"></i> Add to cart';

    productAddToCartButton.addEventListener("click", () => {
        addProductToCart(productId);
    });
    return productAddToCartButton;
}

function addProductToCart(productId) {
    const productDetails = getProductDetails(productId);

    if (cart.some((product) => product.id === productId)) {
        cart.forEach((product) => {
            if (product.id === productId) {
                product.quantity++;
            }
        });
    } else {
        cart.push({
            id: productId,
            name: productDetails.name,
            image: productDetails.image,
            quantity: 1,
        });
    }

    updateCartCounter();
    console.log(cart);
}

function getProductDetails(productId) {
    for (let product of products) {
        if (product.id === productId) {
            return product;
        }
    }
}

function updateCartCounter() {
    cartCounterElement.innerText = cart.length;
}

function createProductAddToFavouritesButton(productId) {
    const productAddToFavouritesButton = document.createElement("a");
    productAddToFavouritesButton.classList.add(
        "product-add-to-favourites-button"
    );
    productAddToFavouritesButton.innerHTML =
        ' <i class="fa-regular fa-heart"></i> ';

    productAddToFavouritesButton.addEventListener("click", () => {
        addProductToFavourites(productId);
    });
    return productAddToFavouritesButton;
}

function addProductToFavourites(productId) {
    const productDetails = getProductDetails(productId);

    if (favourites.some((product) => product.id === productId)) {
        favourites.forEach((product) => {
            if (product.id === productId) {
                product.quantity++;
            }
        });
    } else {
        favourites.push({
            id: productId,
            name: productDetails.name,
            quantity: 1,
        });
    }

    updateFavouritesCounter();
}

function createQuantityElement() {
    const quantityElement = document.createElement('div');
    cart.forEach(product => {
        quantityElement.innerHTML = `Quantity: ${product.quantity}`;
    })

    return quantityElement;
}

function updateFavouritesCounter() {
    favoritesCounterElement.innerText = favourites.length;
}

function createCartList() {
    const cartList = document.createElement("div");
    cartList.classList.add("cart-list-container");

    cart.forEach((product) => {
        cartList.appendChild(createProductImage(product.image, product.name));
        cartList.appendChild(createProductName(product.name));
        cartList.appendChild(createQuantityElement());
    });
    // console.log(cartList);

    cartElement.appendChild(cartList);
    return cartList;
}

function showCartList() {
    cartElement.addEventListener("click", () => {
        createCartList();
    });
}

showCartList();
// function checkIfClicked() {
    
// } 

